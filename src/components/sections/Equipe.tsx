import { TEAM } from "@/lib/site-config";
import equipe from "@/assets/equipe.png";
import recepcao from "@/assets/equipe-recepcao.png";

const PHOTOS: Record<string, { url: string; alt: string }> = {
  equipe: {
    url: equipe,
    alt: "Profissional da Clínica Roberto Botelho",
  },
  recepcao: {
    url: recepcao,
    alt: "Profissionais da Clínica Roberto Botelho na recepção",
  },
};

export function Equipe() {
  return (
    <section id="equipe" className="scroll-mt-24 bg-brand-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Nossa Equipe</p>
          <h2 className="mt-5 text-4xl leading-tight text-brand-navy sm:text-5xl">
            Profissionais dedicados a cada detalhe
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {TEAM.map((member, i) => {
            const photo = PHOTOS[member.photo] ?? PHOTOS["equipe"]!;
            return (
              <article
                key={i}
                className="reveal group overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl text-brand-navy">{member.name}</h3>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-brand-sand">
                    {member.role}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
