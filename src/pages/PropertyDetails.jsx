import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Square, ChevronLeft, Phone, MessageSquare, CheckCircle2, Info } from "lucide-react";

// Assets
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";

const PropertyDetails = () => {
  const { id } = useParams();

  // Mock data fetching based on ID
  const properties = {
    1: {
      image: p1,
      title: "Luxury 3 BHK Apartment",
      location: "Amrapali Silicon City, Sector 76, Noida",
      price: "₹85,00,000",
      beds: "3",
      baths: "3",
      size: "1650",
      tag: "For Sale",
      status: "Ready to Move",
      desc: "Experience luxury living in this spacious 3 BHK apartment located in the prime locality of Sector 76, Noida. This east-facing property offers panoramic views of the city skyline and features premium finishes throughout. With world-class amenities including a swimming pool, clubhouse, and 24/7 security, Amrapali Silicon City is the perfect choice for your next home.",
      features: ["Premium Modular Kitchen", "Wooden Flooring in Master Bedroom", "3 Spacious Balconies", "Gas Pipeline Connection", "2 Dedicated Car Parking"],
      nearBy: ["Metro Station (Sector 76) - 500m", "Logix City Centre - 3km", "Fortis Hospital - 4km", "International Schools - 2km"]
    },
    2: {
      image: p2,
      title: "Exclusive Penthouse",
      location: "Silicon City Premium Towers, Noida",
      price: "₹2,10,00,000",
      beds: "4",
      baths: "4",
      size: "3200",
      tag: "For Sale",
      status: "Premium",
      desc: "Step into ultra-luxury with this exclusive penthouse in the Premium Towers of Silicon City. Spread over two floors, this residence features a private terrace garden, double-height ceilings, and high-end fixtures. Designed for those who demand the best, this property offers unmatched privacy and breathtaking views.",
      features: ["Private Terrace Garden", "Double Height Living Room", "Designer Italian Marble", "Home automation system", "4 Reserved Parking Spaces"],
      nearBy: ["Metro Station (Sector 76) - 600m", "Main Market - 200m", "Public Park - 100m"]
    }
  };

  const property = properties[id] || properties[1];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/properties" className="inline-flex items-center gap-2 text-gray-500 hover:text-secondary mb-8 transition-colors font-medium">
          <ChevronLeft size={20} /> Back to Listings
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Gallery Section */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-video"
            >
               <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
               <div className="absolute top-6 left-6 flex gap-3">
                  <span className="bg-secondary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">{property.tag}</span>
                  <span className="bg-accent text-secondary text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">{property.status}</span>
               </div>
            </motion.div>

            {/* Header info */}
            <div>
               <h1 className="text-4xl font-heading font-extrabold text-secondary mb-4">{property.title}</h1>
               <div className="flex items-center gap-2 text-gray-500 text-lg mb-8">
                  <MapPin size={20} className="text-accent" /> {property.location}
               </div>

               <div className="grid grid-cols-3 gap-6 p-8 bg-gray-50 rounded-3xl border border-gray-100">
                  <div className="flex items-center gap-4">
                     <div className="p-3 bg-white rounded-2xl shadow-sm text-accent"><Bed size={24} /></div>
                     <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Bedrooms</p>
                        <p className="text-xl font-bold text-secondary">{property.beds}</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-4 border-x border-gray-200 px-6">
                     <div className="p-3 bg-white rounded-2xl shadow-sm text-accent"><Bath size={24} /></div>
                     <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Bathrooms</p>
                        <p className="text-xl font-bold text-secondary">{property.baths}</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="p-3 bg-white rounded-2xl shadow-sm text-accent"><Square size={24} /></div>
                     <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Total Area</p>
                        <p className="text-xl font-bold text-secondary">{property.size} <span className="text-sm font-normal">sqft</span></p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Description */}
            <div>
               <h2 className="text-2xl font-heading font-bold text-secondary mb-6 flex items-center gap-2">
                 <Info className="text-accent" /> Description
               </h2>
               <p className="text-gray-600 leading-relaxed text-lg italic">
                  "{property.desc}"
               </p>
            </div>

            {/* Features */}
            <div>
               <h2 className="text-2xl font-heading font-bold text-secondary mb-6">Key Amenities & Features</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 border border-gray-100 rounded-2xl bg-white shadow-sm">
                       <CheckCircle2 size={20} className="text-[#25D366]" />
                       <span className="text-gray-600 font-medium text-sm">{f}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Sidebar / Sidebar Contact */}
          <div className="space-y-8">
            <div className="p-8 bg-secondary rounded-[2.5rem] text-white shadow-2xl sticky top-32">
               <div className="mb-8">
                  <p className="text-sm text-gray-400 uppercase font-bold tracking-widest mb-2 font-heading">Total Price</p>
                  <p className="text-4xl font-bold text-accent">{property.price}</p>
               </div>
               
               <div className="space-y-4">
                  <h3 className="text-xl font-bold mb-6 font-heading">Interested? Contact Us</h3>
                  <a 
                    href="tel:8586881644" 
                    className="w-full bg-accent text-secondary py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl shadow-accent/10"
                  >
                    <Phone size={20} /> Call Now
                  </a>
                  <a 
                    href="https://wa.me/918368591706" 
                    className="w-full bg-white text-secondary py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl shadow-white/10"
                  >
                    <MessageSquare size={20} /> WhatsApp
                  </a>
                  <div className="pt-6 border-t border-white/10 mt-6">
                     <p className="text-xs text-gray-400 text-center uppercase tracking-widest">Listing ID: KP000{id}</p>
                  </div>
               </div>
            </div>

            <div className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100">
               <h3 className="text-lg font-bold text-secondary mb-4 font-heading">Nearby Landmarks</h3>
               <ul className="space-y-4">
                  {property.nearBy.map((n, i) => (
                    <li key={i} className="text-sm text-gray-500 border-l-2 border-accent pl-4">{n}</li>
                  ))}
               </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
