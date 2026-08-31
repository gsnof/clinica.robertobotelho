import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { LogoMark } from "../Logo";
import { CLINIC, openWhatsApp } from "@/lib/site-config";

const FOOTER_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "A Clínica", href: "#clinica" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Equipe", href: "#equipe" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="bg-brand-navy-deep text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark className="h-11 w-11" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-base">Clínica Roberto Botelho</span>
                <span className="mt-1.5 text-[10px] uppercase tracking-[0.22em] text-brand-sand">
                  Odontologia Integrada
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/60">
              Odontologia integrada, tecnologia e cuidado para transformar sua experiência
              com o sorriso.
            </p>
          </div>

          <nav aria-label="Links do rodapé">
            <h3 className="text-[11px] uppercase tracking-[0.22em] text-brand-sand">Navegação</h3>
            <ul className="mt-5 space-y-3">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-[11px] uppercase tracking-[0.22em] text-brand-sand">Redes sociais</h3>
            <div className="mt-5 flex gap-3">
              <a
                href={CLINIC.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da clínica"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/15 transition-colors hover:border-brand-sand hover:text-brand-sand"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.6} />
              </a>
              <a
                href={CLINIC.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da clínica"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/15 transition-colors hover:border-brand-sand hover:text-brand-sand"
              >
                <Facebook className="h-4 w-4" strokeWidth={1.6} />
              </a>
              <button
                onClick={openWhatsApp}
                aria-label="WhatsApp da clínica"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/15 transition-colors hover:border-brand-sand hover:text-brand-sand"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.6} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-primary-foreground/10 pt-8 text-xs text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Clínica Roberto Botelho – Odontologia Integrada. Todos os direitos reservados.</p>
          <p>Desenvolvido com cuidado para oferecer uma experiência digital à altura da sua clínica.</p>
        </div>
      </div>
    </footer>
  );
}
