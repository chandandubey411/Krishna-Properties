import React from "react";
import { FiMapPin } from "react-icons/fi";

const PropertyCard = ({ title, location, price, tag, status, image }) => {
  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900 transition shadow-lg shadow-slate-950/40 overflow-hidden">
      {/* Image */}
      <div className="h-72 relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 relative">
            <div className="absolute inset-4 rounded-2xl border border-dashed border-slate-700/70 flex items-center justify-center text-xs text-slate-400">
              Property Image
            </div>
          </div>
        )}

        {tag && (
          <span className="absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-400 text-slate-950">
            {tag}
          </span>
        )}
        {status && (
          <span className="absolute top-3 right-3 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-950/70 text-slate-100 border border-slate-700">
            {status}
          </span>
        )}
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-sm font-semibold text-slate-50 line-clamp-2">
          {title}
        </h3>
        <p className="flex items-center gap-1 text-xs text-slate-400">
          <FiMapPin className="text-sm" />
          {location}
        </p>
        <p className="text-sm font-semibold text-emerald-400">{price}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
