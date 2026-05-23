const steps = [
  {
    n: "01",
    tag: "Dag 1 — 3",
    title: "Inventariseren op locatie",
    desc: "We komen langs, bekijken het probleem in zijn omgeving en stellen vragen die de tekening uiteindelijk bepalen. Geen offerte op afstand, geen verrassingen achteraf.",
    kv: [
      { k: "Doorlooptijd", v: "1 — 3 dagen" },
      { k: "Resultaat", v: "Schets + offerte" },
    ],
  },
  {
    n: "02",
    tag: "Bouwfase",
    title: "Bouwen in eigen werkplaats",
    desc: "Engineering, lassen, assemblage en testen. Eén werkplaats, één team, één planning. Je weet wie aan jouw werk staat en wanneer wat klaar is.",
    kv: [
      { k: "Doorlooptijd", v: "1 — 8 weken" },
      { k: "Status", v: "Wekelijks rapport" },
    ],
  },
  {
    n: "03",
    tag: "Oplevering",
    title: "Installeren & borgen",
    desc: "Installatie op locatie, inbedrijfstelling en operator-instructie. Optioneel: preventief onderhoud op jaarbasis, zodat we de volgende keer niet voor een spoedklus terugkomen.",
    kv: [
      { k: "Installatie", v: "1 — 5 dagen" },
      { k: "Service", v: "Jaarcontract optioneel" },
    ],
  },
];

export default function Method() {
  return (
    <section id="methodiek" className="border-b border-ash/[8%] py-[200px]">
      <div className="container-brand">
        {/* Section meta */}
        <div className="mb-[120px] grid grid-cols-1 items-start gap-7 lg:grid-cols-[1fr_2fr] lg:gap-[120px]">
          <div className="flex flex-col gap-3.5">
            <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-molten">
              05 — Methodiek
            </span>
            <span className="font-mono text-[11px] tracking-[0.18em] text-steel-60">
              — 05 / 06
            </span>
          </div>
          <h2
            className="font-display font-medium leading-[1.0] tracking-[-0.028em] text-ash"
            style={{ fontSize: "clamp(40px, 5.4vw, 88px)" }}
          >
            Van werkbezoek tot
            <br />
            <span className="font-semibold text-molten">draaiende lijn.</span>
          </h2>
        </div>

        {/* 3-column step grid */}
        <div
          className="border border-ash/[16%]"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "rgba(231,230,226,0.16)" }}
        >
          {steps.map((step) => (
            <div
              key={step.n}
              className="flex min-h-[480px] flex-col gap-7 bg-obsidian px-11 py-14 transition-colors duration-300 hover:bg-carbon"
            >
              {/* Top — number + tag */}
              <div className="flex items-start justify-between">
                <span
                  className="font-display font-medium leading-[0.85] tracking-[-0.035em] text-ash"
                  style={{ fontSize: "72px", fontFeatureSettings: '"tnum"' }}
                >
                  {step.n}
                </span>
                <span className="border border-molten px-2.5 py-1.5 font-mono text-[10px] tracking-[0.2em] uppercase text-molten">
                  {step.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-auto font-display font-medium text-[30px] leading-[1.1] tracking-[-0.018em] text-ash">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[14.5px] leading-[1.65] text-steel-30">
                {step.desc}
              </p>

              {/* Key-value pairs */}
              <div className="flex flex-col gap-2 border-t border-ash/[8%] pt-4">
                {step.kv.map(({ k, v }) => (
                  <div
                    key={k}
                    className="flex items-center justify-between font-mono text-[11px] tracking-[0.1em] text-steel-30"
                  >
                    <span>{k}</span>
                    <span className="text-ash">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
