# Universal Engineering — Landing Page PRD

## Original Problem Statement
High-conversion, mobile-first one-page website for "Universal Engineering" — lithium battery repair and Ola scooter battery specialist in India. Goal: maximize phone calls and leads. Premium, modern, industrial design in black/yellow/white.

## User Choices (captured)
- Service area: Pan India · Delhi NCR
- WhatsApp button alongside Call (same number: 8178625048)
- Hours: 9 AM – 9 PM, all days
- Imagery: curated stock placeholders (user will share real assets later)

## Architecture
- Frontend only (React, Tailwind, shadcn available). No backend/DB needed.
- Single route `/` renders `src/pages/Landing.jsx`.
- Components: `Header.jsx`, `StickyMobileCTA.jsx` (md:hidden).
- Fonts: Outfit (display) + Manrope (body) via Google Fonts.
- Icons: lucide-react.

## Personas
- Ola S1 / S1 Pro owners facing battery issues (range drop, BMS errors, won't charge).
- Riders in Delhi NCR searching locally; Pan India via phone/WhatsApp inbound.

## Core Requirements (static)
- Phone `8178625048` visible in header, hero, mid-CTA, footer, and sticky mobile bar.
- All phone CTAs use `tel:8178625048`; WhatsApp uses `https://wa.me/918178625048`.
- Sticky mobile call+whatsapp bar; hidden on `md:` and up.
- Urgency banner: "Same Day Diagnosis Available · 9 AM – 9 PM".
- Services: Lithium Battery Repair, Ola Battery Specialist, Battery Fault Diagnosis, Battery Reconditioning.
- Why Choose Us: Fast Service, Expert Technician, Affordable Pricing, Trusted by Customers.
- Trust badges: Experienced Technician, Specialized in Ola Batteries + 3 testimonials.

## Implemented (Dec 2025)
- Mobile-first landing page with all required sections and CTAs.
- Sticky mobile CTA (Call + WhatsApp) with pulse animation and hover states.
- Accessible `data-testid` on every interactive element.
- Passed 14/14 frontend tests via testing_agent_v4 (iteration_1).

## Backlog / Next
- P1: Replace stock imagery with real workshop photos + brand logo when provided.
- P1: Add Google reviews / embed map pin for Delhi NCR workshop address.
- P2: Add a short lead form (name + phone) as a secondary capture for after-hours visitors.
- P2: SEO — meta tags for "Ola battery repair Delhi", add JSON-LD LocalBusiness schema.
- P2: GA4 / Meta Pixel event tracking on each Call/WhatsApp click.
