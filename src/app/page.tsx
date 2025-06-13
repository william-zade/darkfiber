
// app/page.tsx
'use client';

import React from 'react';
import SectionPanel from "../components/SectionPanel";
import { FaGithub } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function HomePage() {
  return (
    <div className="container text-light py-5">
      {/* Hero */}
      <section className="py-5 border-bottom border-danger text-center">
        <h1 className="display-3 fw-bold text-warning">NEVER HALFWAY</h1>
        <p className="lead fst-italic">
          &quot;They ask why I didn’t quit. I ask what quitting even looks like.&quot;
        </p>
      </section>

      {/* Mission */}
      <section className="py-5">
        <h2 className="text-danger">🔥 Mission</h2>
        <p>
          This isn’t a portfolio. This is a manifesto, a toolkit, and a brand built on grit.
          <br />
          <strong>NEVER HALFWAY</strong> is the personal platform of Bill Zade — veteran, builder, musician, coder.
        </p>
      </section>

      {/* Projects */}
      <SectionPanel icon="💻" title="Projects">
  <div className="row row-cols-1 row-cols-md-2 g-4">
    <div className="col">
      <div className="card h-100 border border-danger bg-dark text-light">
        <div className="card-body">
          <h5 className="card-title text-warning">Codebase Reforged</h5>
          <p className="card-text">
            Refactored legacy C++ tooling to modern, efficient structures. Built for resilience, not trends.
          </p>
          <a
            href="https://github.com/william-zade?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-warning d-flex align-items-center gap-2"
          > 
            <FaGithub size={20} />
            GitHub
          </a>

        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100 border border-danger bg-dark text-light">
        <div className="card-body">
          <h5 className="card-title text-warning">Ashes in Orbit</h5>
          <p className="card-text">
            Doom EP produced entirely in Drop A, with sonar swells and ambient noise inspired by planetary collapse.
          </p>
          <a href="#" className="btn btn-outline-warning">Listen</a>
        </div>
      </div>
    </div>
  </div>
</SectionPanel>


      {/* Services */}
      <SectionPanel icon="🧰" title="Services">
  <ul className="list-unstyled mb-0">
    <li>🎧 Audio engineering, session work, mix/master, sound design</li>
    <li>🌐 Custom-coded websites (Next.js, Bootstrap, full-stack capable)</li>
    <li>🛠️ System builds, scripting, and consulting for people who care about uptime</li>
  </ul>
</SectionPanel>


      {/* Contact */}
      <SectionPanel icon="📬" title="Contact">
  <p>
    No forms. No bullshit. Just email:{" "}
    <a href="mailto:bill@neverhalfway.dev" className="text-warning">
      bill@neverhalfway.dev
    </a>
  </p>
</SectionPanel>


      {/* Footer */}
      <footer className="pt-4 mt-4 border-top border-danger text-center small text-secondary">
        Built by Bill Zade — Veteran. Builder. Musician. Coder.{' '}
        <span className="text-warning">NEVER HALFWAY.</span>
      </footer>
    </div>
  );
}