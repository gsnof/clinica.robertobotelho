interface LogoProps {
  className?: string;
  showText?: boolean;
  inverted?: boolean;
}

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label="Símbolo da Clínica Roberto Botelho">
      <path
        d="M36 8h30a20 20 0 0 1 0 40H56v-14h9a6 6 0 0 0 0-12h-15v62H36z"
        fill="var(--brand-navy)"
      />
      <path d="M55 47h16l19 45H73z" fill="var(--brand-navy)" />
      <path
        d="M62 30H41a22 22 0 0 0 0 44h21V60H42a8 8 0 0 1 0-16h20z"
        fill="var(--brand-sand)"
      />
    </svg>
  );
}

export function Logo({ className = "", showText = true, inverted = false }: LogoProps) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark className="h-10 w-10 shrink-0" />
      {showText && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display text-[15px] tracking-tight ${inverted ? "text-background" : "text-brand-navy"}`}
          >
            Clínica <strong className="font-semibold">Roberto Botelho</strong>
          </span>
          <span
            className={`mt-1 text-[10px] uppercase tracking-[0.22em] ${inverted ? "text-background/60" : "text-brand-sand"}`}
          >
            Odontologia Integrada
          </span>
        </span>
      )}
    </span>
  );
}
