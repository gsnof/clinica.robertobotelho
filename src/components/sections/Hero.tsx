import { ArrowDown, CalendarDays } from "lucide-react";
import { openWhatsApp } from "@/lib/site-config";
import equipe from "@/assets/equipe.png";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 sm:pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-brand-sand-soft/60 blur-3xl"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:pb-28">
        <div className="reveal">
          <p className="eyebrow">Odontologia Integrada</p>
          <h1 className="mt-6 text-[2.6rem] leading-[1.05] text-brand-navy sm:text-6xl lg:text-[4.1rem]">
            Seu sorriso merece um cuidado completo.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Odontologia integrada, tecnologia e cuidado para transformar sua experiência
            com o sorriso.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={openWhatsApp}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-navy px-7 py-4 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-navy-deep hover:shadow-lift"
            >
              <CalendarDays className="h-4 w-4" strokeWidth={1.6} />
              Marcar consulta
            </button>
            <a
              href="#clinica"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-navy/15 px-7 py-4 text-sm font-semibold text-brand-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-sand hover:bg-secondary/60"
            >
              Conheça a clínica
              <ArrowDown className="h-4 w-4" strokeWidth={1.6} />
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["Atendimento", "personalizado"],
              ["Tecnologia", "de ponta"],
              ["Cuidado", "em cada detalhe"],
            ].map(([a, b]) => (
              <div key={a}>
                <dt className="font-display text-lg text-brand-navy">{a}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{b}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal relative">
          <div className="absolute -left-6 -top-6 hidden h-40 w-40 rounded-3xl border border-brand-sand/40 sm:block" />
          <div className="relative overflow-hidden rounded-[2rem] bg-secondary shadow-lift">
            <img
              src={equipe}
              alt="Dentistas da Clínica Roberto Botelho na recepção da clínica"
              className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out hover:scale-[1.03]"
              width={637}
              height={838}
            />
          </div>
          <div className="absolute -bottom-6 left-4 hidden rounded-2xl border border-border bg-card px-6 py-4 shadow-soft sm:block">
            <p className="font-display text-sm text-brand-navy">Clínica Roberto Botelho</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-brand-sand">
              Odontologia Integrada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
