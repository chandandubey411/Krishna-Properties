import React from "react";
import SectionTitle from "../components/SectionTitle";

const Services = () => {
  const services = [
    {
      title: "Property Buying Assistance",
      points: [
        "Shortlisting based on your requirement",
        "Arranging site visits",
        "Price negotiation support",
      ],
    },
    {
      title: "Property Selling Support",
      points: [
        "Marketing your property locally",
        "Filtering genuine buyers",
        "Assistance during deal finalisation",
      ],
    },
    {
      title: "Rental & Lease Services",
      points: [
        "Finding tenants for your property",
        "Rental agreement coordination",
        "Periodic assistance as required",
      ],
    },
    {
      title: "Documentation Guidance",
      points: [
        "Help with sale deed & registry",
        "Loan documentation assistance",
        "Coordination with lawyers if needed",
      ],
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionTitle
          eyebrow="Services"
          title="End-to-end real estate assistance"
          subtitle="Whether you are buying, selling or renting, we simplify every step."
        />

        <div className="grid gap-5 sm:grid-cols-2 text-sm text-slate-300">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-2"
            >
              <h3 className="font-semibold text-slate-50">{service.title}</h3>
              <ul className="list-disc list-inside text-xs text-slate-400">
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
