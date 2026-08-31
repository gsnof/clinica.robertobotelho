import {
  Stethoscope,
  Sparkles,
  Sun,
  Anchor,
  Gem,
  ShieldPlus,
  Layers,
  AlignHorizontalDistributeCenter,
} from "lucide-react";
import { SPECIALTIES } from "@/lib/site-config";

const ICONS = [
  Stethoscope,
  Sparkles,
  Sun,
  Anchor,
  Gem,
  ShieldPlus,
  Layers,
  AlignHorizontalDistributeCenter,
];

export function Especialidades() {
  return (
    <section id="especialidades" className="scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Especialidades</p>
          <h2 className="mt-5 text-4xl leading-tight text-brand-navy sm:text-5xl">
            Um cuidado para cada necessidade do seu sorriso
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SPECIALTIES.map((item, i) => {
            const Icon = ICONS[i % ICONS.length]!;
            return (
              <article
                key={item.title}
                className="reveal group rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-sand/50 hover:shadow-lift"
                style={{ transitionDelay: `${(i % 4) * 70}ms` }}
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-brand-navy transition-colors duration-300 group-hover:bg-brand-navy group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 text-xl text-brand-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
