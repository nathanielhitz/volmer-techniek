interface PhotoBrief {
  label: string;
  subject: string;
  tech?: Array<{ key: string; value: string }>;
}

interface PhotoPlaceholderProps {
  brief: PhotoBrief;
  aspectClass?: string; // e.g. "aspect-[4/5]" or "aspect-video"
  className?: string;
}

export default function PhotoPlaceholder({
  brief,
  aspectClass = "aspect-[4/5]",
  className = "",
}: PhotoPlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden border border-ash/[16%] photo-bg ${aspectClass} ${className}`}
    >
      {/* Corner brackets — four L-shaped corners */}
      <span className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="absolute top-4 left-4 block h-3.5 w-3.5 border-l border-t border-steel-60 opacity-50" />
        <span className="absolute top-4 right-4 block h-3.5 w-3.5 border-r border-t border-steel-60 opacity-50" />
        <span className="absolute bottom-4 left-4 block h-3.5 w-3.5 border-b border-l border-steel-60 opacity-50" />
        <span className="absolute bottom-4 right-4 block h-3.5 w-3.5 border-b border-r border-steel-60 opacity-50" />
      </span>

      {/* Photo brief overlay — design/production reference */}
      <div className="absolute inset-0 flex flex-col justify-end gap-3.5 p-9">
        <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-molten">
          {brief.label}
        </span>
        <span className="font-display font-medium text-lg leading-[1.3] text-ash max-w-[32ch]">
          {brief.subject}
        </span>
        {brief.tech && brief.tech.length > 0 && (
          <div className="mt-2.5 flex flex-col gap-1.5 border-t border-ash/[8%] pt-3.5">
            {brief.tech.map((item) => (
              <span
                key={item.key}
                className="font-mono text-[10px] tracking-[0.16em] uppercase text-steel-60"
              >
                <strong className="text-steel-30 font-medium">{item.key}</strong>{" "}
                {item.value}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
