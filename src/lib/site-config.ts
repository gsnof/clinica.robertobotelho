/**
 * Configurações do site — edite tudo por aqui.
 * Campos marcados com [EDITAR] são placeholders a serem substituídos.
 */

/** Número de WhatsApp da clínica no formato internacional, somente dígitos. */
export const WHATSAPP_NUMBER = "553288190907"; // [EDITAR]

export const CLINIC = {
  name: "Clínica Roberto Botelho",
  tagline: "Odontologia Integrada",
  address: "R. Srg. Orlando Randi, 32A - Fábricas", // [EDITAR]
  phone: "(32) 98819-0907", // [EDITAR]
  whatsappLabel: "(32) 98819-0907", // [EDITAR]
  email: "contato@clinicarobertobotelho.com.br", // [EDITAR]
  hours: [
    { day: "Segunda a sexta", time: "08h — 19h" },
    { day: "Sábado", time: "08h — 12h" },
    { day: "Domingo e feriados", time: "Fechado" },
  ],
  /** Endereço usado no mapa. Troque pelo endereço real da clínica. */
  mapQuery: "Clínica Roberto Botelho Odontologia Integrada", // [EDITAR]
  social: {
    instagram: "https://www.instagram.com/clinicarobertobotelho/", // [EDITAR]
    facebook: "https://www.facebook.com/drrobertobotelho/", // [EDITAR]
  },
};

/** Mensagem de WhatsApp conforme o horário local do visitante (verificada no clique). */
export function getGreeting(date = new Date()): string {
  const h = date.getHours();
  if (h >= 5 && h < 12) return "Bom dia!";
  if (h >= 12 && h < 18) return "Boa tarde!";
  return "Boa noite!";
}

export function buildWhatsAppUrl(): string {
  const message = `${getGreeting()} Gostaria de marcar uma consulta na Clínica Roberto Botelho – Odontologia Integrada.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp() {
  window.open(buildWhatsAppUrl(), "_blank", "noopener,noreferrer");
}

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "A Clínica", href: "#clinica" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Nossa Equipe", href: "#equipe" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export const SPECIALTIES = [
  {
    title: "Clínica Geral",
    description:
      "Acompanhamento preventivo, restaurações e cuidado contínuo da saúde bucal.",
  },
  {
    title: "Estética Dental",
    description:
      "Harmonia entre forma, cor e proporção para um sorriso natural e equilibrado.",
  },
  {
    title: "Clareamento Dental",
    description:
      "Protocolos seguros e supervisionados para clarear respeitando o esmalte.",
  },
  {
    title: "Implantes",
    description:
      "Reposição de dentes ausentes com planejamento digital e previsibilidade.",
  },
  {
    title: "Lentes de Contato Dental",
    description:
      "Laminados ultrafinos desenhados individualmente para cada sorriso.",
  },
  {
    title: "Periodontia",
    description: "Saúde da gengiva e dos tecidos que sustentam os seus dentes.",
  },
  {
    title: "Reabilitação Oral",
    description:
      "Devolução da função mastigatória e da estética em casos complexos.",
  },
  {
    title: "Ortodontia",
    description:
      "Alinhamento e correção do sorriso com aparelhos fixos ou alinhadores.",
  },
];

export const TEAM = [
  {
    name: "Nome do profissional",
    role: "Cargo / especialidade",
    bio: "Breve apresentação do profissional.",
    photo: "equipe",
  },
  {
    name: "Nome da profissional",
    role: "Cargo / especialidade",
    bio: "Breve apresentação da profissional.",
    photo: "recepcao",
  },
] as const;

export const DIFFERENTIALS = [
  "Atendimento humanizado",
  "Planejamento personalizado",
  "Tecnologia e inovação",
  "Ambiente confortável",
  "Equipe especializada",
  "Compromisso com resultados",
];

export const JOURNEY = [
  { step: "01", title: "Agendamento", text: "Contato direto e horário escolhido com conforto." },
  { step: "02", title: "Avaliação", text: "Exame clínico detalhado e escuta atenta das suas queixas." },
  { step: "03", title: "Planejamento", text: "Plano de tratamento personalizado, transparente e sem surpresas." },
  { step: "04", title: "Tratamento", text: "Execução criteriosa, com tecnologia e foco no seu conforto." },
  { step: "05", title: "Acompanhamento", text: "Manutenção e cuidado contínuo para resultados duradouros." },
];

export const TESTIMONIALS = [
  { name: "Nome do paciente", text: "Espaço reservado para um depoimento." },
  { name: "Nome do paciente", text: "Espaço reservado para um depoimento." },
  { name: "Nome do paciente", text: "Espaço reservado para um depoimento." },
];
