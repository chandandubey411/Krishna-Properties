import React from "react";

const PrimaryButton = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-emerald-400 to-sky-500 text-slate-950 shadow-md shadow-emerald-500/30 hover:shadow-lg hover:-translate-y-0.5 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
