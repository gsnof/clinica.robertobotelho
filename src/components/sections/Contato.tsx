import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { CLINIC, openWhatsApp } from "@/lib/site-config";

export function CTA() {
  return (
    <section className="px-5 py-8 sm:px-8">
      <div className="reveal mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-navy px-8 py-20 text-center sm:px-16 lg:py-28">
        <h2 className="mx-auto max-w-3xl text-4xl leading-tight text-primary-foreground sm:text-5xl">
          Está na hora de cuidar do seu sorriso?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/70">
          Agende sua avaliação e descubra uma experiência odontológica pensada para você.
        </p>
        <button
          onClick={openWhatsApp}
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-sand px-8 py-4 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={1.8} />
          Marcar consulta pelo WhatsApp
        </button>
      </div>
    </section>
  );
}

export function Contato() {
  const items = [
    { icon: MapPin, label: "Endereço", value: CLINIC.address },
    { icon: Phone, label: "Telefone", value: CLINIC.phone },
    { icon: MessageCircle, label: "WhatsApp", value: CLINIC.whatsappLabel },
    { icon: Mail, label: "E-mail", value: CLINIC.email },
  ];

  return (
    <section id="contato" className="scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Contato</p>
          <h2 className="mt-5 text-4xl leading-tight text-brand-navy sm:text-5xl">
            Vamos conversar sobre o seu sorriso
          </h2>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="reveal space-y-4">
            {items.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-shadow duration-300 hover:shadow-soft"
              >
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-sand" strokeWidth={1.5} />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {label}
                  </p>
                  <p className="mt-1.5 text-sm font-medium text-brand-navy">{value}</p>
                </div>
              </div>
            ))}

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-sand" strokeWidth={1.5} />
              <div className="w-full">
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Horário de atendimento
                </p>
                <ul className="mt-3 space-y-2">
                  {CLINIC.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4 text-sm">
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className="font-medium text-brand-navy">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="reveal overflow-hidden rounded-[2rem] border border-border shadow-soft">
            <iframe
              title="Localização da Clínica Roberto Botelho no Google Maps"
              src={`https://www.google.com/maps?q=${encodeURIComponent(CLINIC.mapQuery)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full lg:h-full lg:min-h-[520px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
