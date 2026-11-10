import React, { useEffect, useRef } from 'react';

export const AuroraCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: 0.5,
      y: 0.5,
      targetX: 0.5,
      targetY: 0.5,
    };

    // Crimson and Noir floating atmospheric orbs
    const orbs = [
      {
        x: 0.35,
        y: 0.38,
        radius: 0.50,
        vx: 0.00025,
        vy: 0.00018,
        color: 'rgba(239, 68, 68, 0.13)', // Crimson red
      },
      {
        x: 0.72,
        y: 0.45,
        radius: 0.44,
        vx: -0.00018,
        vy: 0.00022,
        color: 'rgba(185, 28, 28, 0.09)', // Deep blood red
      },
      {
        x: 0.50,
        y: 0.82,
        radius: 0.48,
        vx: 0.00016,
        vy: -0.00018,
        color: 'rgba(255, 255, 255, 0.025)', // Ghost monochrome highlight
      },
    ];

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX / width;
      mouse.targetY = e.clientY / height;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const render = () => {
      // Ease mouse coordinates for smooth parallax
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      ctx.clearRect(0, 0, width, height);

      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < 0.1 || orb.x > 0.9) orb.vx *= -1;
        if (orb.y < 0.1 || orb.y > 0.9) orb.vy *= -1;

        const px = (orb.x + (mouse.x - 0.5) * 0.05) * width;
        const py = (orb.y + (mouse.y - 0.5) * 0.05) * height;
        const r = orb.radius * Math.min(width, height);

        const gradient = ctx.createRadialGradient(px, py, 0, px, py, r);
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      id="aurora-canvas"
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none z-0"
    />
  );
};

