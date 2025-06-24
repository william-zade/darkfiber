'use client';
import React from "react";
import { loadStripe } from "@stripe/stripe-js";

interface ProductProps {
  title: string;
  description: string;
  image: string;
  price: number;  // number, not string
  status: "available" | "coming-soon";
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function StoreProductCard({ title, description, image, price, status }: ProductProps) {
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        product: {
          name: title,
          description,
          image,
          price,  // no parseFloat needed anymore
        },
      }),
    });

    const data = await res.json();

    if (data.id && stripe) {
      stripe.redirectToCheckout({ sessionId: data.id });
    } else if (data.error) {
      console.error('Stripe error:', data.error);
    }
  };

  return (
    <div className="card bg-dark text-light border border-danger hud-panel hud-floating h-100">
      <img src={image} className="card-img-top" alt={`${title} image`} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-accent">{title}</h5>
        <p className="card-text flex-grow-1">{description}</p>
        <p className="text-warning fw-bold">${price}</p>
        {status === "available" ? (
          <button className="btn btn-accent mt-auto" onClick={handleCheckout}>
            Buy Now
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
