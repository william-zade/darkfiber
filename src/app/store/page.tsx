'use client';

import SectionPanel from "../../components/SectionPanel";
import StoreProductCard from "../../components/StoreProductCard";

export default function StorePage() {
  const products = [
    {
      title: "Ashes in Orbit EP",
      description: "High-fidelity digital download — ambient doom in Drop A, with cover art and liner notes.",
      image: "/images/store-ashes.jpg",
      price: "$5",
      status: "coming-soon",
    },
    {
      title: "FX Sample Pack Vol.1",
      description: "20+ analog-sourced sound effects — sonar pings, cathedral bells, lo-fi feedback, and void sweeps.",
      image: "/images/store-fxpack.jpg",
      price: "$10",
      status: "available",
    },
    {
      title: "Loadout Tracker Tool",
      description: "Cross-platform JS tool for modular rig/loadout config. CLI + GUI versions.",
      image: "/images/store-loadout.jpg",
      price: "$12",
      status: "available",
    }
  ];

  return (
    <div className="container py-5">
      <SectionPanel icon="🛒" title="Store">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {products.map((product, idx) => (
            <div className="col" key={idx}>
              <StoreProductCard {...product} />
            </div>
          ))}
        </div>
      </SectionPanel>
    </div>
  );
}
