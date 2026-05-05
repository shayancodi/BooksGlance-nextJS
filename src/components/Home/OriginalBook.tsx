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
        {/* Front Cover — dark leather + gold foil */}
        <div
          className="absolute inset-0 rounded-xl flex flex-col items-center justify-center text-ivory-100 z-10 overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            background: 'linear-gradient(135deg, #1a1a24 0%, #0d0d12 40%, #18181f 100%)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(201, 169, 110, 0.15)',
          }}
        >
          {/* Gold decorative border */}
          <div className="absolute top-6 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
          <div className="absolute top-6 bottom-6 left-6 w-px bg-gradient-to-b from-transparent via-gold-500/40 to-transparent" />
          <div className="absolute top-6 bottom-6 right-6 w-px bg-gradient-to-b from-transparent via-gold-500/40 to-transparent" />

          {/* Gold corner accents */}
          <div className="absolute top-5 left-5 w-3 h-3 border-t border-l border-gold-500/50" />
          <div className="absolute top-5 right-5 w-3 h-3 border-t border-r border-gold-500/50" />
          <div className="absolute bottom-5 left-5 w-3 h-3 border-b border-l border-gold-500/50" />
          <div className="absolute bottom-5 right-5 w-3 h-3 border-b border-r border-gold-500/50" />

          {/* Inner glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,110,0.06)_0%,_transparent_70%)]" />

          <div className="relative z-10 p-10 text-center">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-wider mb-3 bg-gradient-to-b from-gold-300 via-gold-500 to-gold-700 bg-clip-text text-transparent">
              BooksGlance
            </h2>
            <p className="text-sm sm:text-base text-gold-500/70 tracking-[0.2em] uppercase font-light">
              Stories Beyond Pages
            </p>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent mx-auto mt-6" />
          </div>

          {/* Subtle leather texture */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(201,169,110,0.15) 2px, rgba(201,169,110,0.15) 4px)',
          }} />
        </div>

        {/* Back Cover */}
        <div
          className="absolute inset-0 rounded-xl flex flex-col items-center justify-center text-gold-500/60 z-10"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: 'linear-gradient(135deg, #18181f 0%, #0d0d12 100%)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)',
          }}
        >
          <p className="text-lg font-serif tracking-widest">Discover. Read. Share.</p>
        </div>

        {/* Spine */}
        <div
          className="absolute top-0 h-full w-[30px] z-[5]"
          style={{
            left: '-15px',
            background: 'linear-gradient(90deg, #0d0d12 0%, #1a1a24 50%, #0d0d12 100%)',
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
            background: 'repeating-linear-gradient(180deg, #F5F0E8 0px, #F5F0E8 1px, #EBE4D6 1px, #EBE4D6 3px)',
            transform: 'rotateY(90deg) translateZ(12px)',
            transformOrigin: 'left center',
            borderRadius: '0 2px 2px 0',
            boxShadow: 'inset -2px 0 4px rgba(0,0,0,0.15)',
          }}
        />
      </div>

      {/* Book Shadow */}
      <div
        className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[80%] h-[30px] rounded-[50%] bg-black/50 book-shadow"
      />

      {/* Floating gold particles around book */}
      <div className="absolute -inset-16 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${3 + (i % 3) * 2}px`,
              height: `${3 + (i % 3) * 2}px`,
              background: `rgba(201, 169, 110, ${0.15 + (i % 5) * 0.06})`,
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
