// src/components/ProjectCard.tsx
import React from "react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  link: string;
  cta: string;
}

export default function ProjectCard({ title, description, image, link, cta }: ProjectProps) {
  return (
    <div className="card h-100 bg-dark text-light border border-danger hud-panel hud-floating">
      <img src={image} className="card-img-top" alt={`${title} thumbnail`} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-accent">{title}</h5>
        <p className="card-text flex-grow-1">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-accent mt-auto">
          {cta}
        </a>
      </div>
    </div>
  );
}
