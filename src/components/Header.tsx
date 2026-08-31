import { useEffect, useState } from "react";
import { Menu, X, CalendarDays } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS, openWhatsApp } from "@/lib/site-config";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-background/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" aria-label="Clínica Roberto Botelho — Início">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[13px] font-medium text-muted-foreground transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-brand-sand after:transition-all after:duration-300 hover:text-brand-navy hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={openWhatsApp}
            className="hidden items-center gap-2 rounded-full bg-brand-navy px-5 py-3 text-[13px] font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-navy-deep hover:shadow-lift sm:inline-flex"
          >
            <CalendarDays className="h-4 w-4" strokeWidth={1.6} />
            Marcar consulta
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-brand-navy transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-border bg-background transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-[36rem]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-6" aria-label="Navegação mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3.5 text-base font-medium text-brand-navy transition-colors hover:bg-secondary"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              openWhatsApp();
            }}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-brand-navy px-6 py-4 text-base font-semibold text-primary-foreground"
          >
            <CalendarDays className="h-4 w-4" strokeWidth={1.6} />
            Marcar consulta
          </button>
        </nav>
      </div>
    </header>
  );
}
