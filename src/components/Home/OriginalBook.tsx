import React, { useEffect, useState } from 'react';

const OriginalBook: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 20 - 10;
      const y = (e.clientY / window.innerHeight) * 20 - 10;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[380px] h-[420px] sm:h-[500px]"
      style={{ perspective: '1200px' }}
    >
      {/* 3D Book */}
      <div
        className="w-full h-full relative"
        style={{
          transformStyle: 'preserve-3d',
          transform: mounted
            ? `rotateX(${mousePos.y * 0.5}deg) rotateY(${mousePos.x * 0.5}deg)`
            : 'rotateX(0deg) rotateY(0deg)',
          transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        {/* Front Cover */}
        <div
          className="absolute inset-0 rounded-xl flex flex-col items-center justify-center text-cream-50 z-10 overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            background: 'linear-gradient(135deg, #9F5434 0%, #6f3c25 40%, #412f27 100%)',
            boxShadow: '0 25px 60px rgba(65, 47, 39, 0.5), inset 0 1px 0 rgba(245, 242, 238, 0.15)',
          }}
        >
          {/* Decorative lines */}
          <div className="absolute top-6 left-6 right-6 h-px bg-cream-200/20" />
          <div className="absolute bottom-6 left-6 right-6 h-px bg-cream-200/20" />
          <div className="absolute top-6 bottom-6 left-6 w-px bg-cream-200/20" />
          <div className="absolute top-6 bottom-6 right-6 w-px bg-cream-200/20" />

          {/* Inner glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,242,238,0.08)_0%,_transparent_70%)]" />

          <div className="relative z-10 p-10 text-center">
            <div className="w-16 h-px bg-sand-300/50 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-wider mb-3">
              BooksGlance
            </h2>
            <p className="text-sm sm:text-base text-cream-200/80 tracking-[0.2em] uppercase font-light">
              Stories Beyond Pages
            </p>
            <div className="w-16 h-px bg-sand-300/50 mx-auto mt-6" />
          </div>

          {/* Subtle texture */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(245,242,238,0.1) 2px, rgba(245,242,238,0.1) 4px)',
          }} />
        </div>

        {/* Back Cover */}
        <div
          className="absolute inset-0 rounded-xl flex flex-col items-center justify-center text-cream-300 z-10"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: 'linear-gradient(135deg, #412f27 0%, #2a1f19 100%)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
          }}
        >
          <p className="text-lg font-serif tracking-widest">Discover. Read. Share.</p>
        </div>

        {/* Spine */}
        <div
          className="absolute top-0 h-full w-[30px] z-[5]"
          style={{
            left: '-15px',
            background: 'linear-gradient(90deg, #412f27 0%, #6f3c25 50%, #412f27 100%)',
            transform: 'rotateY(-90deg) translateZ(15px)',
            transformOrigin: 'right center',
            borderRadius: '2px 0 0 2px',
          }}
        />

        {/* Pages effect (side) */}
        <div
          className="absolute top-[3px] h-[calc(100%-6px)] w-[25px]"
          style={{
            right: '-12px',
            background: 'repeating-linear-gradient(180deg, #f5f2ee 0px, #f5f2ee 1px, #ebe6df 1px, #ebe6df 3px)',
            transform: 'rotateY(90deg) translateZ(12px)',
            transformOrigin: 'left center',
            borderRadius: '0 2px 2px 0',
            boxShadow: 'inset -2px 0 4px rgba(0,0,0,0.1)',
          }}
        />
      </div>

      {/* Book Shadow */}
      <div
        className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[80%] h-[30px] rounded-[50%] bg-clay-900/30 dark:bg-black/40 book-shadow"
      />

      {/* Floating particles around book */}
      <div className="absolute -inset-16 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${3 + (i % 3) * 2}px`,
              height: `${3 + (i % 3) * 2}px`,
              background: `rgba(159, 84, 52, ${0.2 + (i % 5) * 0.06})`,
              left: `${(i * 11 + 8) % 100}%`,
              top: `${(i * 19 + 5) % 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + (i * 0.5) % 3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default OriginalBook;
