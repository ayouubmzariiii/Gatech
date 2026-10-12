/** Brand mark: a white keyhole (access, security) in a red cut-corner tile. Same drawing as src/app/icon.svg. */
export function LogoMark({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <path d="M0 0h25l7 7v25H7l-7-7Z" fill="#d3121b" />
      <circle cx="16" cy="13.2" r="4.8" fill="#fff" />
      <path d="M13.8 16.2 12.4 24.6h7.2l-1.4-8.4Z" fill="#fff" />
    </svg>
  );
}

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex items-center gap-2.5" dir="ltr">
      <LogoMark />
      <span className={`font-display text-[1.6rem] leading-none font-bold tracking-tight uppercase ${inverted ? "text-white" : "text-ink"}`}>
        GA<span className="text-red">Tech</span>
      </span>
    </span>
  );
}
