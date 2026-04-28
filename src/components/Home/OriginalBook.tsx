import React, { useEffect, useState } from 'react';

const OriginalBook: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 20 - 10;
      const y = (e.clientY / window.innerHeight) * 20 - 10;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '400px',
      height: '500px',
      perspective: '1200px',
      zIndex: 0,
    }}>
      <div style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        transformStyle: 'preserve-3d',
        transform: `rotateX(${mousePos.y * 0.5}deg) rotateY(${mousePos.x * 0.5}deg)`,
        transition: 'transform 0.8s ease-out',
      }}>
        {/* Front Cover */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backfaceVisibility: 'hidden',
          backgroundColor: 'linear-gradient(135deg, #c41e3a 0%, #8B0000 100%)',
          background: 'linear-gradient(135deg, #c41e3a 0%, #8B0000 100%)',
          borderRadius: '8px',
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
          zIndex: 10,
        }}>
          <h2 style={{
            fontSize: '2.5em',
            fontWeight: 'bold',
            marginBottom: '10px',
            textAlign: 'center',
          }}>BooksGlance</h2>
          <p style={{
            fontSize: '1.2em',
            textAlign: 'center',
            opacity: 0.9,
          }}>Stories Beyond Pages</p>
        </div>

        {/* Back Cover */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backfaceVisibility: 'hidden',
          backgroundColor: '#1a1a1a',
          transform: 'rotateY(180deg)',
          borderRadius: '8px',
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#e0e0e0',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
          zIndex: 10,
        }}>
          <p style={{
            fontSize: '1.2em',
            textAlign: 'center',
          }}>Discover. Read. Share.</p>
        </div>

        {/* Spine - just decorative 3D effect */}
        <div style={{
          position: 'absolute',
          width: '20px',
          height: '100%',
          top: 0,
          left: '50%',
          marginLeft: '-10px',
          background: 'linear-gradient(90deg, #8B0000 0%, #c41e3a 50%, #8B0000 100%)',
          transformStyle: 'preserve-3d',
          zIndex: 5,
        }} />
      </div>

      {/* Floating particles */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        left: '-50px',
        right: '-50px',
        bottom: '-50px',
        pointerEvents: 'none',
        zIndex: -1,
      }}>
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              backgroundColor: `rgba(196, 30, 58, ${0.3 + (i * 7 % 10) * 0.03})`,
              borderRadius: '50%',
              left: `${(i * 17 + 5) % 100}%`,
              top: `${(i * 23 + 11) % 100}%`,
              animation: `float ${3 + (i * 3 % 10) * 0.2}s ease-in-out infinite`,
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            opacity: 0;
            transform: translateY(0) translateX(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-30px) translateX(10px);
          }
        }
      `}</style>
    </div>
  );
};

export default OriginalBook;
