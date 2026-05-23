const sectors = [
  "Offshore",
  "Onshore",
  "Mining",
  "Maritiem",
  "Recycling",
  "Kraanbouw",
  "Machinebouw",
  "Hydrauliek",
];

export default function Sectors() {
  return (
    <section className="border-b border-ash/[8%] bg-carbon py-[160px]">
      <div className="container-brand">
        {/* Head */}
        <div className="mb-20 flex flex-wrap items-end justify-between gap-8">
          <h2
            className="font-display font-medium leading-[1.05] tracking-[-0.025em] text-ash max-w-[20ch]"
            style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
          >
            Werkterrein — acht sectoren
            <br />
            waarin we leveren.
          </h2>
          <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-steel-60">
            — 01 / 08 sectoren
          </span>
        </div>

        {/* Sectors grid — 4 columns, 2 rows */}
        <div
          className="border-l border-t border-ash/[16%]"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}
        >
          {sectors.map((name, i) => (
            <div
              key={name}
              className="group flex cursor-default items-center justify-between gap-4 border-b border-r border-ash/[16%] px-8 py-9 transition-colors duration-200 hover:bg-white/[2.5%]"
            >
              <span
                className="font-display font-medium tracking-[-0.01em] text-ash"
                style={{ fontSize: "clamp(18px, 1.8vw, 24px)" }}
              >
                {name}
              </span>
              <span className="font-mono text-[10px] tracking-[0.18em] text-steel-60">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
