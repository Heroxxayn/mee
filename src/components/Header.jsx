import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Initial animation
    gsap.fromTo(headerRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 3.5, ease: "power3.out" }
    );

    // Logo animation
    gsap.fromTo(logoRef.current,
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 1.2, delay: 3.7, ease: "back.out(1.7)" }
    );

    // Nav items animation
    gsap.fromTo(navRef.current.children,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 3.9, stagger: 0.1, ease: "power2.out" }
    );

    // Scroll effect
    const handleScroll = () => {
      const scrollY = window.scrollY;
      gsap.to(headerRef.current, {
        backdropFilter: scrollY > 100 ? 'blur(20px)' : 'blur(0px)',
        backgroundColor: scrollY > 100 ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.1)',
        duration: 0.3
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-40 px-6 py-4 bg-black/10 backdrop-blur-sm border-b border-gray-800/50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div 
          ref={logoRef}
          className="relative group cursor-pointer"
          onClick={() => handleNavClick('#home')}
        >
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center font-black text-xl text-black relative overflow-hidden">
            A
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
        </div>

        {/* Desktop Navigation */}
        <nav ref={navRef} className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className="relative group px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300"
            >
              <span className="relative z-10 font-medium">{item.name}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-gray-800/50">
          <nav className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-left py-2 text-gray-300 hover:text-white transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;