import { Phone, MessageCircle } from "lucide-react";

const PHONE = "8178625048";
const WA = "https://wa.me/918178625048?text=Hi%2C%20I%20need%20help%20with%20my%20Ola%20battery";

export const StickyMobileCTA = () => {
  return (
    <div
      data-testid="sticky-mobile-cta"
      className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 gap-2 p-2 bg-black/95 backdrop-blur-md border-t border-zinc-800 md:hidden"
    >
      <a
        data-testid="sticky-call-btn"
        href={`tel:${PHONE}`}
        className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-md uppercase tracking-wide text-sm transition-colors"
      >
        <Phone className="w-4 h-4" strokeWidth={2.5} />
        Call Now
      </a>
      <a
        data-testid="sticky-whatsapp-btn"
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold py-3 rounded-md uppercase tracking-wide text-sm transition-colors"
      >
        <MessageCircle className="w-4 h-4" strokeWidth={2.5} />
        WhatsApp
      </a>
    </div>
  );
};

export default StickyMobileCTA;
