import React from "react";
import SectionTitle from "../components/SectionTitle";

const About = () => {
  return (
    <div className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionTitle
          eyebrow="About Us"
          title="PROPERTY MINES – your trusted property partner"
          subtitle="We focus on personalised service rather than just online listings."
        />

        <p className="text-sm text-slate-300">
          PROPERTY MINES is a Ghaziabad-based real estate consultancy
          specialising in residential and commercial properties in and around
          Ramprastha Colony. We work directly with property owners and carefully
          screened builders to bring you genuine options that match your
          requirement.
        </p>

        <p className="text-sm text-slate-300">
          Our approach is simple – understand your requirement in detail, show
          only relevant properties, and stay fully transparent about pricing and
          documentation. We believe in long-term relationships, so most of our
          new clients come through word-of-mouth and referrals.
        </p>

        <div className="grid gap-5 sm:grid-cols-3 text-sm text-slate-300">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <h3 className="font-semibold text-slate-50 mb-2">Our Mission</h3>
            <p>
              To make property buying and selling simple, safe and stress-free
              for every client we work with.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <h3 className="font-semibold text-slate-50 mb-2">Our Values</h3>
            <p>
              Honesty, transparency and commitment. We guide you like a family
              member, not just a customer.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <h3 className="font-semibold text-slate-50 mb-2">Our Focus</h3>
            <p>
              Ghaziabad, especially Ramprastha Colony and surrounding areas, so
              we know the local market deeply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
