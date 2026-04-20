import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageSquare } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/properties" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const isHome = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-700 ${
        scrolled || !isHome 
        ? "bg-white/80 backdrop-blur-xl border-b border-gray-100 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.03)]" 
        : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-8 lg:px-12">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-5 group">
            <div className="bg-white p-2.5 rounded-2xl shadow-2xl group-hover:rotate-3 transition-all duration-700 border border-gray-100 flex items-center justify-center scale-110">
              <img src="/logo.png" alt="Krishna Properties" className="h-10 w-auto" />
            </div>
            <div className="flex flex-col">
              <span className={`font-heading font-black text-2xl lg:text-3xl tracking-tighter leading-none ${scrolled || !isHome ? "text-secondary" : "text-white"}`}>
                KRISHNA <span className="text-secondary-light">PROPERTIES</span>
              </span>
              <span className={`text-[9px] uppercase tracking-[0.5em] font-black mt-1 ${scrolled || !isHome ? "text-accent" : "text-accent"}`}>
                Elite Registry
              </span>
            </div>
          </Link>
          
          {/* Desktop Nav & Actions Grouped on Right */}
          <div className="hidden xl:flex items-center gap-12">
            <div className="flex items-center gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[13px] uppercase tracking-[0.2em] font-black transition-all hover:text-accent relative py-2 ${
                    location.pathname === link.path 
                    ? "text-accent" 
                    : (scrolled || !isHome) ? "text-secondary" : "text-white"
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div 
                      layoutId="navUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            <div className="h-8 w-[1px] bg-gray-200/20" />

            <div className="flex items-center gap-8">
              <div className="flex flex-col items-end">
                <span className={`text-[8px] uppercase font-black tracking-widest ${scrolled || !isHome ? "text-gray-400" : "text-gray-400"}`}>Private Line</span>
                <a href="tel:8586881644" className={`font-black text-lg lg:text-xl tracking-tighter ${scrolled || !isHome ? "text-secondary" : "text-white"} hover:text-accent transition-colors`}>
                  8586881644
                </a>
              </div>
              <a
                href="https://wa.me/918368591706"
                className={`btn-premium flex items-center gap-3 px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl ${
                  (scrolled || !isHome)
                  ? "bg-secondary text-white" 
                  : "bg-white text-secondary"
                }`}
              >
                Concierge Desk
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`xl:hidden p-3 rounded-2xl transition-all ${
              (scrolled || !isHome) ? "bg-gray-50 text-secondary" : "bg-white/10 text-white backdrop-blur-md"
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden"
          >
            <div className="px-8 py-12 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-2xl font-heading font-black tracking-tighter ${
                    location.pathname === link.path ? "text-accent" : "text-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 grid grid-cols-2 gap-4">
                 <a href="tel:8586881644" className="bg-gray-50 text-secondary py-5 rounded-2xl font-bold flex flex-col items-center justify-center">
                    <span className="text-[10px] text-gray-400 uppercase mb-1">Call</span>
                    <Phone size={18} />
                 </a>
                 <a href="https://wa.me/918368591706" className="bg-secondary text-white py-5 rounded-2xl font-bold flex flex-col items-center justify-center">
                    <span className="text-[10px] text-accent uppercase mb-1">WhatsApp</span>
                    <MessageSquare size={18} />
                 </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
