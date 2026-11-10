/*
 * swarm-init.js — boots the vendored swarm rebuild engine on Shadab Alam's portfolio.
 * Inspired by saai.pro (Dhvanil Patel / Joel Califa tribute).
 *
 * Behaviour:
 *   1. Waits for React to mount the full page into the DOM and webfonts to load.
 *   2. The real page is captured into a blueprint (boxes, text, media, rulers, guides).
 *   3. The page is blanked and rebuilt in real-time by a swarm of multiplayer cursors (Ada, Linus, etc.).
 *   4. "Tour" smoothly scrolls down through the build (on both desktop and Android/mobile).
 *   5. "Go live" / ESC / user scroll restores the live, interactive React page.
 */
(function() {
    "use strict";

    var KEY = "__swarmRebuild";

    var opts = {
        auto: true,
        delayMs: 400,
        waitFonts: true,
        visibilityTimeoutMs: 8000,
        oncePerSession: false
    };

    var savedScrollBehavior = null;
    var scrollGuardInterval = null;
    var cancelListenersBound = false;

    function q(name) {
        try {
            return new URLSearchParams(location.search).get(name);
        } catch (_) {
            return null;
        }
    }

    function mode() {
        var v = q("swarm");
        if (v === "off" || v === "0") return "off";
        if (v === "once" || v === "session") return "once";
        if (v === "1" || v === "on" || v === "always") return "always";
        return opts.oncePerSession ? "once" : "always";
    }

    function forced() {
        return mode() === "always";
    }

    function disabled() {
        return mode() === "off";
    }

    function alreadyDone() {
        if (mode() !== "once") return false;
        try {
            return sessionStorage.getItem("swarm:done") === "1";
        } catch (_) {
            return false;
        }
    }

    function prefersReducedMotion() {
        if (forced()) return false;
        try {
            return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        } catch (_) {
            return false;
        }
    }

    function markDone() {
        try {
            sessionStorage.setItem("swarm:done", "1");
        } catch (_) {}
    }

    function waitVisible(timeoutMs) {
        if (document.visibilityState === "visible") return Promise.resolve(true);
        return new Promise(function(resolve) {
            var done = false;
            var onVis = function() {
                if (document.visibilityState === "visible" && !done) {
                    done = true;
                    document.removeEventListener("visibilitychange", onVis);
                    resolve(true);
                }
            };
            document.addEventListener("visibilitychange", onVis);
            setTimeout(function() {
                if (done) return;
                done = true;
                document.removeEventListener("visibilitychange", onVis);
                resolve(document.visibilityState === "visible");
            }, timeoutMs);
        });
    }

    // Wait until React has mounted content inside #root
    function waitReactReady(maxMs) {
        return new Promise(function(resolve) {
            var start = performance.now();
            function check() {
                var root = document.getElementById("root");
                if (root && root.children.length > 0) {
                    resolve(true);
                    return;
                }
                if (performance.now() - start > maxMs) {
                    resolve(true);
                    return;
                }
                requestAnimationFrame(check);
            }
            check();
        });
    }

    function loadEngine() {
        return new Promise(function(resolve, reject) {
            if (window[KEY]) return resolve(window[KEY]);
            var s = document.createElement("script");
            s.src = "/swarm/swarm.js";
            s.async = false;
            s.onload = function() {
                if (window[KEY]) resolve(window[KEY]);
                else reject(new Error("swarm engine did not register"));
            };
            s.onerror = function() {
                reject(new Error("failed to load swarm engine"));
            };
            document.head.appendChild(s);
        });
    }

    // Temporarily force instant scroll behavior so Tour incremental scrollBy()
    // is never swallowed by CSS smooth-scroll on Android Chrome / WebViews.
    function enableInstantScrollForSwarm() {
        if (savedScrollBehavior === null) {
            savedScrollBehavior = document.documentElement.style.scrollBehavior || "";
        }
        document.documentElement.style.scrollBehavior = "auto";
        if (document.body) {
            document.body.style.scrollBehavior = "auto";
        }
        if (scrollGuardInterval) clearInterval(scrollGuardInterval);
        scrollGuardInterval = setInterval(function() {
            if (!window[KEY] || !window[KEY].app || window[KEY].app.dead) {
                document.documentElement.style.scrollBehavior = savedScrollBehavior;
                if (document.body) document.body.style.scrollBehavior = "";
                savedScrollBehavior = null;
                clearInterval(scrollGuardInterval);
                scrollGuardInterval = null;
            }
        }, 400);
    }

    // Make the vendored swarm HUD responsive on narrow Android / mobile viewports
    function injectMobileHudStyles(host) {
        if (!host || !host.shadowRoot) return;
        if (host.shadowRoot.querySelector('style[data-swarm-mobile="1"]')) return;
        var st = document.createElement("style");
        st.setAttribute("data-swarm-mobile", "1");
        st.textContent =
            "@media (max-width: 640px) {" +
            "  .hud {" +
            "    left: 8px; right: 8px; bottom: 12px;" +
            "    transform: translateY(18px);" +
            "    width: auto; max-width: calc(100vw - 16px);" +
            "    flex-wrap: wrap; justify-content: center;" +
            "    gap: 6px; padding: 8px 10px;" +
            "    white-space: normal; font-size: 11px;" +
            "  }" +
            "  .hud.on { transform: translateY(0); }" +
            "  .hud .dots { display: none; }" +
            "  .hud .txt, .hud .status { font-size: 11px; gap: 5px; }" +
            "  .hud .bar { width: 44px; }" +
            "  .hud button { padding: 6px 9px; font-size: 11px; }" +
            "  .hud .x { padding: 6px 8px; }" +
            "}";
        host.shadowRoot.appendChild(st);
    }

    function isEventInsideSwarmHud(e) {
        try {
            var host = document.querySelector("swarm-rebuild");
            if (!host) return false;
            var path = typeof e.composedPath === "function" ? e.composedPath() : [];
            var hud = host.shadowRoot && host.shadowRoot.querySelector(".hud");
            if (!hud) return false;
            for (var i = 0; i < path.length; i++) {
                if (path[i] === hud) return true;
            }
        } catch (_) {}
        return false;
    }

    function bindCancelListeners() {
        if (cancelListenersBound) return;
        cancelListenersBound = true;

        var cancel = function() {
            if (!window[KEY] || !window[KEY].app) return;
            try {
                window[KEY].app.tour = false;
            } catch (_) {}
        };

        // Desktop wheel & keyboard navigation cancel tour
        window.addEventListener("wheel", cancel, { passive: true });
        document.addEventListener("keydown", function(e) {
            if (e.key === "ArrowDown" || e.key === "ArrowUp" ||
                e.key === "PageDown" || e.key === "PageUp" ||
                e.key === " " || e.key === "Home" || e.key === "End") {
                cancel();
            }
        });

        // Mobile/Android: ONLY cancel Tour on a deliberate swipe/drag scroll (> 24px),
        // NOT on casual taps (like tapping "Tap for sound" or HUD controls).
        var touchStartY = null;
        var touchIgnored = false;
        window.addEventListener("touchstart", function(e) {
            touchIgnored = isEventInsideSwarmHud(e);
            if (!touchIgnored && e.touches && e.touches.length === 1) {
                touchStartY = e.touches[0].clientY;
            } else {
                touchStartY = null;
            }
        }, { passive: true });

        window.addEventListener("touchmove", function(e) {
            if (touchIgnored || touchStartY === null) return;
            if (e.touches && e.touches.length === 1) {
                var dy = Math.abs(e.touches[0].clientY - touchStartY);
                if (dy > 24) {
                    touchStartY = null;
                    cancel();
                }
            }
        }, { passive: true });

        window.addEventListener("touchend", function() {
            touchStartY = null;
            touchIgnored = false;
        }, { passive: true });
    }

    // Retry enabling Tour until swarm HUD mounts and engine is attached
    function activateTourWithRetry(attemptsLeft) {
        if (attemptsLeft <= 0) return;
        try {
            var engine = window[KEY];
            var host = document.querySelector("swarm-rebuild");
            if (host) injectMobileHudStyles(host);

            if (engine && engine.app && !engine.app.dead && host && host.shadowRoot) {
                var btn = host.shadowRoot.querySelector('[data-a="tour"]');
                if (btn && !btn.hidden) {
                    if (!engine.app.tour) {
                        btn.click();
                    }
                    bindCancelListeners();
                    return;
                }
            }
        } catch (_) {}

        setTimeout(function() {
            activateTourWithRetry(attemptsLeft - 1);
        }, 200);
    }

    async function launchSwarm(isManualTrigger) {
        try {
            enableInstantScrollForSwarm();

            var engine = await loadEngine();
            if (isManualTrigger && engine) {
                if (engine.app) {
                    engine.stop(false);
                    await new Promise(function(r) {
                        setTimeout(r, 180);
                    });
                }
                engine.start();
            }

            markDone();

            // Auto-start Tour on both PC and Android so smooth scroll-driven building runs automatically
            setTimeout(function() {
                activateTourWithRetry(15);
            }, 350);
        } catch (err) {
            console.error("[swarm] launch failed", err);
        }
    }

    async function boot() {
        if (!opts.auto) return;
        if (disabled()) return;
        if (prefersReducedMotion()) return;
        if (alreadyDone()) return;
        if (window[KEY]) return;

        if (document.readyState !== "complete") {
            await new Promise(function(r) {
                window.addEventListener("load", r, { once: true });
            });
        }

        await waitReactReady(3000);

        var visible = await waitVisible(opts.visibilityTimeoutMs);
        if (!visible) return;

        if (opts.waitFonts) {
            try {
                await Promise.race([
                    document.fonts.ready,
                    new Promise(function(r) { setTimeout(r, 1500); })
                ]);
            } catch (_) {}
        }

        await new Promise(function(r) {
            setTimeout(r, opts.delayMs);
        });

        if (disabled() || alreadyDone()) return;
        if (document.visibilityState !== "visible") return;

        await launchSwarm(false);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", boot, { once: true });
    } else {
        boot();
    }

    // Expose manual trigger for the React UI button
    window.__triggerSwarmRebuild = function() {
        launchSwarm(true);
    };

    // ESC key drops swarm immediately
    window.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && window[KEY] && window[KEY].app) {
            try {
                window[KEY].stop(false);
            } catch (_) {}
        }
    });
})();
