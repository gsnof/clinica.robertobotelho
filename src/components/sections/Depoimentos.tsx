import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site-config";

export function Depoimentos() {
  return (
    <section id="depoimentos" className="scroll-mt-24 bg-brand-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Depoimentos</p>
          <h2 className="mt-5 text-4xl leading-tight text-brand-navy sm:text-5xl">
            Quem confia, recomenda.
          </h2>
          <p className="mt-5 text-sm text-muted-foreground">
            Os cards abaixo são espaços reservados: substitua pelos depoimentos reais dos
            seus pacientes.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="reveal flex h-full flex-col justify-between rounded-2xl border border-dashed border-brand-sand/60 bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <Quote className="h-7 w-7 text-brand-sand" strokeWidth={1.4} />
              <blockquote className="mt-6 text-base leading-relaxed text-muted-foreground">
                {t.text}
              </blockquote>
              <figcaption className="mt-8 border-t border-border pt-5 text-sm font-medium text-brand-navy">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
