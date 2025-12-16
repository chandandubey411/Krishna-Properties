import React from "react";
import SectionTitle from "../components/SectionTitle";
import PropertyCard from "../components/PropertyCard";

// Import new separate images
import bhkfllat from "../assets/bhkfllat.png";
import flat3 from "../assets/flat3.jpg";
import flat4 from "../assets/flat4.jpg";
import shop2 from "../assets/shop2.jpg";
import onsite from "../assets/onsite.png";
import rent2 from "../assets/rent2.jpg";
import residentialplot from "../assets/residentialplot.png";
import commercialplot from "../assets/commercialplot.png";
import BuildingRenovation from "../assets/BuildingRenovation.png";
import flatrenovation from "../assets/flatrenovation.jpg";

const Properties = () => {
  const properties = [
    {
      title: "1 BHK Flat – Ramprastha Colony",
      location: "Ramprastha Colony, Ghaziabad",
      price: "₹26,00,000",
      tag: "For Sale",
      status: "New Listing",
      image: bhkfllat,
    },
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
      title: "On Site Shop – Main Market",
      location: "Ramprastha Main Road",
      price: "₹95,00,000",
      tag: "On Site",
      status: "On Request",
      image: onsite,
    },
    {
      title: "2 BHK for Rent",
      location: "Ramprastha Colony",
      price: "₹18,000 / month",
      tag: "For Rent",
      status: "Semi-Furnished",
      image: rent2,
    },
    {
      title: "Residential plot",
      location: "Ghaziabad",
      price: "₹60,00,000",
      tag: "Residential",
      status: "Devlopment",
      image: residentialplot,
    },
    {
      title: "Commercial plot",
      location: "Janakpuri",
      price: "₹70,00,000",
      tag: "Commercial",
      status: "Vacant",
      image: commercialplot,
    },
    {
      title: "Building Renovation",
      location: "Delhi NCR",
      price: "depends",
      tag: "Building",
      status: "Call Now",
      image: BuildingRenovation,
    },
    {
      title: "Flat Renovation",
      location: "Delhi NCR",
      price: "depends",
      tag: "Building",
      status: "Call Now",
      image: flatrenovation,
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
