import React from "react";
import { motion } from "framer-motion";
import { Award, Shield, Users2, Target, Gem, Heart } from "lucide-react";

// Assets
import aboutImg from "../assets/p3.png";

const About = () => {
  const values = [
    { icon: <Shield size={32} className="text-accent" />, title: "Integrity", desc: "Honesty and transparency are at the core of every transaction we facilitate." },
    { icon: <Award size={32} className="text-accent" />, title: "Excellence", desc: "We strive to provide superior service that exceeds our clients' expectations." },
    { icon: <Users2 size={32} className="text-accent" />, title: "Client Focused", desc: "Your dreams and requirements are our top priority, always." },
  ];

  return (
    <div className="pt-48 pb-32 bg-white flex flex-col gap-32">
      <div className="container-wide">
        {/* Elite Heritage Section */}
        <div className="grid lg:grid-cols-12 gap-24 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] relative z-10 aspect-square lg:aspect-auto lg:h-[700px]">
               <img src={aboutImg} alt="Krishna Properties Legacy" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-16 -right-16 bg-white p-12 rounded-[3.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.1)] z-20 hidden md:block border border-gray-50">
               <div className="flex items-center gap-4 mb-2">
                  <span className="w-12 h-[2px] bg-accent"></span>
                  <span className="text-secondary font-black text-5xl">10+</span>
               </div>
               <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.4em] ml-16">Years of Legacy</p>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-[100px] -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-12"
          >
            <div className="space-y-4">
              <span className="text-accent font-black uppercase text-[10px] tracking-[0.4em]">Our Heritage</span>
              <h1 className="text-6xl md:text-8xl font-heading font-black text-secondary leading-[0.9] tracking-tighter">
                DEFINING<br />
                <span className="text-accent italic font-light">ESTATES</span> SINCE 2014
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light max-w-xl">
              Krishna Properties isn't just a brokerage; it's a legacy of precision and trust in Noida's 
              most competitive real estate corridors. Specialized in elite residential portfolios.
            </p>

            <div className="space-y-8 pl-10 border-l border-gray-100">
               <p className="text-lg text-gray-400 italic font-medium leading-relaxed">
                  "We simplify the high-stakes property acquisition experience, ensuring 
                  that every client secures a piece of Noida that truly reflects their 
                  uncompromising aspirations."
               </p>
               <div className="flex items-center gap-4">
                  <div className="w-10 h-[1px] bg-accent"></div>
                  <span className="text-[10px] uppercase font-black tracking-widest text-secondary">The Krishna Mandate</span>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-12 pt-8">
                <div className="space-y-2">
                    <h4 className="text-5xl font-black text-secondary tracking-tighter">500+</h4>
                    <p className="text-[10px] text-gray-400 uppercase font-black tracking-[0.2em]">Portfolio Growth</p>
                </div>
                <div className="space-y-2">
                    <h4 className="text-5xl font-black text-secondary tracking-tighter">100%</h4>
                    <p className="text-[10px] text-gray-400 uppercase font-black tracking-[0.2em]">Client Retention</p>
                </div>
            </div>
          </motion.div>
        </div>

        {/* Vision & Values - Full-screen Width feel Wrapper */}
        <div className="bg-secondary rounded-[4rem] p-16 lg:p-32 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -mr-64 -mt-64"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] -ml-64 -mb-64"></div>
            
            <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12 relative z-10">
                <div className="max-w-2xl">
                   <span className="text-accent font-black uppercase text-[10px] tracking-[0.4em] mb-4 block">Core Principles</span>
                   <h2 className="text-5xl md:text-7xl font-heading font-black mb-6 leading-[0.9] tracking-tighter">OUR <span className="text-accent">PILLARS</span> OF EXCELLENCE</h2>
                </div>
                <p className="text-gray-400 text-lg max-w-sm mb-4 font-light">The foundation of our elite service is built on four non-negotiable pillars.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                {values.map((v, i) => (
                    <div key={i} className="group p-12 rounded-[3rem] bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-accent/20 transition-all duration-500">
                        <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-500 text-accent">
                            {v.icon}
                        </div>
                        <h4 className="text-2xl font-black mb-4 font-heading tracking-tight">{v.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed font-light">{v.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Closing Segment */}
        <div className="py-32 text-center max-w-5xl mx-auto space-y-12">
            <div className="w-24 h-24 rounded-full bg-accent text-secondary flex items-center justify-center mx-auto shadow-2xl shadow-accent/20">
               <Gem size={40} />
            </div>
            <h2 className="text-5xl md:text-7xl font-heading font-black text-secondary leading-[0.9] tracking-tighter">
              BEYOND <br />
              <span className="text-accent underline decoration-1 underline-offset-[12px]">CONSULTANCY</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light px-4">
              We understand that every residential search is a unique narrative. 
              Whether securing a primary residence in Amrapali Silicon City or 
              diversifying an investment portfolio, we provide the strategic edge.
            </p>
            <div className="flex flex-wrap justify-center gap-16 pt-12">
               <div className="flex flex-col items-center gap-4 group">
                  <div className="w-20 h-20 rounded-[2rem] bg-gray-50 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-secondary transition-all duration-500">
                     <Target size={32} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Strategic Sourcing</span>
               </div>
               <div className="flex flex-col items-center gap-4 group">
                  <div className="w-20 h-20 rounded-[2rem] bg-gray-50 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-secondary transition-all duration-500">
                     <Heart size={32} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Human-Centric</span>
               </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
