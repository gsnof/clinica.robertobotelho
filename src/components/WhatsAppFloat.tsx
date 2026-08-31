import { openWhatsApp } from "@/lib/site-config";

export function WhatsAppFloat() {
  return (
    <button
      onClick={openWhatsApp}
      aria-label="Falar no WhatsApp com a Clínica Roberto Botelho"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-navy text-primary-foreground shadow-lift transition-transform duration-300 hover:-translate-y-1 sm:h-16 sm:w-16"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.09c-.24.68-1.4 1.3-1.94 1.35-.5.05-1.13.07-1.82-.11-.42-.11-.96-.29-1.65-.59-2.9-1.25-4.8-4.17-4.94-4.36-.15-.19-1.19-1.58-1.19-3.02s.76-2.14 1.03-2.44c.27-.3.58-.37.78-.37.19 0 .39 0 .56.01.18.01.42-.7.8.61.39.94 1.34 3.26 1.46 3.5.12.24.2.51.04.81-.15.3-.23.49-.45.75-.22.26-.47.58-.67.78-.22.22-.45.46-.19.9.26.44 1.15 1.9 2.47 3.08 1.7 1.51 3.13 1.98 3.57 2.2.44.22.7.19.96-.11.26-.3 1.11-1.29 1.4-1.74.3-.44.59-.37.99-.22.4.15 2.54 1.2 2.98 1.42.44.22.73.33.84.51.11.19.11 1.06-.13 1.74Z" />
      </svg>
    </button>
  );
}
