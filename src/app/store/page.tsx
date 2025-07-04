'use client';
import React from 'react';
import StoreProductCard from '@/components/StoreProductCard';

type Product = {
  title: string;
  description: string;
  image: string;
  price: number;
  status: 'available' | 'coming-soon';
};

const products: Product[] = [
  {
    title: 'Echoes of a Dying Star',
    description: 'Doom EP — ambient collapse in Drop A',
    image: '/media/echoes-cover.png',
    price: 5,
    status: 'available',
  },
  {
    title: 'Codebase Reforged',
    description: 'Modernized legacy tooling in C++ and Rust',
    image: '/media/codebase-reforged.png',
    price: 10,
    status: 'available',
  },
  {
    title: 'DarkFiber HUD Pack',
    description: 'UI overlays and sound FX for sci-fi projects',
    image: '/media/hud-pack.png',
    price: 8,
    status: 'coming-soon',
  },
];

export default function StorePage() {
  return (
    <div className="container py-5">
      <h1 className="text-accent mb-4 text-center">🛒 DarkFiber Store</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {products.map((product, index) => (
          <div className="col" key={index}>
            <StoreProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}
