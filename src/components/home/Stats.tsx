const stats = [
  { value: "38", sup: "jr", label: "In het vak — opgericht 1987" },
  { value: "5.500", sup: "°C", label: "Snijtemperatuur thermische lans" },
  { value: "24/7", sup: null, label: "Emergency response — ook nachten en zondag" },
  { value: "100", sup: "%", label: "In-house engineering, productie en service" },
];

export default function Stats() {
  return (
    <section className="border-b border-ash/[8%] py-[200px]">
      <div className="container-brand">
        {/* Section meta */}
        <div className="mb-[120px] grid grid-cols-1 items-start gap-7 lg:grid-cols-[1fr_2fr] lg:gap-[120px]">
          <div className="flex flex-col gap-3.5">
            <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-molten">
              04 — Feiten, geen claims
            </span>
            <span className="font-mono text-[11px] tracking-[0.18em] text-steel-60">
              — 04 / 06
            </span>
          </div>
          <h2
            className="font-display font-medium leading-[1.0] tracking-[-0.028em] text-ash"
            style={{ fontSize: "clamp(40px, 5.4vw, 88px)" }}
          >
            Wat we doen,
            <br />
            <span className="font-semibold text-molten">laat zich tellen.</span>
          </h2>
        </div>

        {/*
          Asymmetric 12-column editorial grid — from brand reference.
          Stat 1: col 1–4
          Stat 2: col 6–8, offset top
          Stat 3: col 1–4, offset top
          Stat 4: col 7–11, small offset top
        */}
        <div className="grid grid-cols-2 gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Stat 1 */}
          <div className="col-span-2 flex flex-col gap-[18px] border-t border-ash/[16%] pt-7 sm:col-span-1 lg:col-span-4 lg:col-start-1">
            <div
              className="font-display font-medium leading-[0.9] tracking-[-0.04em] text-ash"
              style={{
                fontSize: "clamp(72px, 9vw, 160px)",
                fontFeatureSettings: '"tnum"',
              }}
            >
              {stats[0].value}
              {stats[0].sup && (
                <sup className="font-mono text-molten font-normal ml-3 align-top"
                  style={{ fontSize: "0.18em", letterSpacing: 0, lineHeight: 1 }}>
                  {stats[0].sup}
                </sup>
              )}
            </div>
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-steel-60 max-w-[220px] leading-[1.7]">
              {stats[0].label}
            </div>
          </div>

          {/* Stat 2 */}
          <div className="col-span-2 flex flex-col gap-[18px] border-t border-ash/[16%] pt-7 sm:col-span-1 lg:col-start-6 lg:col-span-3 lg:mt-12">
            <div
              className="font-display font-medium leading-[0.9] tracking-[-0.04em] text-ash"
              style={{
                fontSize: "clamp(72px, 9vw, 160px)",
                fontFeatureSettings: '"tnum"',
              }}
            >
              {stats[1].value}
              {stats[1].sup && (
                <sup className="font-mono text-molten font-normal ml-3 align-top"
                  style={{ fontSize: "0.18em", letterSpacing: 0, lineHeight: 1 }}>
                  {stats[1].sup}
                </sup>
              )}
            </div>
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-steel-60 max-w-[220px] leading-[1.7]">
              {stats[1].label}
            </div>
          </div>

          {/* Stat 3 */}
          <div className="col-span-2 flex flex-col gap-[18px] border-t border-ash/[16%] pt-7 sm:col-span-1 lg:col-start-1 lg:col-span-4 lg:mt-12">
            <div
              className="font-display font-medium leading-[0.9] tracking-[-0.04em] text-ash"
              style={{
                fontSize: "clamp(72px, 9vw, 160px)",
                fontFeatureSettings: '"tnum"',
              }}
            >
              {stats[2].value.split("/").map((part, i) => (
                <span key={i}>
                  {i === 1 ? <span className="text-steel-30">/</span> : null}
                  {part}
                </span>
              ))}
            </div>
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-steel-60 max-w-[220px] leading-[1.7]">
              {stats[2].label}
            </div>
          </div>

          {/* Stat 4 */}
          <div className="col-span-2 flex flex-col gap-[18px] border-t border-ash/[16%] pt-7 sm:col-span-1 lg:col-start-7 lg:col-span-5 lg:mt-6">
            <div
              className="font-display font-medium leading-[0.9] tracking-[-0.04em] text-ash"
              style={{
                fontSize: "clamp(72px, 9vw, 160px)",
                fontFeatureSettings: '"tnum"',
              }}
            >
              {stats[3].value}
              {stats[3].sup && (
                <sup className="font-mono text-molten font-normal ml-3 align-top"
                  style={{ fontSize: "0.18em", letterSpacing: 0, lineHeight: 1 }}>
                  {stats[3].sup}
                </sup>
              )}
            </div>
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-steel-60 max-w-[220px] leading-[1.7]">
              {stats[3].label}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
