import { useEffect } from "react";
import {
  Phone,
  MessageCircle,
  Zap,
  Wrench,
  Activity,
  Battery,
  ShieldCheck,
  Clock,
  IndianRupee,
  Users,
  Star,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Youtube,
  PlayCircle,
  Navigation,
} from "lucide-react";
import Header from "@/components/Header";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const PHONE = "8178625048";
const PHONE_PRETTY = "+91 81786 25048";
const WA_LINK =
  "https://wa.me/918178625048?text=Hi%2C%20I%20need%20help%20with%20my%20Ola%20battery";
const YT_LINK = "https://youtube.com/@universalengineering01";
const MAPS_LINK = "https://maps.app.goo.gl/orddWdRDSCoPs1HH9";

const HERO_BG =
  "https://images.unsplash.com/photo-1642016254209-f4e9281de1e7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwyfHxlbGVjdHJpYyUyMHNjb290ZXIlMjBjaXR5fGVufDB8fHx8MTc3NjU0NzUxNnww&ixlib=rb-4.1.0&q=85";
const REPAIR_IMG =
  "https://images.unsplash.com/photo-1550041473-d296a3a8a18a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHwyfHxjaXJjdWl0JTIwYm9hcmQlMjByZXBhaXIlMjBtZWNoYW5pY3xlbnwwfHx8fDE3NzY1NDc1MTZ8MA&ixlib=rb-4.1.0&q=85";

const services = [
  {
    icon: Battery,
    title: "Lithium Battery Repair",
    desc: "Cell-level diagnosis & repair. Restore range, fix voltage drops, balance packs.",
  },
  {
    icon: Zap,
    title: "Ola Battery Specialist",
    desc: "Focused expertise on Ola S1 / S1 Pro packs — BMS resets, error code fixes.",
  },
  {
    icon: Activity,
    title: "Battery Fault Diagnosis",
    desc: "Same-day diagnosis. Pinpoint the exact fault before any spend.",
  },
  {
    icon: Wrench,
    title: "Battery Reconditioning",
    desc: "Bring tired packs back to life. Extend life, save cost of replacement.",
  },
];

const features = [
  { icon: Clock, title: "Fast Service", line: "Same-day diagnosis. Quick turnaround." },
  { icon: Wrench, title: "Expert Technician", line: "Hands-on specialist. Years on Ola packs." },
  { icon: IndianRupee, title: "Affordable Pricing", line: "Transparent quotes. No hidden cost." },
  { icon: Users, title: "Trusted by Customers", line: "Hundreds of riders back on the road." },
];

const testimonials = [
  {
    name: "Rahul S.",
    city: "Delhi",
    quote:
      "My Ola S1 Pro wasn’t holding charge. Diagnosed same day and back on the road in 48 hours. Saved me from a full replacement.",
  },
  {
    name: "Anita M.",
    city: "Gurgaon",
    quote:
      "Clear pricing, no drama. The technician explained the fault, fixed the BMS, and the range is back to normal.",
  },
  {
    name: "Vikram P.",
    city: "Noida",
    quote:
      "Fast, honest service. Tried two places before — only Universal Engineering found the actual cell issue.",
  },
];

export default function Landing() {
  useEffect(() => {
    document.title = "Universal Engineering — Ola Battery Specialist | Call 8178625048";
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Header />

      {/* Urgency strip */}
      <div
        data-testid="urgency-strip"
        className="fixed top-[56px] sm:top-[64px] left-0 right-0 z-30 bg-emerald-500 text-black text-center text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] py-1.5 px-3 border-b border-black/20"
      >
        <span className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-black pulse-dot" />
          Same Day Diagnosis Available · 11 AM – 7 PM
        </span>
      </div>

      {/* HERO */}
      <section
        id="home"
        data-testid="hero-section"
        className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10">
          <img
            src={HERO_BG}
            alt=""
            className="w-full h-full object-cover opacity-40"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-[#0A0A0A]" />
          <div className="absolute inset-0 bg-stripes opacity-60" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center fade-up">
          <div
            data-testid="hero-badge"
            className="inline-flex items-center gap-2 border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] mb-5"
          >
            <MapPin className="w-3.5 h-3.5" /> Pan India · Delhi NCR
          </div>

          <h1
            data-testid="hero-headline"
            className="font-display font-black tracking-tighter text-4xl sm:text-5xl lg:text-7xl leading-[1.02] text-white max-w-4xl mx-auto"
          >
            India’s Trusted <span className="text-emerald-500">Ola Battery</span> Specialist
            <Battery className="inline-block w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 text-emerald-500 ml-2 -mt-2" strokeWidth={2.5} />
          </h1>

          <p
            data-testid="hero-subheadline"
            className="mt-5 text-base sm:text-lg lg:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed"
          >
            Fast, reliable & affordable lithium battery repair. Back on the road — often the same day.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto">
            <a
              data-testid="hero-call-btn"
              href={`tel:${PHONE}`}
              className="group inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-black font-black px-6 sm:px-8 py-4 sm:py-5 rounded-md uppercase tracking-wide text-base sm:text-lg shadow-[0_8px_40px_-8px_rgba(16,185,129,0.6)] transition-all"
            >
              <Phone className="w-5 h-5" strokeWidth={3} />
              Call Now — {PHONE}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" strokeWidth={3} />
            </a>
            <a
              data-testid="hero-whatsapp-btn"
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold px-5 sm:px-6 py-4 sm:py-5 rounded-md uppercase tracking-wide text-sm transition-colors"
            >
              <MessageCircle className="w-5 h-5" strokeWidth={2.5} />
              WhatsApp Us
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-zinc-400">
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Same-day diagnosis</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Transparent pricing</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Ola-pack experts</span>
          </div>

          <a
            data-testid="hero-youtube-btn"
            href={YT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-300 hover:text-red-400 transition-colors group"
          >
            <PlayCircle className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" strokeWidth={2} />
            <span className="underline underline-offset-4 decoration-red-500/40 group-hover:decoration-red-500">
              Watch real battery repairs on YouTube
            </span>
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" data-testid="services-section" className="py-20 sm:py-24 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between gap-6 mb-10 sm:mb-12">
            <div>
              <div className="text-xs font-semibold tracking-[0.25em] text-emerald-500 uppercase mb-2">
                01 — Services
              </div>
              <h2 className="font-display font-black tracking-tight text-3xl sm:text-4xl lg:text-5xl">
                What we repair.
              </h2>
            </div>
            <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent mb-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                data-testid={`service-card-${s.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="group relative bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 sm:p-7 hover:border-emerald-500/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-md bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-colors">
                    <s.icon className="w-6 h-6 text-emerald-500 group-hover:text-black transition-colors" strokeWidth={2.2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-zinc-400 text-sm sm:text-base leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-us" data-testid="why-section" className="py-20 sm:py-24 bg-zinc-950 border-t border-zinc-900 relative">
        <div className="absolute inset-0 bg-stripes opacity-40 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-semibold tracking-[0.25em] text-emerald-500 uppercase mb-2">
              02 — Why Choose Us
            </div>
            <h2 className="font-display font-black tracking-tight text-3xl sm:text-4xl lg:text-5xl">
              Built to get you moving.
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                data-testid={`feature-${f.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-black border border-zinc-800 rounded-xl p-5 sm:p-6 hover:border-emerald-500/60 transition-colors"
              >
                <f.icon className="w-7 h-7 text-emerald-500 mb-4" strokeWidth={2.2} />
                <div className="font-display font-bold text-lg text-white tracking-tight">
                  {f.title}
                </div>
                <div className="text-sm text-zinc-400 mt-1.5 leading-relaxed">{f.line}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST / TESTIMONIALS */}
      <section id="trust" data-testid="trust-section" className="py-20 sm:py-24 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <span data-testid="badge-experienced" className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" /> Experienced Technician
            </span>
            <span data-testid="badge-specialized" className="inline-flex items-center gap-2 bg-white/5 border border-white/15 text-white px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Zap className="w-4 h-4 text-emerald-500" /> Specialized in Ola Batteries
            </span>
            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/15 text-white px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-emerald-500" /> Pan India · Delhi NCR
            </span>
          </div>

          <div className="text-center mb-10">
            <div className="text-xs font-semibold tracking-[0.25em] text-emerald-500 uppercase mb-2">
              03 — Rider Stories
            </div>
            <h2 className="font-display font-black tracking-tight text-3xl sm:text-4xl lg:text-5xl">
              Real riders. Real results.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                data-testid={`testimonial-${i}`}
                className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 hover:border-emerald-500/40 transition-colors flex flex-col"
              >
                <div className="flex gap-0.5 text-emerald-500 mb-3">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-emerald-500" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-zinc-200 text-sm sm:text-base leading-relaxed flex-1">
                  “{t.quote}”
                </p>
                <div className="mt-5 pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <div>
                    <div className="font-display font-bold text-white text-sm">{t.name}</div>
                    <div className="text-xs text-zinc-500">{t.city}</div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT STORE */}
      <section
        id="visit"
        data-testid="visit-section"
        className="py-20 sm:py-24 border-t border-zinc-900 bg-zinc-950/60"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
            {/* Left: address + CTA */}
            <div className="lg:col-span-3 relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-black via-zinc-950 to-black p-7 sm:p-10">
              <div className="absolute inset-0 bg-stripes opacity-40 pointer-events-none" />
              <div className="relative">
                <div className="text-xs font-semibold tracking-[0.25em] text-emerald-500 uppercase mb-3">
                  04 — Visit Our Workshop
                </div>
                <h2 className="font-display font-black tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-tight">
                  Drop in. We'll <span className="text-emerald-500">take a look.</span>
                </h2>
                <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed max-w-md">
                  Bring your scooter for a free inspection. Most diagnoses done on the spot — transparent quote before any work.
                </p>

                <div className="mt-6 flex items-start gap-3 text-zinc-300">
                  <MapPin className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" strokeWidth={2.2} />
                  <div>
                    <div className="font-display font-bold text-white text-base">
                      Universal Engineering Workshop
                    </div>
                    <div className="text-sm text-zinc-400">Delhi NCR · Tap for exact location</div>
                  </div>
                </div>

                <div className="mt-3 flex items-start gap-3 text-zinc-300">
                  <Clock className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" strokeWidth={2.2} />
                  <div className="text-sm">
                    <span className="font-semibold text-white">11 AM – 7 PM</span>
                    <span className="text-zinc-500"> · All days</span>
                  </div>
                </div>

                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <a
                    data-testid="visit-directions-btn"
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-black px-6 py-4 rounded-md uppercase tracking-wide text-sm sm:text-base shadow-[0_10px_40px_-10px_rgba(16,185,129,0.7)] transition-all"
                  >
                    <Navigation className="w-5 h-5" strokeWidth={2.8} />
                    Get Directions
                  </a>
                  <a
                    data-testid="visit-call-btn"
                    href={`tel:${PHONE}`}
                    className="inline-flex items-center justify-center gap-2 border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black font-bold px-6 py-4 rounded-md uppercase tracking-wide text-sm transition-colors"
                  >
                    <Phone className="w-5 h-5" strokeWidth={2.5} />
                    Call Before Visiting
                  </a>
                </div>
              </div>
            </div>

            {/* Right: map preview card */}
            <a
              data-testid="visit-map-card"
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:col-span-2 group relative overflow-hidden rounded-2xl border border-zinc-800 hover:border-emerald-500/60 transition-colors min-h-[240px] lg:min-h-0"
            >
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
                alt="Map location"
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
              <div className="relative h-full flex flex-col justify-between p-6 sm:p-8">
                <div className="inline-flex items-center gap-2 self-start bg-emerald-500 text-black text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-black pulse-dot" />
                  Open on Google Maps
                </div>
                <div>
                  <div className="flex items-center gap-2 text-white font-display font-black text-2xl sm:text-3xl tracking-tight">
                    <Navigation className="w-6 h-6 text-emerald-500" strokeWidth={2.6} />
                    Navigate Now
                  </div>
                  <div className="mt-1 text-xs text-zinc-300 uppercase tracking-[0.18em]">
                    Tap to open directions
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* REPEAT CTA */}
      <section
        id="call"
        data-testid="cta-section"
        className="relative py-20 sm:py-24 border-t border-b border-emerald-500/20 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10">
          <img src={REPAIR_IMG} alt="" className="w-full h-full object-cover opacity-20" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 text-emerald-500 text-xs font-bold uppercase tracking-[0.25em] mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-dot" />
            Call Now for Instant Support
          </div>
          <h2 className="font-display font-black tracking-tighter text-4xl sm:text-5xl lg:text-6xl leading-none">
            Battery trouble?
            <br />
            <span className="text-emerald-500">We pick up on ring 1.</span>
          </h2>
          <a
            data-testid="mid-call-btn"
            href={`tel:${PHONE}`}
            className="mt-8 inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-black font-black px-8 py-5 rounded-md uppercase tracking-wide text-lg sm:text-2xl shadow-[0_10px_50px_-10px_rgba(16,185,129,0.7)] transition-all"
          >
            <Phone className="w-6 h-6" strokeWidth={3} />
            {PHONE_PRETTY}
          </a>
          <div className="mt-4 text-xs sm:text-sm text-zinc-500 uppercase tracking-[0.2em]">
            11 AM – 7 PM · All days
          </div>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer id="contact" data-testid="contact-section" className="py-14 sm:py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-9 h-9 rounded-md bg-emerald-500 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-black" strokeWidth={3} />
                </span>
                <div className="leading-tight">
                  <div className="font-display font-black text-white">UNIVERSAL</div>
                  <div className="text-[10px] tracking-[0.25em] text-emerald-500 font-semibold -mt-0.5">
                    ENGINEERING
                  </div>
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
                India’s trusted Ola scooter lithium battery repair & reconditioning specialist.
              </p>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-500 mb-4">
                Contact
              </div>
              <a
                data-testid="footer-call-btn"
                href={`tel:${PHONE}`}
                className="flex items-center gap-3 text-white hover:text-emerald-500 transition-colors mb-3"
              >
                <Phone className="w-5 h-5 text-emerald-500" strokeWidth={2.5} />
                <span className="font-display font-bold text-xl sm:text-2xl tracking-tight">
                  {PHONE_PRETTY}
                </span>
              </a>
              <a
                data-testid="footer-whatsapp-btn"
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-green-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-green-500" />
                Chat on WhatsApp
              </a>
              <a
                data-testid="footer-youtube-btn"
                href={YT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-red-400 transition-colors"
              >
                <Youtube className="w-5 h-5 text-red-500" />
                Watch on YouTube
              </a>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-500 mb-4">
                Service Area & Hours
              </div>
              <div className="flex items-start gap-3 text-sm text-zinc-300 mb-2">
                <MapPin className="w-4 h-4 text-emerald-500 mt-0.5" />
                Delhi NCR · Pan India support
              </div>
              <div className="flex items-start gap-3 text-sm text-zinc-300">
                <Clock className="w-4 h-4 text-emerald-500 mt-0.5" />
                11 AM – 7 PM · All days
              </div>

              <a
                data-testid="footer-directions-btn"
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-emerald-400 transition-colors"
              >
                <Navigation className="w-4 h-4 text-emerald-500" />
                Get Directions
              </a>

              <a
                data-testid="footer-cta-call"
                href={`tel:${PHONE}`}
                className="mt-5 inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-5 py-3 rounded-md uppercase tracking-wide text-sm transition-colors"
              >
                <Phone className="w-4 h-4" strokeWidth={2.5} />
                Call Now
              </a>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
            <div>© {new Date().getFullYear()} Universal Engineering. All rights reserved.</div>
            <div className="uppercase tracking-[0.2em]">Ola Battery Specialists · India</div>
          </div>
        </div>

        {/* Spacer for sticky mobile bar */}
        <div className="h-16 md:hidden" />
      </footer>

      <StickyMobileCTA />
    </div>
  );
}
