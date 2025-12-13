import React from "react";
import SectionTitle from "../components/SectionTitle";
import PropertyCard from "../components/PropertyCard";

// Import new separate images
import flat3 from "../assets/flat3.jpg";
import flat4 from "../assets/flat4.jpg";
import shop2 from "../assets/shop2.jpg";
import rent2 from "../assets/rent2.jpg";

const Properties = () => {
  const properties = [
    {
      title: "2 BHK Apartment – Ramprastha Colony",
      location: "Ramprastha Colony, Ghaziabad",
      price: "₹52,00,000",
      tag: "For Sale",
      status: "New Listing",
      image: flat3,
    },
    {
      title: "3 BHK Builder Floor – Park Facing",
      location: "Vaishali · Near Metro",
      price: "₹78,00,000",
      tag: "For Sale",
      status: "Ready to Move",
      image: flat4,
    },
    {
      title: "Commercial Shop – Main Market",
      location: "Ramprastha Main Road",
      price: "₹95,00,000",
      tag: "Commercial",
      status: "On Request",
      image: shop2,
    },
    {
      title: "2 BHK for Rent",
      location: "Ramprastha Colony",
      price: "₹18,000 / month",
      tag: "For Rent",
      status: "Semi-Furnished",
      image: rent2,
    },
  ];


  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <SectionTitle
          eyebrow="Properties"
          title="Browse sample property listings"
          subtitle="Replace these with your actual property data or integrate with backend later."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((p, idx) => (
            <PropertyCard key={idx} {...p} />
          ))}
        </div>

        <p className="text-xs text-slate-500">
          *This is static demo data. Real listings can be plugged in later using
          API or CMS.
        </p>
      </div>
    </div>
  );
};

export default Properties;
