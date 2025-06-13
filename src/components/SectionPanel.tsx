// src/components/SectionPanel.tsx
import React from "react";

interface SectionPanelProps {
  icon: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionPanel({ icon, title, children, className = "" }: SectionPanelProps) {
  return (
    <div className={`hud-panel hud-floating text-light p-4 mb-4 ${className}`}>
      <h3 className="text-accent mb-3">
        <span className="me-2">{icon}</span> {title}
      </h3>
      {children}
    </div>
  );
}
