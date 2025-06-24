'use client';

import SectionPanel from "../../components/SectionPanel";

export default function ServicesPage() {
  const services = [
    {
      category: "🌐 Web Development",
      items: [
        {
          title: "Custom Web Builds",
          description: "Next.js, Bootstrap, or Tailwind builds — coded from scratch for speed and control.",
        },
        {
          title: "Landing Pages & Microsites",
          description: "One-page tactical presence. Perfect for campaigns, product drops, or mission launches.",
        },
      ],
    },
    {
      category: "🎧 Audio & Music",
      items: [
        {
          title: "Mixing / Mastering",
          description: "Get a polished, analog-warm sound with aggressive clarity. Doom, metal, ambient, and more.",
        },
        {
          title: "Sound Design & FX",
          description: "Sonic identity creation — from eerie atmospheres to UI blips to explosive hits.",
        },
      ],
    },
    {
      category: "🛠 Systems / Builds",
      items: [
        {
          title: "Custom PC Builds & Optimization",
          description: "Thermal, silent, overbuilt — from low-power DevBoxes to rugged field rigs.",
        },
        {
          title: "Scripted Tools & Automations",
          description: "CLI utilities, productivity workflows, or game-adjacent logic systems.",
        },
      ],
    },
  ];

  return (
    <div className="container py-5">
      <SectionPanel icon="🧰" title="Services">
        {services.map((group, idx) => (
          <div className="mb-5" key={idx}>
            <h3 className="text-warning mb-3">{group.category}</h3>
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {group.items.map((service, i) => (
                <div className="col" key={i}>
                  <div className="card bg-dark text-light border border-danger hud-panel hud-floating h-100">
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title text-accent">{service.title}</h5>
                      <p className="card-text flex-grow-1">{service.description}</p>
                      <a href="/contact" className="btn btn-outline-accent mt-auto">Contact</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </SectionPanel>
    </div>
  );
}
