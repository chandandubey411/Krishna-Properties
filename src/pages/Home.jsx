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
    <div className="pb-16">
      {/* Hero */}
      <section className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-[1.1fr,0.9fr] items-center">
          {/* Left */}
          <div className="space-y-6">
            <span className="inline-flex text-[11px] uppercase tracking-[0.3em] text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/30">
              Ghaziabad · Ramprastha Colony
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-slate-50">
              Find your next{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-sky-500 bg-clip-text text-transparent">
                perfect property
              </span>{" "}
              with PROPERTY MINES.
            </h1>

            <p className="text-sm sm:text-base text-slate-400 max-w-xl">
              From residential apartments to independent houses and commercial
              spaces, we help you discover verified properties that truly match
              your budget, location and lifestyle.
            </p>

            <div className="flex flex-wrap gap-3 items-center">
              <Link to="/contact">
                <PrimaryButton>
                  <FiPhoneCall className="mr-2" />
                  Book a Free Consultation
                </PrimaryButton>
              </Link>

              <a
                href="tel:9871214007"
                className="text-sm font-medium text-slate-200 hover:text-emerald-400 flex items-center gap-2"
              >
                <span className="h-8 w-8 rounded-full border border-slate-700 flex items-center justify-center text-xs">
                  24x7
                </span>
                Call: 9871214007
              </a>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4 text-xs text-slate-300">
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

          {/* Right: hero card */}
          <div className="relative">
            <div className="absolute -top-10 -right-6 h-32 w-32 rounded-full bg-emerald-400/30 blur-3xl" />
            <div className="absolute bottom-0 -left-10 h-36 w-36 rounded-full bg-sky-500/25 blur-3xl" />

            <div className="relative rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 shadow-2xl shadow-black/60 p-5 space-y-5">
              <p className="text-xs font-medium text-emerald-400 uppercase tracking-[0.25em]">
                Featured Area
              </p>
              <h2 className="text-lg font-semibold text-slate-50">
                Ramprastha Colony & Nearby
              </h2>
              <p className="text-xs text-slate-400">
                Exclusive listings in and around Ramprastha Colony, Ghaziabad.
                Well-connected, peaceful and family-friendly localities.
              </p>

              <div className="grid gap-3 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span>2 & 3 BHK Flats</span>
                  <span className="text-slate-100 font-semibold">
                    From ₹45L*
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Independent Floors</span>
                  <span className="text-slate-100 font-semibold">
                    From ₹70L*
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Builder Floors</span>
                  <span className="text-slate-100 font-semibold">
                    From ₹55L*
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-2 border-t border-slate-800">
                <div>
                  <p className="text-lg font-semibold text-slate-50">10+</p>
                  <p className="text-[11px] text-slate-400">
                    Years Experience*
                  </p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-50">100+</p>
                  <p className="text-[11px] text-slate-400">Happy Clients</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-50">50+</p>
                  <p className="text-[11px] text-slate-400">Active Listings</p>
                </div>
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

      {/* Featured properties */}
      <section className="py-10 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <SectionTitle
            eyebrow="Featured Properties"
            title="Curated listings from PROPERTY MINES"
            subtitle="These are some example cards. Replace details with your real projects and properties."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

          <div className="flex justify-between items-center mt-2 text-xs text-slate-400">
            <p>
              *All prices are indicative and subject to change. Please call to
              confirm.
            </p>
            <Link
              to="/properties"
              className="text-emerald-400 hover:text-emerald-300 font-medium"
            >
              Browse all properties →
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <SectionTitle
            eyebrow="Simplified Process"
            title="Buying property made easy"
            subtitle="From first call to final registry – PROPERTY MINES stands with you at every step."
            align="center"
          />

          <div className="grid gap-5 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discuss Requirement",
                desc: "We understand your budget, location preference and purpose – self use or investment.",
              },
              {
                step: "02",
                title: "Shortlist Options",
                desc: "We share matching properties and schedule site visits as per your convenience.",
              },
              {
                step: "03",
                title: "Negotiate & Finalise",
                desc: "We assist in negotiations, token amount, and draft agreement terms clearly.",
              },
              {
                step: "04",
                title: "Documentation Support",
                desc: "From registry to handover, we coordinate with all parties for smooth closure.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-2"
              >
                <span className="text-[11px] font-semibold text-emerald-400">
                  STEP {item.step}
                </span>
                <h3 className="text-sm font-semibold text-slate-50">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-12 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6">
            <SectionTitle
              eyebrow="Why PROPERTY MINES"
              title="Local expertise. Honest guidance."
              subtitle="Unlike big portals, we work on-ground, closely with property owners, builders and buyers in Ghaziabad."
            />
            <ul className="space-y-3 text-sm text-slate-300">
              <li>• Genuine, physically verified properties.</li>
              <li>
                • Clear communication of all charges – no hidden surprises.
              </li>
              <li>
                • Assistance in loan documentation and legal verification.
              </li>
              <li>• Strong network in Ramprastha Colony and nearby areas.</li>
              <li>• Friendly, long-term relationship with clients.</li>
            </ul>
          </div>

          {/* Mini Testimonials */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-300">
              “PROPERTY MINES helped us find a perfect 3 BHK within our budget
              in Ramprastha. Documentation process was super smooth.”
              <p className="mt-2 text-xs text-slate-500">
                — Happy Client (Family)
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-300">
              “Professional and transparent. They guided us from property visit
              till registry, step by step.”
              <p className="mt-2 text-xs text-slate-500">
                — Investor Client (Commercial Shop)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 via-slate-950 to-sky-500/10 px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
                Ready to explore properties with PROPERTY MINES?
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Call us or send a message. We’ll get back within a few working
                hours and help you with the best options.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
              <a href="tel:9871214007">
                <PrimaryButton>Call: 9871214007</PrimaryButton>
              </a>
              <Link
                to="/contact"
                className="text-sm font-medium text-emerald-400 hover:text-emerald-300"
              >
                Or send an enquiry →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
