      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = (a.x - b.x) * width;
          const dy = (a.y - b.y) * height;
          const distance = Math.hypot(dx, dy);
          const maxDistance = 145;
          if (distance >= maxDistance) continue;
          context.beginPath();
          context.moveTo(a.x * width, a.y * height);
          context.lineTo(b.x * width, b.y * height);
          context.strokeStyle = `rgba(72, 171, 210, ${0.18 * (1 - distance / maxDistance)})`;
          context.lineWidth = 0.75;
          context.stroke();
        }
      }

      for (const p of particles) {
        const x = p.x * width;
        const y = p.y * height;
        const size = 2 + p.depth * 3.3;
        context.globalAlpha = 0.5 + p.depth * 0.35;
        context.fillStyle = p.color;
        context.fillRect(x - size / 2, y - size / 2, size, size);
      }
      context.globalAlpha = 1;
    }

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    animationFrame = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 z-[1] h-full w-full pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
}
