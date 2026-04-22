import React from "react";
import { motion } from "framer-motion";
import { Home, Building2, Map, Scale, BookOpen, Key, Send } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Home size={32} />,
      title: "Residential Sales",
      desc: "Helping families find their dream homes in Amrapali Silicon City and premium townships across Noida.",
    },
    {
      icon: <Building2 size={32} />,
      title: "Commercial Leasing",
      desc: "Strategic retail and office space solutions for businesses looking to establish a presence in prime locations.",
    },
    {
      icon: <Map size={32} />,
      title: "Investment Consulting",
      desc: "Data-driven advice on high-yield real estate investments with significant appreciation potential.",
    },
    {
      icon: <Scale size={32} />,
      title: "Legal Assistance",
      desc: "Ensuring smooth property transactions with expert help in documentation, verification, and registration.",
    },
    {
      icon: <BookOpen size={32} />,
      title: "Market Analysis",
      desc: "In-depth insights into the Noida real estate market trends to help you make informed decisions.",
    },
    {
      icon: <Key size={32} />,
      title: "Property Management",
      desc: "Complete end-to-end management services for NRI owners and property investors.",
    },
  ];

  return (
    <div className="pt-48 pb-32 bg-white min-h-screen">
      <div className="container-wide">
        {/* Elite Header Area */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-12">
          <div className="max-w-4xl">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-accent font-black uppercase text-[10px] tracking-[0.4em] mb-4 block"
            >
              Elite Capabilities
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl font-heading font-black text-secondary leading-[0.9] tracking-tighter"
            >
              STRATEGIC <br />
              <span className="text-accent italic font-light">CONSULTANCY</span>
            </motion.h1>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 font-light max-w-sm lg:text-right"
          >
            Comprehensive asset management and acquisition protocols for the Noida market.
          </motion.p>
        </div>

        {/* Global Services Grid - WIDER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group p-16 rounded-[4rem] bg-gray-50/50 border border-transparent hover:bg-white hover:border-accent/20 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-700 relative overflow-hidden"
            >
              {/* Shimmer Effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="mb-12 w-20 h-20 rounded-[2.5rem] bg-white flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-secondary transition-all duration-500 shadow-[0_15px_30px_rgba(0,0,0,0.03)] border border-gray-50">
                {service.icon}
              </div>
              
              <div className="space-y-6">
                <h3 className="text-3xl font-heading font-black text-secondary tracking-tighter leading-none group-hover:text-accent transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-400 font-light leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                 <span className="text-[10px] font-black uppercase tracking-widest text-accent">Protocol Enabled</span>
                 <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center">
                    <Send size={14} />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Contact Bridge */}
        <div className="mt-40 p-24 bg-secondary rounded-[4rem] relative overflow-hidden text-center lg:text-left">
           <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.4),transparent)]"></div>
           
           <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="max-w-2xl space-y-6">
                 <span className="text-accent font-black uppercase text-[10px] tracking-[0.4em]">Operational Support</span>
                 <h3 className="text-5xl md:text-7xl font-heading font-black text-white leading-[0.9] tracking-tighter uppercase">
                    DEPLOY <br /> <span className="text-accent">INTELLIGENCE</span>
                 </h3>
                 <p className="text-gray-400 text-xl font-light">Our desk is ready to execute on your requirements. Establish a direct line with our consultants today.</p>
              </div>
              <div className="flex flex-wrap gap-8 justify-center">
                 <a href="tel:8586881644" className="bg-white text-secondary px-12 py-7 rounded-[2rem] font-black text-[13px] uppercase tracking-widest hover:bg-accent transition-all shadow-2xl">
                    Executive Line
                 </a>
                 <a href="https://wa.me/918586881644" className="bg-accent text-secondary px-12 py-7 rounded-[2rem] font-black text-[13px] uppercase tracking-widest hover:bg-white transition-all shadow-2xl shadow-accent/20">
                    WhatsApp Desk
                 </a>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
