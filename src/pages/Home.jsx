import React from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight, ShieldCheck, Clock, Star, Users, Trophy, Award, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import PropertyCard from "../components/PropertyCard";

// Assets
import heroImg from "../assets/hero.png";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";

const Home = () => {
  const featuredProperties = [
    {
      id: 1,
      image: p1,
      title: "3 BHK Luxury Apartment",
      location: "Amrapali Silicon City, Sector 76, Noida",
      price: "₹85,00,000",
      beds: "3",
      baths: "3",
      size: "1650",
      tag: "For Sale",
      status: "Ready to Move",
    },
    {
      id: 2,
      image: p2,
      title: "Exclusive Penthouse",
      location: "Silicon City Premium Towers, Noida",
      price: "₹2,10,00,000",
      beds: "4",
      baths: "4",
      size: "3200",
      tag: "For Sale",
      status: "Premium",
    },
  ];

  const trustPoints = [
    { icon: <ShieldCheck className="text-accent" size={32} />, title: "Verified Listings", desc: "Every property in our portfolio is thoroughly verified for documentation and quality." },
    { icon: <Users className="text-accent" size={32} />, title: "Expert Consultants", desc: "Our team has over 10 years of experience in the Noida real estate market." },
    { icon: <Clock className="text-accent" size={32} />, title: "Faster Closings", desc: "We streamline the entire process from site visit to final registration." },
  ];

  return (
    <div className="bg-white selection:bg-accent selection:text-secondary">
      {/* Hero Section - Full width feel but contained content */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-secondary">
        {/* Background Layer with Slow Zoom */}
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Luxury Real Estate" className="w-full h-full object-cover opacity-60 animate-slow-zoom" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent"></div>
        </div>

        <div className="max-w-[1700px] mx-auto px-8 lg:px-12 w-full relative z-10 pt-16">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            <div className="max-w-2xl w-full">
              {/* Trust Badge Pill */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full border border-accent/40 bg-accent/10 backdrop-blur-md mb-6"
              >
                <ShieldCheck size={12} className="text-accent" />
                <span className="text-accent font-black uppercase text-[9px] tracking-[0.3em]">Trusted by 500+ clients in Noida</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-8xl xl:text-[7.5rem] font-heading font-black text-white leading-[0.8] mb-8 tracking-tighter"
              >
                ELEVATING <br />
                <span className="metallic-shimmer uppercase">LUXURY</span> <br />
                <span className="italic font-light text-gray-400">LIVING</span>
              </motion.h1>
              
              <motion.p 
                 initial={{ opacity: 0, y: 40 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1, delay: 0.4 }}
                 className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-light max-w-lg"
              >
                A private registry of the most prestigious <span className="text-white font-medium">high-asset</span> residential portfolios in Noida Sector 76.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-8 items-start sm:items-center"
              >
                <Link
                  to="/properties"
                  className="btn-premium group flex items-center gap-4 bg-gradient-to-r from-accent to-accent-dark text-secondary px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all hover:shadow-[0_20px_50px_rgba(212,175,55,0.3)] shadow-2xl"
                >
                  <span className="relative z-10">Explore Properties</span>
                  <ArrowRight className="transition-transform group-hover:translate-x-2" size={18} />
                </Link>
                
              </motion.div>
            </div>

            {/* Premium Stats Module - Slide in from right */}
            <motion.div 
               initial={{ opacity: 0, x: 100 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
               className="w-full lg:w-[320px] hidden xl:block"
            >
               <div className="grid grid-cols-1 gap-6">
                  {[
                    { label: "Deals Closed", val: "500+", desc: "Successful Closures", icon: <Trophy size={18} /> },
                    { label: "Experience", val: "12+", desc: "Years in Market", icon: <Award size={18} /> },
                    { label: "Satisfaction", val: "100%", desc: "Premium Rating", icon: <Star size={18} /> }
                  ].map((stat, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: -10, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                      className="glass-elite p-7 transition-all group"
                    >
                       <div className="flex justify-between items-start mb-4">
                          <p className="text-[9px] text-accent font-black uppercase tracking-[0.5em]">{stat.label}</p>
                          <div className="text-accent/50 group-hover:text-accent transition-colors">
                             {stat.icon}
                          </div>
                       </div>
                       <p className="text-5xl font-black text-white mb-2 tracking-tighter">{stat.val}</p>
                       <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{stat.desc}</p>
                    </motion.div>
                  ))}
               </div>
            </motion.div>
          </div>
        </div>

        {/* Smooth Scroll Indicator */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 2, duration: 1 }}
           className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 hidden lg:flex"
        >
          <span className="text-[10px] text-gray-600 font-black uppercase tracking-[0.6em] rotate-90 mb-8">Scroll</span>
          <div className="w-[1px] h-32 bg-gradient-to-t from-accent via-accent/20 to-transparent relative">
             <motion.div 
                animate={{ y: [0, 100, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-[-2px] w-1.5 h-1.5 rounded-full bg-accent"
             />
          </div>
        </motion.div>
      </section>

      {/* Trust & Identity - WIDER SECTION */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <div className="relative">
                <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative z-10">
                   <img src={p1} alt="About Krishna Properties" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-12 -left-12 bg-accent p-12 rounded-[3rem] shadow-2xl z-20 hidden md:block">
                   <Star className="text-secondary mb-4" size={40} />
                   <p className="text-4xl font-black text-secondary leading-none mb-2">100%</p>
                   <p className="text-xs text-secondary font-black uppercase tracking-widest">Transparency</p>
                </div>
                {/* Visual texture */}
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10"></div>
             </div>

             <div className="space-y-10">
                <div className="space-y-4">
                  <span className="text-accent font-black uppercase text-[10px] tracking-[0.3em]">Our Philosophy</span>
                  <h2 className="text-5xl md:text-7xl font-heading font-black text-secondary leading-[0.9] tracking-tighter">
                    Built on <br />
                    <span className="text-accent">Trust</span>, Not Just Bricks.
                  </h2>
                </div>
                
                <p className="text-xl text-gray-500 leading-relaxed font-light">
                  Krishna Properties represents the intersection of local Noida expertise and premium 
                  service delivery. We operate with a transparency-first mandate, ensuring that 
                  every acquisition in Sector 76 is a sound step for your future.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                   {trustPoints.map((point, index) => (
                     <div key={index} className="flex gap-6">
                        <div className="shrink-0 w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-accent">
                           {point.icon}
                        </div>
                        <div>
                           <h4 className="font-bold text-secondary mb-2">{point.title}</h4>
                           <p className="text-xs text-gray-400 leading-relaxed">{point.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>

                <div className="pt-10">
                  <Link to="/about" className="inline-flex items-center gap-4 text-secondary font-black text-[11px] uppercase tracking-[0.3em] group">
                    Our Story <span className="w-12 h-[1px] bg-accent group-hover:w-20 transition-all"></span>
                  </Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Grid - WIDER GRID */}
      <section className="py-32 bg-gray-50/50">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-accent font-black uppercase text-[10px] tracking-[0.3em]">Curated Portfolio</span>
              <h2 className="text-5xl md:text-7xl font-heading font-black text-secondary mt-4 leading-[0.9] tracking-tighter">
                HANDPICKED <br />
                <span className="text-accent">EXCLUSIVES</span>
              </h2>
            </div>
            <Link to="/properties" className="bg-white border border-gray-100 px-10 py-5 rounded-2xl font-black text-[12px] uppercase tracking-widest hover:bg-secondary hover:text-white hover:border-secondary transition-all shadow-sm">
              View Entire Collection
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {featuredProperties.map((p) => (
              <PropertyCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Full width feel */}
      <section className="py-48 bg-secondary relative overflow-hidden">
         {/* Textural background */}
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>
         </div>
         
         <div className="container-wide text-center relative z-10">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="max-w-5xl mx-auto space-y-16"
            >
                <div className="space-y-6">
                   <span className="text-accent font-black uppercase text-[10px] tracking-[0.5em]">Global Engagement</span>
                   <h2 className="text-6xl md:text-9xl font-heading font-black text-white leading-[0.85] tracking-tighter">
                     READY TO <br />
                     <span className="metallic-shimmer">TRANSCEND?</span>
                   </h2>
                </div>
                
                <p className="text-xl md:text-3xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
                    Experience the hallmark of professional real estate. Secure your 
                    private consultation with our Senior Partners today.
                </p>

                <div className="flex flex-wrap gap-10 justify-center pt-8">
                   <a
                    href="tel:8586881644"
                    className="btn-premium flex items-center gap-4 bg-white text-secondary px-16 py-8 rounded-2xl font-black text-[13px] uppercase tracking-widest hover:bg-accent hover:text-secondary transition-all shadow-2xl"
                  >
                    <span>Strategic Call</span>
                    <Phone size={18} />
                  </a>
                   <a
                    href="https://wa.me/918586881644"
                    className="btn-premium flex items-center gap-4 bg-gradient-to-r from-accent to-accent-dark text-secondary px-16 py-8 rounded-full font-black text-[13px] uppercase tracking-widest hover:shadow-[0_20px_50px_rgba(212,175,55,0.3)] transition-all shadow-2xl"
                  >
                    <span>WhatsApp Concierge</span>
                    <MessageSquare size={18} className="animate-bounce" />
                  </a>
                </div>
            </motion.div>
         </div>
      </section>
    </div>
  );
};

export default Home;
