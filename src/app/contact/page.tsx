'use client';

import SectionPanel from "../../components/SectionPanel";
import { Mail, Github, Music } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container py-5">
      <SectionPanel icon="📬" title="Contact">
        <p className="lead text-light mb-4">
          No forms. No nonsense. Just reach out directly.
        </p>

        <ul className="list-unstyled fs-5">
          <li className="mb-3">
            <Mail className="me-2 text-accent" />
            <a href="mailto:bill@neverhalfway.dev" className="text-accent">
              bill@neverhalfway.dev
            </a>
          </li>
          <li className="mb-3">
            <Github className="me-2 text-accent" />
            <a href="https://github.com/william-zade" target="_blank" className="text-accent">
              github.com/william-zade
            </a>
          </li>
          <li className="mb-3">
            <Music className="me-2 text-accent" />
            <a href="https://bandcamp.com/yourproject" target="_blank" className="text-accent">
              bandcamp.com/lastchoirofash
            </a>
          </li>
        </ul>

        <p className="text-muted mt-4">
          I respond quickly. Direct, personal contact only — no agents, no inboxes of doom.
        </p>
      </SectionPanel>
    </div>
  );
}
