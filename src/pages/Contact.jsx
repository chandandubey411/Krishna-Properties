import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const [result, setResult] = React.useState("");
  const [isSending, setIsSending] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setResult("");

    const formData = new FormData(event.target);
    // Access key placeholder - user will add theirs later
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("SECURE TRANSMISSION SUCCESSFUL. OUR CONSULTANTS WILL REACH OUT SHORTLY.");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "TRANMISSION FAILED. PLEASE TRY AGAIN OR CALL DIRECTLY.");
      }
    } catch (error) {
      console.log("Error", error);
      setResult("NETWORK ERROR. PLEASE CHECK YOUR CONNECTION.");
    } finally {
      setIsSending(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone size={24} className="text-secondary" />,
      title: "Call Us",
      details: "+91 8586881644",
      link: "tel:8586881644",
    },
    {
      icon: <MessageSquare size={24} className="text-secondary" />,
      title: "WhatsApp",
      details: "918586881644",
      link: "https://wa.me/918586881644",
    },
    {
      icon: <Mail size={24} className="text-secondary" />,
      title: "Email Us",
      details: "mohitsinghamarpali@gmail.com",
      link: "mailto:mohitsinghamarpali@gmail.com",
    },
    {
      icon: <MapPin size={24} className="text-secondary" />,
      title: "Our Office",
      details: "M-006, Amrapali Silicon City, Sector 76, Noida - 201301",
      link: "#",
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
              Direct Engagement
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl font-heading font-black text-secondary leading-[0.9] tracking-tighter"
            >
              SECURE YOUR <br />
              <span className="text-accent italic font-light">FUTURE</span> ASSET
            </motion.h1>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 font-light max-w-sm lg:text-right"
          >
            Noida's elite real estate desk is ready to facilitate your next acquisition.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          {/* Informational Column */}
          <div className="lg:col-span-5 space-y-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
               {contactInfo.map((item, index) => (
                 <motion.a
                   key={index}
                   href={item.link}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.1 }}
                   className="group relative"
                 >
                   <div className="mb-6 w-16 h-16 rounded-[2rem] bg-gray-50 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-secondary transition-all duration-500 shadow-sm">
                     {item.icon}
                   </div>
                   <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">{item.title}</h4>
                   <p className="text-xl font-bold text-secondary leading-tight break-words group-hover:text-accent transition-colors duration-500">{item.details}</p>
                 </motion.a>
               ))}
            </div>

            {/* Operational Metrics */}
            <div className="p-12 rounded-[3.5rem] bg-secondary text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
               <div className="flex items-start gap-8 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-accent border border-white/5">
                     <Clock size={28} />
                  </div>
                  <div className="space-y-4">
                     <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-2">Concierge Hours</p>
                        <h4 className="text-2xl font-black font-heading leading-none">MON — SUN</h4>
                     </div>
                     <div className="pt-4 border-t border-white/5">
                        <p className="text-4xl font-black text-white tracking-widest leading-none">09:00 — 21:00</p>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-2 ml-1">Standard Noida Time (IST)</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Engagement Interface */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-white p-12 md:p-20 rounded-[4rem] border border-gray-100 shadow-[0_50px_100px_rgba(0,0,0,0.05)] relative overflow-hidden"
          >
            {/* Shimmer Border Decoration */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
            
            <div className="mb-16">
               <h3 className="text-4xl font-heading font-black text-secondary leading-none tracking-tight mb-4 uppercase">Direct Request</h3>
               <p className="text-gray-400 font-light text-lg">Detailed inquiries accelerate our sourcing process.</p>
            </div>

            <form onSubmit={onSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] ml-2">Identity</label>
                  <input 
                    name="name"
                    required
                    type="text" 
                    placeholder="ENTER YOUR FULL NAME"
                    className="w-full bg-transparent border-b border-gray-100 pb-5 px-2 text-[11px] font-black uppercase tracking-widest focus:outline-none focus:border-accent transition-all placeholder:text-gray-200"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] ml-2">Protocol (Phone)</label>
                  <input 
                    name="phone"
                    required
                    type="tel" 
                    placeholder="+91 00000 00000"
                    className="w-full bg-transparent border-b border-gray-100 pb-5 px-2 text-[11px] font-black uppercase tracking-widest focus:outline-none focus:border-accent transition-all placeholder:text-gray-200"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] ml-2">Digital Signature (Email)</label>
                <input 
                  name="email"
                  required
                  type="email" 
                  placeholder="EX: NAME@ELITE.COM"
                  className="w-full bg-transparent border-b border-gray-100 pb-5 px-2 text-[11px] font-black uppercase tracking-widest focus:outline-none focus:border-accent transition-all placeholder:text-gray-200"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] ml-2">Specific Requirements</label>
                <textarea 
                  name="message"
                  required
                  rows="4" 
                  placeholder="LOCATION, BUDGET, ASSET CLASS..."
                  className="w-full bg-transparent border-b border-gray-100 pb-5 px-2 text-[11px] font-black uppercase tracking-widest focus:outline-none focus:border-accent transition-all placeholder:text-gray-200 resize-none"
                ></textarea>
              </div>

              {/* Bot Protection Honeypot */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div className="flex flex-col gap-6">
                <button 
                  type="submit"
                  disabled={isSending}
                  className={`relative w-full group overflow-hidden bg-secondary text-white py-7 rounded-[2rem] font-black text-[13px] uppercase tracking-[0.4em] transition-all ${isSending ? "opacity-70 cursor-not-allowed" : "hover:pr-12"}`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSending ? "TRANSMITTING..." : "Initiate Contact"} <Send size={18} className={isSending ? "animate-pulse" : ""} />
                  </span>
                  {!isSending && <div className="absolute top-0 right-0 w-0 h-full bg-accent transition-all duration-500 group-hover:w-16"></div>}
                </button>

                {result && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-6 rounded-2xl text-[10px] font-black uppercase tracking-widest text-center ${
                      result.includes("SUCCESSFUL") 
                      ? "bg-green-50 text-green-600 border border-green-100" 
                      : "bg-red-50 text-red-600 border border-red-100"
                    }`}
                  >
                    {result}
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>

        {/* Strategic Intelligence Area (MAP) */}
        <div className="mt-48">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <span className="text-accent font-black uppercase text-[10px] tracking-[0.4em] mb-4 block">Headquarters</span>
                <h2 className="text-5xl md:text-7xl font-heading font-black text-secondary leading-[0.9] tracking-tighter uppercase font-heading">The Strategic <br /> <span className="text-accent">Location</span></h2>
              </div>
              <div className="flex items-center gap-4 text-gray-400 group cursor-pointer lg:text-right">
                 <p className="text-[10px] font-black uppercase tracking-widest group-hover:text-secondary transition-colors">Direct Navigation</p>
                 <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
           </div>
           
           <motion.div 
             initial={{ opacity: 0, grayscale: 1 }}
             whileInView={{ opacity: 1, grayscale: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1.5 }}
             className="h-[600px] w-full rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] grayscale transition-all duration-1000 hover:grayscale-0 relative"
           >
              {/* Overlay Glass */}
              <div className="absolute top-10 left-10 z-10 hidden xl:block">
                 <div className="bg-white/80 backdrop-blur-xl p-10 rounded-[3rem] border border-white/20 shadow-2xl space-y-6">
                    <div className="space-y-1">
                       <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Office M-006</p>
                       <h4 className="text-xl font-black text-secondary uppercase font-heading tracking-tight leading-none">Amrapali Silicon City</h4>
                    </div>
                    <div className="h-[1px] w-full bg-gray-100"></div>
                    <p className="text-xs text-gray-400 font-bold leading-relaxed max-w-[200px]">
                       Sector 76, Noida, Uttar Pradesh 201301, India
                    </p>
                 </div>
              </div>
              
              <iframe 
                src="https://www.google.com/maps?q=Amrapali%20Silicon%20City%20Noida%20Sector%2076&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
           </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
