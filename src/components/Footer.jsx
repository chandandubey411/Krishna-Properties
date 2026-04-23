import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-32 pb-16 relative overflow-hidden">
      {/* Structural Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(circle_at_20%_20%,white,transparent)]"></div>
      
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-20 mb-32">
          {/* Brand Identity Module */}
          <div className="lg:col-span-5 space-y-12">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-accent transition-all duration-500">
                 <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-2xl tracking-tighter leading-none">
                  KRISHNA <span className="text-accent italic font-light">PROPERTIES</span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mt-1">Foundations of Trust</span>
              </div>
            </Link>
            
            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-md">
              A private consultancy desk facilitating Noida's most prestigious residential and commercial asset acquisitions since 2012.
            </p>
            
            <div className="flex gap-4">
              {[
                { icon: <FaInstagram size={20} />, link: "https://www.instagram.com/pankajpropertymines/" },
                { icon: <FaFacebook size={20} />, link: "https://www.facebook.com/mohit.singh.7359447/" },
                { icon: <FaTwitter size={20} />, link: "#" }
              ].map((social, i) => (
                <a key={i} href={social.link} className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-secondary transition-all duration-500 hover:-translate-y-1">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Matrix */}
          <div className="lg:col-span-2 space-y-10">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Index</h4>
            <ul className="space-y-6">
              {[
                { label: "Registry", path: "/properties" },
                { label: "Developments", path: "/projects" },
                { label: "Capabilities", path: "/services" },
                { label: "Legacy", path: "/about" },
                { label: "Contact", path: "/contact" }
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-sm font-bold text-gray-400 hover:text-white uppercase tracking-widest transition-colors flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/20 group-hover:bg-accent"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Protocol Module */}
          <div className="lg:col-span-5 space-y-10">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Strategic Reach</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
               <div className="space-y-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Global Desk</p>
                  <div className="space-y-2">
                    <a href="tel:8586881644" className="block text-lg font-bold hover:text-accent transition-colors">+91 8586881644</a>
                    <a href="mailto:mohitsinghamarpali@gmail.com" className="block text-sm text-gray-400 hover:text-white transition-colors truncate">mohitsinghamarpali@gmail.com</a>
                  </div>
               </div>
               <div className="space-y-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Concierge Desk</p>
                  <div className="space-y-2">
                    <a href="https://wa.me/918586881644" className="block text-lg font-bold hover:text-accent transition-colors">+91 8586881644</a>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">WhatsApp Operational</p>
                  </div>
               </div>
               <div className="space-y-4 sm:col-span-2 pt-6 border-t border-white/5">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Operations Hub</p>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">
                    M-006, Amrapali Silicon City, Sector 76, <br />
                    Noida, Uttar Pradesh 201301 — India
                  </p>
               </div>
            </div>
          </div>
        </div>

        {/* Global Registry Footer Line */}
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">
          <p>© {new Date().getFullYear()} KRISHNA PROPERTIES — ELITE REGISTRY DIVISION.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-accent transition-colors">Privacy Protocol</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Engagement</a>
            <a href="#" className="hover:text-accent transition-colors">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
