import { Check } from "lucide-react";
import { DIFFERENTIALS, JOURNEY } from "@/lib/site-config";

export function Diferenciais() {
  return (
    <section id="diferenciais" className="scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Diferenciais</p>
          <h2 className="mt-5 text-4xl leading-tight text-brand-navy sm:text-5xl">
            Por que escolher a Clínica Roberto Botelho?
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIALS.map((item, i) => (
            <div
              key={item}
              className="reveal flex items-start gap-4 rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand-sand/50 hover:shadow-soft"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-brand-navy">
                <Check className="h-4 w-4" strokeWidth={2} />
              </span>
              <h3 className="text-lg leading-snug text-brand-navy">{item}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-28 max-w-7xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Experiência do paciente</p>
          <h2 className="mt-5 text-4xl leading-tight text-brand-navy sm:text-5xl">
            Como conduzimos o seu tratamento
          </h2>
        </div>

        <ol className="relative mt-14 grid gap-10 md:grid-cols-5 md:gap-6">
          <span
            aria-hidden="true"
            className="absolute left-[19px] top-2 hidden h-[calc(100%-1rem)] w-px bg-border md:left-0 md:top-[19px] md:h-px md:w-full"
          />
          {JOURNEY.map((item, i) => (
            <li
              key={item.step}
              className="reveal relative pl-14 md:pl-0 md:pt-14"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span className="absolute left-0 top-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-sand/50 bg-background text-[11px] font-semibold tracking-wider text-brand-navy">
                {item.step}
              </span>
              <h3 className="text-xl text-brand-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
