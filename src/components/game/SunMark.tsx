export function SunMark({ className = "size-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <circle cx="32" cy="32" r="10" fill="#F4F8FC" />
      <circle cx="32" cy="32" r="6.5" fill="#74ACDF" />
      {Array.from({ length: 16 }, (_, i) => {
        const a = (i * Math.PI) / 8;
        const inner = 13;
        const outer = i % 2 === 0 ? 22 : 18;
        return (
          <line
            key={i}
            x1={32 + Math.cos(a) * inner}
            y1={32 + Math.sin(a) * inner}
            x2={32 + Math.cos(a) * outer}
            y2={32 + Math.sin(a) * outer}
            stroke="#74ACDF"
            strokeWidth={i % 2 === 0 ? 2.2 : 1.4}
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}
