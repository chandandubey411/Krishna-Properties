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
      className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:border-accent/30 transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)]"
    >
      {/* Image Section */}
      <div className="relative aspect-[16/11] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        <div className="absolute top-6 left-6 flex gap-3">
          {tag && (
            <span className="bg-white/90 backdrop-blur-md text-secondary text-[10px] uppercase font-black tracking-[0.2em] px-5 py-2 rounded-2xl shadow-xl">
              {tag}
            </span>
          )}
          {status && (
            <span className="bg-accent text-secondary text-[10px] uppercase font-black tracking-[0.2em] px-5 py-2 rounded-2xl shadow-xl">
              {status}
            </span>
          )}
        </div>

        {/* View Details Overlay Button */}
        <div className="absolute inset-0 flex items-center justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
           <Link to={`/properties/${id || 1}`} className="bg-white text-secondary px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-2xl hover:bg-accent transition-colors flex items-center gap-3">
            Exploration <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Price Tag in Image */}
        <div className="absolute bottom-6 left-6">
           <div className="bg-secondary/40 backdrop-blur-xl border border-white/10 p-5 rounded-[1.5rem]">
              <p className="text-white font-black text-2xl tracking-tighter">{price}</p>
           </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-10 space-y-8">
        <div>
          <div className="flex items-center gap-2 text-accent mb-3">
            <MapPin size={14} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">{location}</span>
          </div>
          <h3 className="text-3xl font-heading font-black text-secondary leading-[1.1] tracking-tighter group-hover:text-accent transition-colors">
            {title}
          </h3>
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-3 gap-6 py-8 border-y border-gray-50">
           <div className="flex flex-col gap-1 border-r border-gray-100">
              <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Suites</span>
              <span className="font-black text-secondary text-lg leading-none">{beds || "-"}</span>
           </div>
           <div className="flex flex-col gap-1 border-r border-gray-100 pl-4">
              <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Baths</span>
              <span className="font-black text-secondary text-lg leading-none">{baths || "-"}</span>
           </div>
           <div className="flex flex-col gap-1 pl-4">
              <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Scale</span>
              <span className="font-black text-secondary text-lg leading-none">{size} <span className="text-[8px] font-normal text-gray-400 uppercase ml-0.5">sqft</span></span>
           </div>
        </div>

        <div className="flex justify-between items-center">
           <Link to="/contact" className="text-secondary/50 hover:text-accent font-black text-[10px] uppercase tracking-[0.3em] transition-colors">
              Schedule Viewing
           </Link>
           <button className="text-gray-300 hover:text-accent transition-colors">
              <ArrowUpRight size={20} />
           </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
