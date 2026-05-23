export default function PullQuote() {
  return (
    <section className="border-b border-ash/[8%] py-[200px]">
      <div className="container-brand">
        <div className="max-w-[1100px]">
          {/* Eyebrow */}
          <div className="mb-16 inline-flex items-center gap-3.5 font-mono text-[11px] tracking-[0.2em] uppercase text-steel-60">
            <span className="inline-block h-px w-6 bg-molten flex-shrink-0" aria-hidden="true" />
            Werkwijze
          </div>

          {/* Quote */}
          <blockquote
            className="font-display font-medium leading-[1.14] tracking-[-0.025em] text-ash"
            style={{ fontSize: "clamp(36px, 4.6vw, 72px)" }}
          >
            Wie ons belt, krijgt iemand die het werk{" "}
            <span className="font-semibold text-molten">zelf gedaan heeft.</span>{" "}
            Geen marketing — gewoon de manier waarop ons bedrijf in elkaar zit.
          </blockquote>

          {/* Attribution */}
          <div className="mt-16 flex max-w-[520px] items-center gap-5 border-t border-ash/[16%] pt-7">
            <span className="inline-block h-px w-9 flex-shrink-0 bg-molten" aria-hidden="true" />
            <div className="flex flex-col gap-1">
              <span className="font-display font-medium text-[14px] text-ash">
                Volmer Techniek B.V.
              </span>
              <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-steel-60">
                Werkplaats — sinds 1987
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
