import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp, Instagram } from 'lucide-react';

const Footer = () => {
  const footerRef = useRef(null);
  const contentRef = useRef(null);
  const scrollTopRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer content animation
      gsap.fromTo(contentRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          }
        }
      );

      // Scroll to top button animation
      gsap.fromTo(scrollTopRef.current,
        { scale: 0, rotation: -180 },
        {
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          }
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Heroxxayn",
      color: "hover:text-white",
      name: "GitHub",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/ayno._.x",
      color: "hover:text-blue-400",
      name: "LinkedIn",
    },
   
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer ref={footerRef} className="relative bg-gray-900/80 backdrop-blur-sm border-t border-gray-800/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div ref={contentRef} className="grid md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center font-black text-xl text-black">
                A
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Ayan</h3>
                <p className="text-gray-400">Developer & Designer</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Passionate about creating digital experiences that inspire, engage, 
              and make a lasting impact. Always pushing the boundaries of what's possible.
            </p>

            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart size={16} className="text-red-400 animate-pulse" />
              <span>and lots of coffee</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:pl-2 transform transition-all"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex flex-col space-y-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`flex items-center space-x-3 text-gray-400 ${social.color} transition-all duration-300 group`}
                >
                  <social.icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Ayan. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        ref={scrollTopRef}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full text-black shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
      >
        <ArrowUp size={24} />
      </button>

      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-cyan-400/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-transparent rounded-full blur-3xl" />
    </footer>
  );
};

export default Footer;