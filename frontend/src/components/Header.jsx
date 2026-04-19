import { Phone, Zap, Youtube } from "lucide-react";

const PHONE = "8178625048";
const YT = "https://youtube.com/@universalengineering01";

export const Header = () => {
  return (
    <header
      data-testid="site-header"
      className="fixed top-0 w-full z-40 bg-black/85 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" data-testid="brand-logo" className="flex items-center gap-2 group">
          <span className="w-9 h-9 rounded-md bg-emerald-500 flex items-center justify-center shadow-[0_0_20px_rgba(234,179,8,0.35)] group-hover:scale-105 transition-transform">
            <Zap className="w-5 h-5 text-black" strokeWidth={3} fill="#000" />
          </span>
          <div className="leading-tight">
            <div className="font-display font-black text-white text-base sm:text-lg tracking-tight">
              UNIVERSAL
            </div>
            <div className="text-[10px] sm:text-[11px] tracking-[0.25em] text-emerald-500 font-semibold -mt-0.5">
              ENGINEERING
            </div>
          </div>
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            data-testid="header-youtube-btn"
            href={YT}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Universal Engineering on YouTube"
            className="hidden sm:flex items-center justify-center w-10 h-10 rounded-md border border-white/15 text-white/80 hover:text-white hover:border-red-500/60 hover:bg-red-500/10 transition-colors"
          >
            <Youtube className="w-5 h-5" strokeWidth={2} />
          </a>
          <a
            data-testid="header-call-btn"
            href={`tel:${PHONE}`}
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-3 sm:px-5 py-2 sm:py-2.5 rounded-md uppercase tracking-wide text-xs sm:text-sm transition-colors"
          >
            <Phone className="w-4 h-4" strokeWidth={2.5} />
            <span className="hidden sm:inline">Call {PHONE}</span>
            <span className="sm:hidden">Call Now</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
