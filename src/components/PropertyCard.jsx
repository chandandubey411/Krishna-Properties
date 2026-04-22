import React from "react";
import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Square, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const PropertyCard = ({ id, image, title, location, price, beds, baths, size, tag, status }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-gray-100 hover:border-accent/30 transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)]"
    >
      {/* Image Section */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        <div className="absolute top-4 left-4 flex gap-2">
          {tag && (
            <span className="bg-white/90 backdrop-blur-md text-secondary text-[8px] md:text-[10px] uppercase font-black tracking-[0.2em] px-4 py-1.5 rounded-xl shadow-xl">
              {tag}
            </span>
          )}
          {status && (
            <span className="bg-accent text-secondary text-[8px] md:text-[10px] uppercase font-black tracking-[0.2em] px-4 py-1.5 rounded-xl shadow-xl">
              {status}
            </span>
          )}
        </div>

        {/* View Details Overlay Button */}
        <div className="absolute inset-0 flex items-center justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
           <Link to={`/properties/${id || 1}`} className="bg-white text-secondary px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-2xl hover:bg-accent transition-colors flex items-center gap-3">
            Exploration <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 md:p-8 space-y-4 md:space-y-6">
        <div>
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2 text-accent">
              <MapPin size={12} />
              <span className="text-[9px] font-black uppercase tracking-[0.3em]">{location}</span>
            </div>
            {/* Clean Price for Card Display */}
            <span className="text-base md:text-lg font-black text-secondary tracking-tighter">
              {price.split('+')[0].trim()}
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-heading font-black text-secondary leading-[1.1] tracking-tighter group-hover:text-accent transition-colors">
            {title}
          </h3>
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 py-4 md:py-6 border-y border-gray-50">
           <div className="flex flex-col gap-0.5 border-r border-gray-100">
              <span className="text-[8px] md:text-[9px] uppercase font-bold tracking-widest text-gray-400">Suites</span>
              <span className="font-black text-secondary text-base leading-none">{beds || "-"}</span>
           </div>
           <div className="flex flex-col gap-0.5 border-r border-gray-100 pl-2">
              <span className="text-[8px] md:text-[9px] uppercase font-bold tracking-widest text-gray-400">Baths</span>
              <span className="font-black text-secondary text-base leading-none">{baths || "-"}</span>
           </div>
           <div className="flex flex-col gap-0.5 pl-2">
              <span className="text-[8px] md:text-[9px] uppercase font-bold tracking-widest text-gray-400">Scale</span>
              <span className="font-black text-secondary text-base leading-none">{size} <span className="text-[7px] font-normal text-gray-400 uppercase">sqft</span></span>
           </div>
        </div>

        <div className="flex justify-between items-center">
           <Link to="/contact" className="text-secondary/50 hover:text-accent font-black text-[9px] uppercase tracking-[0.3em] transition-colors">
              Schedule Viewing
           </Link>
           <button className="text-gray-300 hover:text-accent transition-colors">
              <ArrowUpRight size={18} />
           </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
