import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";

// Assets
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";

const Projects = () => {
  const projects = [
    {
      image: p1,
      title: "Amrapali Silicon City",
      location: "Sector 76, Noida",
      status: "Ready to Move",
      desc: "A massive residential township offering 2, 3, and 4 BHK apartments with luxury amenities and excellent connectivity.",
    },
    {
      image: p2,
      title: "Amrapali Crystal Homes",
      location: "Sector 76, Noida",
      status: "Premium Segment",
      desc: "Exclusive gated community featuring high-end apartments with smart home features and lush greenery.",
    },
    {
      image: p3,
      title: "Silicon City Commercial Hub",
      location: "Sector 76, Noida",
      status: "Operational",
      desc: "Prime commercial complex with high-visibility retail spaces and modern office suites.",
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
              Landmark Index
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl font-heading font-black text-secondary leading-[0.9] tracking-tighter"
            >
              SIGNATURE <br />
              <span className="text-accent italic font-light">DEVELOPMENTS</span>
            </motion.h1>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 font-light max-w-sm lg:text-right"
          >
            A registry of architectural excellencies managed and facilitated by our elite desk.
          </motion.p>
        </div>

        {/* Dynamic Project Showcase - WIDER GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-gray-50/50 rounded-[4rem] overflow-hidden border border-transparent hover:bg-white hover:border-accent/30 transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)]"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="absolute top-8 left-8">
                    <span className="bg-white/90 backdrop-blur-md text-secondary text-[10px] font-black uppercase px-6 py-2.5 rounded-[1.5rem] tracking-[0.2em] shadow-2xl">
                        {project.status}
                    </span>
                </div>
              </div>

              <div className="p-16 space-y-8">
                <div className="space-y-3">
                   <p className="text-accent font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
                       <CheckCircle2 size={14} /> {project.location}
                    </p>
                   <h3 className="text-3xl font-heading font-black text-secondary tracking-tighter leading-tight group-hover:text-accent transition-colors duration-500 uppercase">{project.title}</h3>
                </div>

                <p className="text-lg text-gray-400 font-light leading-relaxed">{project.desc}</p>
                
                <div className="pt-8 border-t border-gray-100 flex justify-between items-center group/btn cursor-pointer">
                  <span className="text-[10px] font-black uppercase tracking-widest text-secondary group-hover/btn:text-accent transition-colors">Master Registry</span>
                  <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-secondary group-hover/btn:bg-accent group-hover/btn:border-accent group-hover/btn:text-secondary group-hover/btn:rotate-45 transition-all duration-500">
                     <ExternalLink size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Elite CTA Bridge */}
        <div className="mt-40 p-24 bg-secondary rounded-[4rem] relative overflow-hidden group">
             <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_70%_50%,rgba(212,175,55,0.4),transparent)]"></div>
             
             <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
                <div className="max-w-2xl space-y-6 text-center lg:text-left">
                   <span className="text-accent font-black uppercase text-[10px] tracking-[0.4em]">Development Desk</span>
                   <h3 className="text-5xl md:text-7xl font-heading font-black text-white leading-[0.9] tracking-tighter uppercase">
                      BUILD YOUR <br /> <span className="text-accent">LEGACY</span>
                   </h3>
                   <p className="text-gray-400 text-xl font-light">Exclusive early-access opportunities and private developer inventory available through our specialized desk.</p>
                </div>
                <div className="flex flex-wrap gap-8 justify-center">
                   <a href="https://wa.me/918368591706" className="bg-accent text-secondary px-12 py-7 rounded-[2rem] font-black text-[13px] uppercase tracking-widest hover:bg-white transition-all shadow-2xl shadow-accent/20">
                      Explore Pre-Launch
                   </a>
                </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
