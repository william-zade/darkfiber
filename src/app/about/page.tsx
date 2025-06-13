'use client';

import React, { useEffect, useState } from "react";
import "../../styles/about.css";

// Move these outside the component so they don't recreate on every render
const fullText = [
  "╔═══════════════════════════════════════╗",
  "║       TACTICAL DOSSIER — BZ01        ║",
  "╠═══════════════════════════════════════╣",
  "║ Name: Bill Zade                       ║",
  "║ Role: Builder / Musician / Veteran    ║",
  "║ Stack: Next.js, Reaper, Rust          ║",
  "║ Specialty: Systems that outlast       ║", 
  "║ Clearance: REDACTED                   ║",
  "║ Codename: NEVER HALFWAY               ║",
  "║ Mission: Total Operational Uptime     ║",
  "╚═══════════════════════════════════════╝",
];

const storyText = [
  "",
  "Bill Zade builds systems that don’t",
  "flinch when the world goes dark.",
  "",
  "He’s a developer, musician, and veteran",
  "who designs with durability in mind.",
  "",
  "Years of military service forged his",
  "mindset: prepare for failure, and",
  "build anyway.",
  "",
  "After the military, Bill translated",
  "that mindset into technology and",
  "music. In code, he found the same",
  "logic and precision. In sound, the",
  "same emotion and grit.",
  "",
  "His work spans full-stack development,",
  "real-time audio production, and",
  "hardware-integrated systems.",
  "",
  "He’s fluent in modern frameworks like",
  "Next.js, builds ambient doom in Reaper,",
  "and thinks Rust is more than a language —",
  "it’s a philosophy.",
  "",
  "Off the keyboard, he fabricates, tunes,",
  "and restores machines that outlast their",
  "time. His garage is as much a lab as",
  "his terminal.",
  "",
  "Everything he makes — a line of code,",
  "a riff, a diesel conversion — follows",
  "one principle: It has to hold up.",
  "",
  "Bill doesn’t believe in perfect systems.",
  "He believes in resilient ones.",
  "",
  "Because uptime isn’t about luck.",
  "It’s about how you build.",
  "",
  "NEVER HALFWAY."
];
export default function AboutPage() {
  const [lines, setLines] = useState<string[]>([]);

  const combinedText = React.useMemo(() => [...fullText, ...storyText], []);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < combinedText.length) {
        setLines(prev => [...prev, combinedText[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 250);

    return () => clearInterval(interval);
  }, [combinedText]);

  return (
    <div className="dossier-container">
      <pre className="dossier-terminal text-warning">
        {lines.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </pre>
    </div>
  );
}

