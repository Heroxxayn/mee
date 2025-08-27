import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Palette, Zap, Heart } from 'lucide-react';
import Ayn from '../assets/ayn.jpg';

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
          }
        }
      );

      // Image animation with 3D effect
      gsap.fromTo(imageRef.current,
        { x: -100, opacity: 0, rotationY: -30 },
        {
          x: 0,
          opacity: 1,
          rotationY: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
          }
        }
      );

      // Content animation
      gsap.fromTo(contentRef.current.children,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
          }
        }
      );

      // Stats animation
      gsap.fromTo(statsRef.current.children,
        { y: 50, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          }
        }
      );

      // Features animation
      gsap.fromTo(featuresRef.current.children,
        { y: 80, opacity: 0, rotationX: -45 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { number: "18", label: "Age" },
    { number: "10+", label: "Projects Completed" },
    { number: "1+", label: "Years Experience" },
    { number: "24/7", label: "Dedication" },
  ];

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that stands the test of time.',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting visually stunning interfaces that provide exceptional user experiences.',
      color: 'from-purple-400 to-pink-400'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing every pixel and line of code for lightning-fast performance.',
      color: 'from-yellow-400 to-orange-400'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Putting heart and soul into every project, ensuring excellence in every detail.',
      color: 'from-red-400 to-pink-400'
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              About
            </span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent ml-4">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {/* Profile Image */}
          <div ref={imageRef} className="relative group">
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-400/20 to-purple-600/20 backdrop-blur-sm border border-gray-700/50">
                <div className="w-full h-full flex items-center justify-center text-6xl font-black bg-gradient-to-br from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  <img src={Ayn} alt="Ayan" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 -z-10" />
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6">
              Passionate Developer & Creative Designer
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Hello! I'm Ayan, a passionate developer and designer who loves creating 
              digital experiences that make a difference. With a keen eye for detail 
              and a love for clean, efficient code, I bring ideas to life through 
              innovative web solutions.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey in tech started with curiosity and has evolved into a 
              commitment to excellence. I specialize in modern web technologies 
              and always stay updated with the latest trends and best practices.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new design trends, 
              contributing to open-source projects, or experimenting with the 
              latest technologies to push the boundaries of what's possible.
            </p>

          
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-cyan-400/50 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">
                  {stat.label}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div ref={featuresRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="relative p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-cyan-400/50 transition-all duration-500 hover:scale-105">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6`}>
                  <feature.icon size={32} className="text-black" />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h4>
                
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-transparent rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default About;