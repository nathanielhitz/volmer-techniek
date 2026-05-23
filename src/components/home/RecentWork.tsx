const projects = [
  {
    date: "03 · 2026",
    sector: "Recycling",
    desc: "Retrofit hydraulische balenpers, inclusief besturing en onderhoudsschema.",
    region: "Zuid-Holland",
  },
  {
    date: "01 · 2026",
    sector: "Maritiem",
    desc: "Spoedlasreparatie aan roerblok, op locatie binnen 24 uur.",
    region: "Rotterdam",
  },
  {
    date: "11 · 2025",
    sector: "Mining",
    desc: "Vervanging tandwielbehuizing en uitlijning aandrijfas.",
    region: "Duitsland",
  },
  {
    date: "09 · 2025",
    sector: "Kraanbouw",
    desc: "Staalconstructie liftframe — ontwerp en productie in eigen werkplaats.",
    region: "Noord-Holland",
  },
  {
    date: "07 · 2025",
    sector: "Offshore",
    desc: "Modernisering hydraulische unit en levering reservedelen.",
    region: "Den Helder",
  },
  {
    date: "04 · 2025",
    sector: "Industrie",
    desc: "Jaarcontract preventief onderhoud — drie productielocaties.",
    region: "Gelderland",
  },
];

export default function RecentWork() {
  return (
    <section className="border-b border-ash/[8%] py-[160px]">
      <div className="container-brand">
        {/* Head */}
        <div className="mb-[60px] flex flex-wrap items-end justify-between gap-8">
          <div>
            <div className="mb-4 inline-flex items-center gap-3.5 font-mono text-[11px] tracking-[0.2em] uppercase text-steel-60">
              <span className="inline-block h-px w-6 bg-molten flex-shrink-0" aria-hidden="true" />
              Recent uitgevoerd
            </div>
            <div
              className="font-display font-medium leading-[1.1] tracking-[-0.02em] text-ash"
              style={{ fontSize: "clamp(28px, 3.4vw, 44px)" }}
            >
              Selectie opdrachten uit de afgelopen twaalf maanden.
            </div>
          </div>
          <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-steel-60">
            — 06 projecten · 2025 — 2026
          </span>
        </div>

        {/* List */}
        <div className="border-t border-ash/[16%]">
          {projects.map((row) => (
            <div
              key={`${row.date}-${row.sector}`}
              className="grid grid-cols-1 items-baseline gap-1.5 border-b border-ash/[8%] py-5 transition-all duration-200 hover:bg-white/[1.2%] hover:pl-3.5 sm:grid-cols-[110px_160px_1fr_180px] sm:gap-8"
            >
              <span className="font-mono text-[12px] tracking-[0.05em] text-steel-30">
                {row.date}
              </span>
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-molten">
                {row.sector}
              </span>
              <span className="text-[15px] text-ash">{row.desc}</span>
              <span className="font-mono text-[12px] tracking-[0.08em] text-steel-30 text-right">
                {row.region}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
