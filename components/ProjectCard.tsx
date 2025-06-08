// components/ProjectCard.tsx

import Image from "next/image";
import { FC } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ title, description, imageUrl, link }) => {
  return (
    <div className="card h-100 shadow-sm border-0">
      <Image
        src={imageUrl}
        className="card-img-top"
        alt={`${title} image`}
        width={600}
        height={400}
        style={{ objectFit: "cover", maxHeight: "250px" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-uppercase text-orange fw-bold">{title}</h5>
        <p className="card-text flex-grow-1">{description}</p>
        {link && (
          <a href={link} className="btn btn-accent mt-3 align-self-start">
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
