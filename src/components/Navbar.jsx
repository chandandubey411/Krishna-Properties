import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX, FiPhone, FiHome } from "react-icons/fi";
import logo from "../assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/properties", label: "Properties" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `text-sm md:text-[15px] font-medium tracking-wide px-3 py-2 rounded-full transition ${
      isActive
        ? "bg-slate-100 text-slate-900"
        : "text-slate-100/80 hover:bg-slate-800 hover:text-white"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-950/70 border-b border-slate-800">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-slate-50 font-semibold tracking-tight"
        >
          <span className="inline-flex h-16 w-16 rounded-xl bg-transparent items-center justify-center">
            <img src={logo} alt="logo" className="h-16 w-16 object-contain" />
          </span>

          <div className="leading-tight">
            <span className="block text-sm">PROPERTY MINES</span>
            <span className="block text-[11px] text-slate-400">
              Trusted Property Solutions
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClasses}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="tel:9871214007"
          className="hidden md:inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-emerald-400 to-sky-500 text-slate-950 shadow-md shadow-emerald-500/30 hover:shadow-lg hover:-translate-y-0.5 transition"
        >
          <FiPhone className="text-sm" />
          <span>Call: 9871214007</span>
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center rounded-full p-2 border border-slate-700 text-slate-100 hover:bg-slate-800 transition"
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `block text-sm font-medium px-3 py-2 rounded-xl ${
                    isActive
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-100/80 hover:bg-slate-800 hover:text-white"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}

            <a
              href="tel:9871214007"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-400 to-sky-500 text-slate-950 shadow-md shadow-emerald-500/30"
            >
              <FiPhone />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
