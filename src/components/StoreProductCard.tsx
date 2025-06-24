// src/components/StoreProductCard.tsx
import React from "react";

interface ProductProps {
  title: string;
  description: string;
  image: string;
  price: string;
  status: "available" | "coming-soon";
}

export default function StoreProductCard({ title, description, image, price, status }: ProductProps) {
  return (
    <div className="card bg-dark text-light border border-danger hud-panel hud-floating h-100">
      <img src={image} className="card-img-top" alt={`${title} image`} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-accent">{title}</h5>
        <p className="card-text flex-grow-1">{description}</p>
        <p className="text-warning fw-bold">{price}</p>
        {status === "available" ? (
          <button className="btn btn-accent mt-auto" disabled>
            Buy (soon)
          </button>
        ) : (
          <button className="btn btn-outline-secondary mt-auto" disabled>
            Coming Soon
          </button>
        )}
      </div>
    </div>
  );
}
