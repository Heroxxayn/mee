import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loader = ({ onComplete }) => {
  const loaderRef = useRef();
  const letterRef = useRef();
  const circleRef = useRef();
  const counterRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    });

    // Counter animation
    gsap.to(counterRef.current, {
      innerHTML: 100,
      duration: 2,
      ease: "power2.out",
      snap: { innerHTML: 1 },
      onUpdate: function() {
        counterRef.current.innerHTML = Math.ceil(this.targets()[0].innerHTML) + "%";
      }
    });

    // Letter A animation
    tl.fromTo(letterRef.current, 
      { 
        scale: 0,
        rotation: -180,
        opacity: 0 
      },
      { 
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1.5,
        ease: "elastic.out(1, 0.3)" 
      }
    )
    .to(letterRef.current, {
      scale: 1.2,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut"
    })
    .to(circleRef.current, {
      scale: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut"
    }, "-=0.5")
    .to(loaderRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut"
    });

    // Particle animation
    const particles = [];
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-cyan-400 rounded-full';
      particle.style.left = '50%';
      particle.style.top = '50%';
      loaderRef.current.appendChild(particle);
      particles.push(particle);

      gsap.to(particle, {
        x: Math.random() * 400 - 200,
        y: Math.random() * 400 - 200,
        opacity: 0,
        duration: 2,
        delay: Math.random() * 1,
        ease: "power2.out"
      });
    }

  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
    >
      <div className="relative">
        <div
          ref={circleRef}
          className="absolute inset-0 w-32 h-32 border-4 border-cyan-400 rounded-full animate-pulse"
          style={{ transform: 'translate(-50%, -50%)', left: '50%', top: '50%' }}
        />
        <div
          ref={letterRef}
          className="text-8xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text select-none"
        >
          A
        </div>
      </div>
      <div className="absolute bottom-20 text-cyan-400 text-xl font-mono">
        <span ref={counterRef}>0%</span>
      </div>
      <div className="absolute bottom-10 text-gray-400 text-sm">
        Loading the magic...
      </div>
    </div>
  );
};

export default Loader;