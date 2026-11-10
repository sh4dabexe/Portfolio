/*
 * swarm-init.js — boots the vendored swarm rebuild engine on Shadab Alam's portfolio.
 * Inspired by saai.pro (Dhvanil Patel / Joel Califa tribute).
 *
 * Behaviour:
 *   1. Waits for React to mount the full page into the DOM and webfonts to load.
 *   2. The real page is captured into a blueprint (boxes, text, media, rulers, guides).
 *   3. The page is blanked and rebuilt in real-time by a swarm of multiplayer cursors (Ada, Linus, etc.).
 *   4. "Tour" smoothly scrolls down through the build.
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
        // true = boots once per session so returning visitors get direct access
        // can be overridden with ?swarm=1 or the UI "Rebuild ⚡" button
        oncePerSession: false
    };

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

    async function launchSwarm(isManualTrigger) {
        try {
            var engine = await loadEngine();
            if (isManualTrigger && engine) {
                // If already running, restart; otherwise start
                if (engine.app) {
                    engine.stop(false);
                    setTimeout(function() {
                        engine.start();
                    }, 100);
                } else {
                    engine.start();
                }
            }

            markDone();

            // Auto-start Tour so visitors see smooth scroll-driven building
            if (window[KEY] && window[KEY].app && !window[KEY].app.tour) {
                var started = false;
                var start = function() {
                    if (started) return;
                    started = true;
                    setTimeout(function() {
                        try {
                            var host = document.querySelector("swarm-rebuild");
                            var btn = host && host.shadowRoot && host.shadowRoot.querySelector('[data-a="tour"]');
                            if (btn && !btn.hidden) btn.click();
                        } catch (_) {}
                    }, 400);
                };
                var cancel = function() {
                    if (!window[KEY] || !window[KEY].app) return;
                    try {
                        window[KEY].app.tour = false;
                    } catch (_) {}
                };

                start();

                window.addEventListener("wheel", cancel, { passive: true });
                window.addEventListener("touchstart", cancel, { passive: true });
                document.addEventListener("keydown", function(e) {
                    if (e.key === "ArrowDown" || e.key === "ArrowUp" ||
                        e.key === "PageDown" || e.key === "PageUp" ||
                        e.key === " " || e.key === "Home" || e.key === "End") cancel();
                });
            }
        } catch (err) {
            console.error("[swarm] launch failed", err);
        }
    }

    async function boot() {
        if (!opts.auto) return;
        if (disabled()) return;
        if (prefersReducedMotion()) return;
        if (alreadyDone()) return;
        if (window[KEY]) return; // already running

        // Ensure DOM and React are rendered
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

