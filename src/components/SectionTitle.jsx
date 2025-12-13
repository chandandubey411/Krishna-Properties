import React from "react";

const SectionTitle = ({ eyebrow, title, subtitle, align = "left" }) => {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-1 ${alignment}`}>
      {eyebrow && (
        <span className="text-[11px] uppercase tracking-[0.25em] text-emerald-400">
          {eyebrow}
        </span>
      )}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-50">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm text-slate-400 max-w-xl">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
