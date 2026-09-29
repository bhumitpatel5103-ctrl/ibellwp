import clsx from "clsx";

/** A mobile phone on the brand gradient, and the business name. */
export function Logo({ name, compact, className, onDark }: { name?: string; compact?: boolean; className?: string; onDark?: boolean }) {
  return (
    <div className={clsx("flex items-center gap-2.5", className)}>
      <span className="bg-brand-gradient glow-brand flex size-9 items-center justify-center rounded-xl text-white">
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeLinejoin="round" aria-hidden>
          <rect x="7" y="2.5" width="10" height="19" rx="2.2" strokeWidth="1.7" />
          <path d="M10.5 5h3M11 18.5h2" strokeWidth="1.4" strokeLinecap="round" opacity=".75" />
        </svg>
      </span>
      <div className="min-w-0 leading-tight">
        <div className={clsx("truncate font-display font-extrabold tracking-tight", onDark ? "text-white" : "text-ink", compact ? "text-[17px]" : "text-[18px]")}>{name || "IBELL MOBILE"}</div>
        {!compact && <div className={clsx("text-[10.5px] font-semibold uppercase tracking-[0.16em]", onDark ? "text-violet-200/80" : "text-brand-text")}>WhatsApp Studio</div>}
      </div>
    </div>
  );
}
