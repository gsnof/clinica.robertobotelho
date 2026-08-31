import { HeartHandshake, Cpu, Award, Sparkles } from "lucide-react";
import recepcao from "@/assets/equipe-recepcao.png.asset.json";

const HIGHLIGHTS = [
  { icon: HeartHandshake, label: "Atendimento personalizado" },
  { icon: Cpu, label: "Tecnologia" },
  { icon: Award, label: "Excelência" },
  { icon: Sparkles, label: "Cuidado em cada detalhe" },
];

export function Clinica() {
  return (
    <section id="clinica" className="scroll-mt-24 bg-brand-cream py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="reveal order-2 lg:order-1">
          <div className="overflow-hidden rounded-[2rem] shadow-soft">
            <img
              src={recepcao}
              alt="Ambiente da recepção da Clínica Roberto Botelho com a marca na parede"
              className="h-full w-full object-cover"
              loading="lazy"
              width={426}
              height={284}
            />
          </div>
        </div>

        <div className="reveal order-1 lg:order-2">
          <p className="eyebrow">A Clínica</p>
          <h2 className="mt-5 text-4xl leading-tight text-brand-navy sm:text-5xl">
            Odontologia Integrada com excelência
          </h2>
          <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Na Clínica Roberto Botelho, diferentes especialidades trabalham em conjunto
              para enxergar o paciente por inteiro. Cada plano de tratamento nasce de uma
              avaliação criteriosa e de uma conversa honesta sobre expectativas,
              possibilidades e tempo.
            </p>
            <p>
              Unimos tecnologia, precisão e protocolos rigorosos de segurança a um
              atendimento genuinamente humano — em um ambiente pensado para o seu
              conforto, do primeiro contato ao acompanhamento pós-tratamento.
            </p>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft"
              >
                <Icon className="h-5 w-5 shrink-0 text-brand-sand" strokeWidth={1.5} />
                <span className="text-sm font-medium text-brand-navy">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
