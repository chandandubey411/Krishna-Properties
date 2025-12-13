import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import PrimaryButton from "../components/PrimaryButton";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "Buy Residential Property",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null); // { type: "success" | "error", message: string }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "4c31e106-ed27-43ec-9811-03a496832d22",
          subject: "New enquiry from PROPERTY MINES website",
          ...formData,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setResult({
          type: "success",
          message: "Thank you! Your enquiry has been sent successfully.",
        });
        // form reset
        setFormData({
          name: "",
          phone: "",
          email: "",
          requirement: "Buy Residential Property",
          message: "",
        });
      } else {
        setResult({
          type: "error",
          message: "Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      setResult({
        type: "error",
        message: "Network error. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionTitle
          eyebrow="Contact"
          title="Get in touch with PROPERTY MINES"
          subtitle="Call us directly or send a quick message using this simple form."
        />

        <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr]">
          {/* Form (Web3Forms) */}
          <form
            className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-sm"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs text-slate-400 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl bg-slate-950/60 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl bg-slate-950/60 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                  placeholder="Your mobile number"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-400 mb-1">
                Email (optional)
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl bg-slate-950/60 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-xs text-slate-400 mb-1">
                Requirement
              </label>
              <select
                name="requirement"
                value={formData.requirement}
                onChange={handleChange}
                className="w-full rounded-xl bg-slate-950/60 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              >
                <option>Buy Residential Property</option>
                <option>Buy Commercial Property</option>
                <option>Sell Property</option>
                <option>Rent / Lease</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs text-slate-400 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-xl bg-slate-950/60 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-emerald-400 resize-none"
                placeholder="Briefly describe your requirement, budget and preferred location."
              />
            </div>

            <PrimaryButton
              type="submit"
              className="w-full sm:w-auto"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Enquiry"}
            </PrimaryButton>

            {result && (
              <p
                className={`text-[11px] mt-2 ${
                  result.type === "success"
                    ? "text-emerald-400"
                    : "text-red-400"
                }`}
              >
                {result.message}
              </p>
            )}

            <p className="text-[11px] text-slate-500">
              Your message will be delivered securely using Web3Forms.
            </p>
          </form>

          {/* Contact details */}
          <div className="space-y-4 text-sm text-slate-300">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
              <h3 className="text-base font-semibold text-slate-50">
                Direct Contact
              </h3>
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

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
              <h3 className="text-base font-semibold text-slate-50">Office</h3>
              <p className="flex items-start gap-2">
                <FiMapPin className="mt-0.5" />
                <span>
                  B-14, SHOP NO.1, RAMPRASTHA COLONY,
                  <br />
                  GHAZIABAD, UP - 201011
                </span>
              </p>
              <p className="text-xs text-slate-400 mt-2">
                Landmark: You can mention nearby landmarks here for easy
                navigation (e.g., near main gate, near specific school, etc.).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
