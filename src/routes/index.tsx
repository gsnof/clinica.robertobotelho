import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Hero } from "@/components/sections/Hero";
import { Clinica } from "@/components/sections/Clinica";
import { Especialidades } from "@/components/sections/Especialidades";
import { Equipe } from "@/components/sections/Equipe";
import { Diferenciais } from "@/components/sections/Diferenciais";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { CTA, Contato } from "@/components/sections/Contato";
import { Footer } from "@/components/sections/Footer";
import { useReveal } from "@/hooks/useReveal";

const TITLE = "Clínica Roberto Botelho – Odontologia Integrada";
const DESCRIPTION =
  "Clínica Roberto Botelho – Odontologia Integrada. Atendimento odontológico personalizado, tecnologia e excelência para cuidar do seu sorriso.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          name: "Clínica Roberto Botelho – Odontologia Integrada",
          description: DESCRIPTION,
          medicalSpecialty: "Dentistry",
        }),
      },
    ],
  }),
});

function Index() {
  useReveal();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Clinica />
        <Especialidades />
        <Equipe />
        <Diferenciais />
        <Depoimentos />
        <CTA />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
