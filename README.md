# NEVER HALFWAY

> **"They ask why I didn’t quit. I ask what quitting even looks like."**  
> — Bill Zade

---

## 🔥 Mission

This isn’t a portfolio. It’s a manifesto, a toolkit, and a brand forged in grit.  
**NEVER HALFWAY** is the personal site of Bill Zade — veteran, builder, musician, coder. No templates, no gloss — just tools and stories honed by intent.

---

## 🧭 Purpose

- Showcase projects: code, builds, music, media  
- Offer clear, honest freelance services: web, audio, custom builds  
- Build a brand presence for merch, music, and media  
- Tell a real story: service, survival, skill, and staying power  

---

## 🎯 Audience

- Developers, indie makers, musicians, veterans  
- Those who value skill and honesty over credentials and hype  
- Clients seeking no-nonsense, direct partnerships  

---

## 💀 Core Ethos

- **No shortcuts. No fake shine. Never halfway.**  
- Every pixel, line, and sound has purpose  
- Skill over status. Truth over trend  

---

## 🎨 Visual Identity

- Dark mode only: tactical, legible, real  
- Palette: charcoal, ember orange (#ff6600), radar green accents  
- Inspired by Metal Gear Solid HUDs, Half-Life UIs, and retro terminal gear  
- Terminal aesthetics: scanlines, monospace fonts, dossier-style cards  
- Sharp grids, tactile UI interactions  

---

## 📐 Site Structure

- `/` — Hero banner + tagline  
- `/projects` — Dev cards, GitHub links, “why it matters” blurbs  
- `/music-media` — Session work, gear, embedded audio, studio/live rigs  
- `/services` — Web/audio/consulting options with clear pricing  
- `/store` — Merch (coming soon)  
- `/about` — Timeline story — raw and real  
- `/contact` — Direct contact only, no forms  

---

## 💻 Tech Stack

| Layer        | Tools & Versions                        |
|--------------|---------------------------------------|
| Framework    | Next.js 14+ (App Router)               |
| Styling      | TailwindCSS + ShadCN UI + global CSS  |
| Fonts        | Orbitron, Inter, Rajdhani, Roboto Mono|
| Icons        | Lucide                                |
| Email        | Resend, Formspree, or custom SMTP     |
| Deployment   | Vercel                                |
| CI/CD        | GitHub Actions                        |
| Language     | TypeScript 5.x                        |
| Version Ctrl | Git + Conventional Commits            |

---

## 🗂 Project Structure

```bash
/app             # App Router pages
  ├─ page.tsx    # Hero landing
  ├─ layout.tsx  # Global layout
  ├─ about/
  ├─ contact/
  ├─ projects/
  ├─ services/
  └─ music-media/
/components      # Reusable UI components
/styles          # Global styles (Tailwind + overrides)




TO-DO List:
## 🚧 Core Pages

- [x] Home Page complete
- [ ] Add more projects to `/projects`
- [ ] Flesh out `/music-media` with embedded audio
- [ ] Expand `/about` with timeline details

## 🛒 Store Features

- [x] Scaffold `/store` page with product cards
- [ ] Add Stripe and PayPal checkout integration
- [ ] Create dropdown nav menu for store categories (Music, Tools, Merch)
- [ ] Add product preview modals (images/audio)
- [ ] License/download policy UI

## 🎧 Music/Media Features

- [ ] Looping background audio with mute toggle
- [ ] Add audio players to `/music-media`
- [ ] Link music projects to store for purchase
- [ ] Create a Bandcamp/DistroKid replacement pipeline

## 📢 Outreach & Engagement

- [ ] Add testimonials / client feedback section
- [ ] Add footer links to Discord, Twitch, Patreon
- [ ] Social media link components + profiles
- [ ] Build blog system (with comments)

## 🧠 UI Polish / UX Goals

- [ ] Sticky HUD-style nav overlay
- [ ] Ambient parallax background
- [ ] Glitch/scanline effects
- [ ] SEO optimization + performance tweaks

## 🎵 Digital Storefront

The DarkFiber store is now live with full Stripe Checkout integration.

### ✅ Features
- Secure payments via [Stripe](https://stripe.com)
- Product cards with title, description, price, and image
- "Buy Now" button for instant checkout (available products only)
- Graceful fallback for items marked as "Coming Soon"
- Success and cancel redirect pages

### 🛒 Live Demo
Visit the store at: [http://localhost:3000/store](http://localhost:3000/store) (or your production URL)

### 🔐 Notes
- This uses test mode Stripe keys by default
- To go live:
  1. Replace the keys in `.env.local` with your **live** keys
  2. Ensure your product metadata is set up in Stripe
  3. Use **absolute image URLs** if you want product previews on Stripe Checkout

---

## 💡 License & Download Support (coming soon)
Plans to add:
- License terms per product
- Digital download delivery
- Search & categories
