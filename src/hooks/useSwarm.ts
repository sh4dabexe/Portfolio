import { useState, useEffect, useCallback } from 'react';

declare global {
  interface Window {
    __swarmRebuild?: {
      toggle: () => void;
      start: () => void;
      stop: (reveal?: boolean) => void;
      app?: {
        tour: boolean;
        dead: boolean;
        speedIx: number;
        speeds: number[];
      } | null;
    };
    __triggerSwarmRebuild?: (isManualTrigger?: boolean) => void;
  }
}

export const useSwarm = () => {
  const [isRunning, setIsRunning] = useState(false);

  const checkStatus = useCallback(() => {
    const active = !!(window.__swarmRebuild && window.__swarmRebuild.app && !window.__swarmRebuild.app.dead);
    setIsRunning(active);
  }, []);

  useEffect(() => {
    const timer = setInterval(checkStatus, 500);
    return () => clearInterval(timer);
  }, [checkStatus]);

  const triggerRebuild = useCallback(() => {
    if (typeof window.__triggerSwarmRebuild === 'function') {
      window.__triggerSwarmRebuild(true);
    } else if (window.__swarmRebuild) {
      window.__swarmRebuild.toggle();
    }
    setTimeout(checkStatus, 300);
  }, [checkStatus]);

  const stop = useCallback((reveal = true) => {
    if (window.__swarmRebuild && window.__swarmRebuild.app) {
      window.__swarmRebuild.stop(reveal);
    }
    setIsRunning(false);
  }, []);

  return {
    isRunning,
    triggerRebuild,
    stop,
  };
};

