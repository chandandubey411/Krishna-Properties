import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-slate-100">
            PROPERTY MINES
          </h3>
          <p className="mt-3 text-sm text-slate-400">
            Your trusted partner for buying, selling and renting properties in
            Ghaziabad and nearby prime locations.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Quick Links
          </h4>
          <div className="mt-3 flex flex-col gap-1 text-sm text-slate-300">
            <Link to="/" className="hover:text-emerald-400">Home</Link>
            <Link to="/about" className="hover:text-emerald-400">About</Link>
            <Link to="/properties" className="hover:text-emerald-400">Properties</Link>
            <Link to="/services" className="hover:text-emerald-400">Services</Link>
            <Link to="/projects" className="hover:text-emerald-400">Projects</Link>
            <Link to="/contact" className="hover:text-emerald-400">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Contact
          </h4>
          <div className="mt-3 space-y-2 text-sm text-slate-300">
            <p className="flex items-start gap-2">
              <FiMapPin className="mt-0.5 flex-shrink-0" />
              <span>
                B-14, SHOP NO.1, RAMPRASTHA COLONY,
                <br />
                GHAZIABAD, UP - 201011
              </span>
            </p>
            <p className="flex items-center gap-2">
              <FiPhone />
              <a href="tel:9871214007" className="hover:text-emerald-400">
                9871214007
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FiMail />
              <a
                href="mailto:nirmalsatyaa@gmail.com"
                className="hover:text-emerald-400"
              >
                nirmalsatyaa@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-3">
        <p className="text-center text-xs text-slate-500">
          © {new Date().getFullYear()} PROPERTY MINES. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
