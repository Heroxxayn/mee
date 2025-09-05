import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Skills = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const skillsRef = useRef(null);
  const categoriesRef = useRef(null);

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
          }
        }
      );

      // Categories animation
      gsap.fromTo(categoriesRef.current.children,
        { y: 80, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: categoriesRef.current,
            start: "top 80%",
          }
        }
      );

      // Skill bars animation
      gsap.fromTo(".skill-bar",
        { width: "0%" },
        {
          width: (i, el) => el.dataset.width,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
          }
        }
      );

      // Skill items animation
      gsap.fromTo(".skill-item",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
          }  
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      color: "from-blue-400 to-cyan-400",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 95 },
        { name: "GSAP", level: 85 },
        { name: "Three.js", level: 75 },
        { name: "Redux.js", level: 85 },
        { name: "Context API", level: 81 },
        { name: "React Native", level: 80 },
      ],
    },
    {
      title: "Backend",
      color: "from-green-400 to-emerald-400",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 82 },
        { name: "MongoDB", level: 80 },
        { name: "Socket.IO", level: 80 },
        { name: "REST APIs", level: 90 },
      ],
    },
    {
      title: "Design",
      color: "from-purple-400 to-pink-400",
      skills: [
        { name: "Figma", level: 92 },
        { name: "Photoshop", level: 80 },
        { name: "UI/UX Design", level: 90 },
      ],
    },
    {
      title: "Tools",
      color: "from-orange-400 to-red-400",
      skills: [
        { name: "Git", level: 90 },
        { name: "Webpack", level: 80 },
        { name: "Vercel", level: 81 },
        { name: "Netlify", level: 81 },
        { name: "Vite", level: 88 },
        { name: "VS Code", level: 95 },
      ],
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              My
            </span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent ml-4">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and creative skills
          </p>
        </div>

        {/* Skills Categories */}
        <div ref={categoriesRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="group">
              <div className="relative p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-cyan-400/50 transition-all duration-500 hover:scale-105">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${category.color} mb-6`}>
                  <span className="text-2xl font-black text-black">
                    {category.title[0]}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                
                <div className="text-gray-400">
                  {category.skills.length} Technologies
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Skills */}
        <div ref={skillsRef} className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title} Skills
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      
                    </div>
                    
                    <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className={`skill-bar h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                        data-width={`${skill.level}%`}
                      >
                        <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Visualization */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-8 p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl">
            <div className="text-center">
              <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-gray-400 text-sm">Technologies</div>
            </div>
            
            <div className="w-px h-12 bg-gray-700" />
            
          
            <div className="text-center">
              <div className="text-3xl font-black bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent mb-2">
                ∞
              </div>
              <div className="text-gray-400 text-sm">Passion</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-transparent rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Skills;