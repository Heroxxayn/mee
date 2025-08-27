import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const ctaRef = useRef(null);
  const socialRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 4 });

    // Main title animation
    tl.fromTo(titleRef.current.children,
      { y: 100, opacity: 0, rotationX: -90 },
      { 
        y: 0, 
        opacity: 1, 
        rotationX: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "back.out(1.7)"
      }
    )
    // Subtitle animation
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
      "-=0.6"
    )
    // Description animation
    .fromTo(descriptionRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.4"
    )
    // CTA buttons animation
    .fromTo(ctaRef.current.children,
      { y: 30, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)" },
      "-=0.4"
    )
    // Social links animation
    .fromTo(socialRef.current.children,
      { scale: 0, rotation: -180, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)" },
      "-=0.4"
    )
    // Scroll indicator animation
    .fromTo(scrollRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.2"
    );

    // Floating animation for the scroll indicator
    gsap.to(scrollRef.current, {
      y: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });

    // Parallax effect on mouse move
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX - window.innerWidth / 2) / window.innerWidth;
      const y = (clientY - window.innerHeight / 2) / window.innerHeight;

      gsap.to(heroRef.current, {
        rotationY: x * 5,
        rotationX: -y * 5,
        duration: 1,
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScrollDown = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen mt-16 flex items-center justify-center relative px-6">
      <div ref={heroRef} className="text-center max-w-4xl mx-auto relative z-10">
        {/* Main Title */}
        <h1 ref={titleRef} className="text-6xl md:text-8xl font-black mb-6 leading-tight">
          <span className="inline-block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Hi, I'm
          </span>
          <br />
          <span className="inline-block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent relative">
            Ayan
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10" />
          </span>
        </h1>

        {/* Subtitle */}
        <div ref={subtitleRef} className="mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-300 mb-4">
            Developer & Designer
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Description */}
        <p ref={descriptionRef} className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Crafting digital experiences that blend creativity with cutting-edge technology. 
          I transform ideas into stunning, functional realities.
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full font-semibold text-black overflow-hidden transition-all duration-300 hover:scale-105">
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          
          <button  className="group relative px-8 py-4 border-2 border-gray-600 rounded-full font-semibold text-white hover:border-cyan-400 transition-all duration-300 hover:scale-105 overflow-hidden">
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* Social Links */}
        <div ref={socialRef} className="flex justify-center space-x-6 mb-16">
          {[
            { icon: Github, href: '#', color: 'hover:text-white' },
            { icon: Linkedin, href: '#', color: 'hover:text-blue-400' },
            { icon: Mail, href: '#', color: 'hover:text-red-400' }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className={`p-3 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 group`}
            >
              <social.icon size={24} />
              <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
            </a>
          ))}
        </div>

      
      </div>

      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-transparent rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;