import React from "react";

export default function ServicesPage() {
  return (
    <div>
      <div className="bg-dark bg-opacity-75 text-light border border-warning p-3 rounded shadow-sm hud-panel">
        <h5 className="text-accent fw-bold">SERVICES</h5>
        <p className="mb-2">Codebase Reforged...</p>
        <a href="#" className="btn btn-outline-warning btn-sm">GitHub</a>
      </div>
      <section>
        <ul>
          <li className="mb-3">
            <strong>Codebase Reforged</strong> - Refactoring legacy C++ tooling to modern, efficient structures.
          </li>
          <li className="mb-3">
            <strong>Ashes in Orbit</strong> - Doom EP produced entirely in Drop A, with sonar swells and ambient noise.
          </li>
        </ul>
      </section>
    </div>
  );
}