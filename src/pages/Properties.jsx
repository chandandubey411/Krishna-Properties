import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, ChevronDown, Plus } from "lucide-react";
import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/properties";

const Properties = () => {
  const [filter, setFilter] = useState("All");
  const [visibleItems, setVisibleItems] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProperties = properties.filter(p => {
    const matchesFilter = filter === "All" || p.type === filter;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const loadMore = () => {
    setVisibleItems(prev => prev + 6);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="pt-48 pb-32 bg-white min-h-screen">
      <div className="max-w-[1700px] mx-auto px-8 lg:px-12 w-full">
        {/* Elite Header Area */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-accent font-black uppercase text-[10px] tracking-[0.4em] mb-4 block"
            >
              Curated Collections
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl font-heading font-black text-secondary leading-[0.9] tracking-tighter"
            >
              PREMIUM <br />
              <span className="text-accent">PORTFOLIO</span>
            </motion.h1>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 font-light max-w-sm lg:text-right"
          >
            A selective index of Noida's most prestigious residential and commercial assets.
          </motion.p>
        </div>

        {/* Sophisticated Search & Filters */}
        <div className="mb-24 space-y-12">
           <div className="flex flex-col lg:flex-row gap-12 items-center justify-between border-b border-gray-100 pb-12">
              <div className="flex items-center gap-10">
                 {["All", "Residential", "Commercial"].map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        setFilter(item);
                        setVisibleItems(6);
                      }}
                      className={`text-[11px] uppercase tracking-[0.3em] font-black transition-all relative py-2 ${
                        filter === item 
                        ? "text-secondary" 
                        : "text-gray-300 hover:text-secondary"
                      }`}
                    >
                      {item}
                      {filter === item && (
                        <motion.span 
                          layoutId="filterUnderline"
                          className="absolute -bottom-[1px] left-0 w-full h-[2px] bg-accent"
                        />
                      )}
                    </button>
                 ))}
              </div>

              <div className="relative w-full lg:w-[450px] group">
                 <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-accent group-focus-within:scale-110 transition-transform" size={20} />
                 <input 
                   type="text" 
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   placeholder="SEARCH BY LOCATION OR ASSET TITLE..."
                   className="w-full bg-transparent border-b border-gray-100 pb-4 pl-10 text-[10px] uppercase font-black tracking-widest focus:outline-none focus:border-accent transition-all placeholder:text-gray-300"
                 />
              </div>
           </div>

           <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
              <p>Showing {Math.min(visibleItems, filteredProperties.length)} of {filteredProperties.length} elite assets</p>
              <div className="flex gap-4">
                 <span className="text-secondary">Sort By:</span>
                 <button className="flex items-center gap-2 hover:text-accent transition-colors">Featured First <ChevronDown size={14} /></button>
              </div>
           </div>
        </div>

        {/* Dynamic Listing Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProperties.slice(0, visibleItems).map((p) => (
              <motion.div key={p.id} variants={itemVariants} layout>
                <PropertyCard {...p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {visibleItems < filteredProperties.length && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-24 flex justify-center"
          >
            <button 
              onClick={loadMore}
              className="group flex items-center gap-4 bg-white border border-gray-100 px-16 py-8 rounded-[2rem] font-black text-[12px] uppercase tracking-widest hover:bg-secondary hover:text-white transition-all duration-500 shadow-xl hover:shadow-2xl"
            >
              <span>Load More Assets</span>
              <Plus size={18} className="group-hover:rotate-90 transition-transform duration-500" />
            </button>
          </motion.div>
        )}

        {filteredProperties.length === 0 && (
          <div className="text-center py-40">
             <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-8 text-gray-200">
                <Search size={40} />
             </div>
             <p className="text-gray-400 text-sm font-black uppercase tracking-widest">No matching assets in current registry.</p>
          </div>
        )}

        {/* Global Concierge Box */}
        <div className="mt-40 p-20 bg-secondary rounded-[4rem] relative overflow-hidden group">
             <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.5),transparent)]"></div>
             
             <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="max-w-xl text-center lg:text-left">
                   <span className="text-accent font-black uppercase text-[10px] tracking-[0.3em] mb-4 block">Tailored Search</span>
                   <h3 className="text-4xl md:text-5xl font-heading font-black text-white leading-none mb-6 tracking-tight">CRYSTAL SEARCH CONCIERGE</h3>
                   <p className="text-gray-400 text-lg font-light">Can't find your specific requirement in our public registry? Our private desk manages exclusive off-market assets.</p>
                </div>
                <Link to="/contact" className="bg-accent text-secondary px-12 py-6 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-accent/20">
                   Request Private Sourcing
                </Link>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
