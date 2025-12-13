import React from "react";
import SectionTitle from "../components/SectionTitle";

const Projects = () => {
  const projects = [
    {
      name: "Ramprastha Heights",
      type: "Residential Apartments",
      status: "Completed",
      description:
        "Mid-rise apartment complex with parks, security and good connectivity.",
    },
    {
      name: "Vaishali Plaza",
      type: "Residential & Commercial Mix",
      status: "Ongoing",
      description:
        "Combination of builder floors and retail shops near Vaishali metro.",
    },
    {
      name: "Local Builder Projects",
      type: "Builder Floors",
      status: "Multiple",
      description:
        "Various small-scale builder projects in and around Ramprastha Colony.",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionTitle
          eyebrow="Projects"
          title="Sample projects handled by PROPERTY MINES"
          subtitle="Showcase your key projects, associations or preferred builders here."
        />

        <div className="space-y-4 text-sm text-slate-300">
          {projects.map((project) => (
            <div
              key={project.name}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-1"
            >
              <h3 className="text-base font-semibold text-slate-50">
                {project.name}
              </h3>
              <p className="text-xs text-slate-400">
                {project.type} · {project.status}
              </p>
              <p className="text-xs text-slate-300">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
