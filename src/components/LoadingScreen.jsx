import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LoadingScreen = () => {
  const containerRef = useRef(null);
  const letterRef = useRef(null);
  const circleRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Initial setup
    gsap.set(letterRef.current, { scale: 0, rotation: -180, opacity: 0 });
    gsap.set(circleRef.current, { scale: 0, rotation: 0 });
    gsap.set(progressRef.current, { width: '0%' });

    // Animation sequence
    tl.to(circleRef.current, {
      scale: 1,
      rotation: 360,
      duration: 1,
      ease: "back.out(1.7)"
    })
    .to(letterRef.current, {
      scale: 1,
      rotation: 0,
      opacity: 1,
      duration: 1.2,
      ease: "elastic.out(1, 0.3)"
    }, "-=0.5")
    .to(progressRef.current, {
      width: '100%',
      duration: 1.5,
      ease: "power2.inOut"
    }, "-=0.8")
    .to(letterRef.current, {
      scale: 1.2,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut"
    })
    .to(containerRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: "power2.inOut"
    }, "+=0.5");

    // Continuous rotation for the outer ring
    gsap.to(circleRef.current, {
      rotation: "+=360",
      duration: 3,
      repeat: -1,
      ease: "none"
    });

  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
    >
      <div className="relative">
        {/* Outer rotating circle */}
        <div 
          ref={circleRef}
          className="w-32 h-32 border-2 border-transparent border-t-cyan-400 border-r-purple-500 rounded-full"
        />
        
        {/* Letter A */}
        <div 
          ref={letterRef}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="text-6xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            A
          </span>
        </div>
        
        {/* Glowing effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 blur-xl" />
      </div>
      
      {/* Progress bar */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
        <div 
          ref={progressRef}
          className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
        />
      </div>
      
      {/* Loading text */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 font-mono text-sm">
        Initializing greatness...
      </div>
    </div>
  );
};

export default LoadingScreen;