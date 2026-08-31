export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="sosyncSolar" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFA024" />
          <stop offset="100%" stopColor="#FF6A00" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="16" fill="#1A1F2C" />
      <path
        d="M22 40c3.6 3.4 9.2 3.6 12.6.4 3.4-3.2 3.2-8.4-.4-11.4-3-2.5-8.4-2-11-.2-3.6 2.5-4.2 7.6-1 10.8"
        fill="none"
        stroke="url(#sosyncSolar)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="43" cy="22" r="5" fill="url(#sosyncSolar)" />
      <circle cx="43" cy="22" r="9.5" fill="none" stroke="rgba(6,182,212,0.6)" strokeWidth="1.6" />
    </svg>
  );
}

export function LogoLockup({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <Logo className="h-9 w-9" />
      <span className="leading-none">
        <span
          className={`block text-base font-bold tracking-tight ${light ? "text-carbon-foreground" : "text-charcoal"}`}
        >
          SOSync <span className="text-gradient-solar">AI Tech</span>
        </span>
        <span
          className={`mt-1 block text-[10px] font-medium uppercase tracking-[0.18em] ${light ? "text-carbon-foreground/60" : "text-muted-foreground"}`}
        >
          IT Solutions
        </span>
      </span>
    </span>
  );
}
