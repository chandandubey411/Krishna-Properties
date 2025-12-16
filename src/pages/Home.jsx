import React from "react";
import { FiPhoneCall, FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import PrimaryButton from "../components/PrimaryButton";
import PropertyCard from "../components/PropertyCard";

import flat1 from "../assets/flat1.jpg";
import flat2 from "../assets/flat2.jpg";
import shop1 from "../assets/shop1.jpg";

const Home = () => {
  return (
    <div className="pb-16 bg-slate-950 text-slate-50">
      {/* ================= HERO ================= */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 md:grid-cols-[1.1fr,0.9fr] items-center">
          {/* LEFT */}
          <div className="space-y-6">
            <span className="inline-flex text-[11px] uppercase tracking-[0.3em] text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/30">
              Ghaziabad · Ramprastha Colony
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              Find your next{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-500 bg-clip-text text-transparent">
                perfect property
              </span>
              <br className="hidden sm:block" />
              with <span className="text-white">PROPERTY MINES</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-400 max-w-xl">
              From residential apartments to independent houses and commercial
              spaces, we help you discover verified properties that truly match
              your budget, location and lifestyle.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Link to="/contact">
                <PrimaryButton className="px-6 py-3 rounded-full shadow-xl shadow-emerald-500/30 hover:scale-[1.03] transition-transform">
                  <FiPhoneCall className="mr-2" />
                  Book a Free Consultation
                </PrimaryButton>
              </Link>

              <a
                href="tel:9871214007"
                className="flex items-center gap-2 text-sm font-medium text-slate-200 hover:text-emerald-400"
              >
                <span className="h-8 w-8 rounded-full border border-slate-700 flex items-center justify-center text-xs">
                  24x7
                </span>
                Call: 9871214007
              </a>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-300">
              {[
                "RERA-aware guidance",
                "Local market expertise",
                "Clear documentation",
                "Rental & sale options",
                "End-to-end assistance",
                "Personalised site visits",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <FiCheckCircle className="text-emerald-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="relative">
            <div className="absolute -top-12 -right-8 h-36 w-36 bg-emerald-400/30 blur-3xl rounded-full" />
            <div className="absolute bottom-0 -left-10 h-40 w-40 bg-sky-500/30 blur-3xl rounded-full" />

            <div className="relative rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 shadow-2xl p-6 space-y-5">
              <p className="text-xs uppercase tracking-[0.25em] text-emerald-400">
                Featured Area
              </p>
              <h2 className="text-lg font-semibold">
                Ramprastha Colony & Nearby
              </h2>
              <p className="text-xs text-slate-400">
                Peaceful localities with excellent connectivity and strong
                appreciation potential.
              </p>

              <div className="space-y-2 text-xs">
                {[
                  ["2 & 3 BHK Flats", "From ₹45L*"],
                  ["Independent Floors", "From ₹70L*"],
                  ["Builder Floors", "From ₹55L*"],
                ].map(([label, price]) => (
                  <div key={label} className="flex justify-between">
                    <span className="text-slate-300">{label}</span>
                    <span className="font-semibold text-slate-100">
                      {price}
                    </span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 pt-3 border-t border-slate-800">
                {[
                  ["10+", "Years Experience"],
                  ["100+", "Happy Clients"],
                  ["50+", "Active Listings"],
                ].map(([num, label]) => (
                  <div key={label}>
                    <p className="text-lg font-semibold">{num}</p>
                    <p className="text-[11px] text-slate-400">{label}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/properties"
                className="inline-block text-[13px] font-medium text-emerald-400 hover:text-emerald-300"
              >
                View available properties →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURED PROPERTIES ================= */}
      <section className="py-12 border-t border-slate-800/60 bg-slate-950/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <SectionTitle
            eyebrow="Featured Properties"
            title="Curated listings from PROPERTY MINES"
            subtitle="Handpicked residential and commercial properties."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <PropertyCard
              title="2 BHK Apartment in Ramprastha Colony"
              location="Ramprastha Colony, Ghaziabad"
              price="₹52,00,000"
              tag="For Sale"
              status="New Listing"
              image={flat1}
            />
            <PropertyCard
              title="3 BHK Builder Floor with Park Facing"
              location="Vaishali · Near Metro"
              price="₹78,00,000"
              tag="Hot Deal"
              status="Ready to Move"
              image={flat2}
            />
            <PropertyCard
              title="Road Facing Commercial Shop"
              location="Main Market, Ramprastha"
              price="₹95,00,000"
              tag="Commercial"
              status="On Request"
              image={shop1}
            />
          </div>

          <div className="flex justify-between items-center text-xs text-slate-400">
            <p>*Prices are indicative and subject to change.</p>
            <Link
              to="/properties"
              className="text-emerald-400 hover:text-emerald-300 font-medium"
            >
              Browse all properties →
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-12 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-3xl border border-emerald-500/40 bg-gradient-to-r from-emerald-500/15 via-slate-950 to-sky-500/15 backdrop-blur px-8 py-10 flex flex-col md:flex-row justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold">
                Ready to explore properties with PROPERTY MINES?
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Get expert guidance with zero pressure.
              </p>
            </div>
            <div className="flex gap-3">
              <a href="tel:9871214007">
                <PrimaryButton>Call: 9871214007</PrimaryButton>
              </a>
              <Link
                to="/contact"
                className="text-sm font-medium text-emerald-400 hover:text-emerald-300 self-center"
              >
                Or send enquiry →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
