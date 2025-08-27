import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { div } from 'framer-motion/client';
import Console from '../assets/console.png';
import Nike from '../assets/nike.png';

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const projectsRef = useRef(null);
  const filterRef = useRef(null);

  // Add state for showing all projects
  const [showAll, setShowAll] = useState(false);

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

      // Filter animation
      gsap.fromTo(filterRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: filterRef.current,
            start: "top 80%",
          }
        }
      );

      // Projects animation
      gsap.fromTo(".project-card",
        { y: 100, opacity: 0, rotationX: -30 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Brainwave",
      description: "Created using React.js and Framer Motion for animations",
      image:
        "https://github.com/NPC-MARIMO/MEE/blob/main/src/assets/Projects/brainwave.png?raw=true",
      tech: ["React", "Framer-Motion"],
      live: "https://my-brainwave.vercel.app/",
    },
    {
      id: 2,
      title: "CyperFiction",
      description: "An Animated project using HTML, CSS and JS",
      image:
        "https://github.com/NPC-MARIMO/MEE/blob/main/src/assets/Projects/cyperfiction.png?raw=true",
      tech: ["HTML", "CSS", "Javascript"],
      live: "https://cyperfiction-by-mosshead.vercel.app/",
    },
    {
      id: 3,
      title: "i-Phone",
      description:
        "A React.js and Three.js project featuring GSAP animations, built as part of my learning journey",
      image:
        "https://github.com/NPC-MARIMO/MEE/blob/main/src/assets/Projects/iphone.png?raw=true",
      tech: ["React", "GSAP", "Three.js"],
      live: "https://i-phone-chi.vercel.app/",
    },
    {
      id: 4,
      title: "Console Design",
      description: "A Design of a page for console and gaming stuff",
      image: Console,
      tech: ["Figma"],
      live: "https://www.figma.com/design/bw3SomeNUCUlNfLiIixdH4/Untitled?node-id=0-1&t=XW4MHW9gCTw7wwZf-1",
    },

    {
      id: 5,
      title: "Nike Design",
      description: "A Nike shoes design page made in Figma",
      image: Nike,
      tech: ["Figma"],
      live: "https://www.figma.com/design/bw3SomeNUCUlNfLiIixdH4/Untitled?node-id=0-1&t=XW4MHW9gCTw7wwZf-1",
    },
    {
      id: 6,
      title: "Car Rental",
      description: "A Next.js frontend project using Tailwind CSS",
      image:
        "https://github.com/NPC-MARIMO/MEE/blob/main/src/assets/Projects/carrental.png?raw=true",
      tech: ["Next.js"],
      live: "https://evo-carrental.vercel.app/",
    },
    {
      id: 7,
      title: "Metaverse",
      description:
        "A Next.js project focusing on frontend and animations using Framer Motion",
      image:
        "https://github.com/NPC-MARIMO/MEE/blob/main/src/assets/Projects/metaverse.png?raw=true",
      tech: ["Next.js", "Framer Motion"],
      live: "https://hello-i-m-me.netlify.app/",
    },
    {
      id: 8,
      title: "E-Commerce",
      description: "A Full Stack MERN E-Commerce Application",
      image:
        "https://github.com/NPC-MARIMO/MEE/blob/main/src/assets/Projects/evotrends.png?raw=true",
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Redux",
        "Cloudinary",
        "Paypal",
      ],
      live: "https://evo-trends-ecms.vercel.app/",
    },
    {
      id: 9,
      title: "Bugatti Landing Page",
      description: "A GSAP-powered animation project built in React.js.",
      image:
        "https://github.com/NPC-MARIMO/MEE/blob/main/src/assets/Projects/bugatti.png?raw=true",
      tech: ["React", "GSAP"],
      live: "https://mc-d-chi.vercel.app/",
    },
  ];

  const categories = ["All", "Web App", "Website", "Dashboard", "Mobile App", "AI Tool"];

  // Determine which projects to show
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Featured
            </span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent ml-4">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            A showcase of my latest work and creative projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div ref={filterRef} className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category, index) => (
          <></>
          ))}
        </div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="project-card group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:scale-105"
            >
              {/* Project Image/Icon */}
              <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-6xl overflow-hidden">
                <span className="transform group-hover:scale-110 transition-transform duration-500">
                  <img src={project.image} alt="" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                 
                  <a
                    href={project.live}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-cyan-400/20 to-purple-500/20 text-cyan-400 rounded-full border border-cyan-400/30">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-yellow-400/20 to-orange-500/20 text-yellow-400 rounded-full border border-yellow-400/30">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium bg-gray-800/50 text-gray-300 rounded border border-gray-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                   
                    <a
                      href={project.live}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                 
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More / Hide Button */}
        <div className="text-center mt-16">
          {!showAll ? (
            <button
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full font-semibold text-black overflow-hidden transition-all duration-300 hover:scale-105"
              onClick={() => setShowAll(true)}
            >
              <span className="relative z-10">View All Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          ) : (
            <button
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full font-semibold text-black overflow-hidden transition-all duration-300 hover:scale-105"
              onClick={() => setShowAll(false)}
            >
              <span className="relative z-10">Hide Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          )}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-transparent rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Projects;