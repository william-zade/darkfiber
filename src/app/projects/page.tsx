
'use client';

import SectionPanel from "../../components/SectionPanel";
import ProjectCard from "../../components/ProjectCard";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Codebase Reforged",
      description: "Legacy C++ refactor turned into modern, portable tooling with resilience in mind.",
      image: "/images/codebase-reforged.jpg",
      link: "https://github.com/your-repo/codebase-reforged",
      cta: "GitHub"
    },
    {
      title: "Ashes in Orbit",
      description: "An ambient doom EP with space collapse themes. Includes FX tools, loops, and art assets.",
      image: "/images/ashes-orbit.jpg",
      link: "#", // placeholder
      cta: "Buy"
    },
    {
      title: "Loadout Tracker",
      description: "Web app for modular loadout configuration — for musicians, operators, and tinkerers.",
      image: "/images/loadout-tracker.jpg",
      link: "#",
      cta: "Coming Soon"
    }
  ];

  return (
    <div className="container py-5">
      <SectionPanel icon="💻" title="Projects">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {projects.map((project, idx) => (
            <div className="col" key={idx}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </SectionPanel>
    </div>
  );
}
