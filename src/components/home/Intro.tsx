import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";

const sidefacts = [
  { k: "Opgericht", v: "1987" },
  { k: "Vestiging", v: "[Plaats] · NL" },
  { k: "Werkplaats", v: "±1.200 m²" },
  { k: "Disciplines", v: "Engineering · Lassen · Staal · Service" },
  { k: "Bereikbaarheid", v: "24/7 · 365 dagen" },
];

export default function Intro() {
  return (
    <section className="border-b border-ash/[8%] py-14 lg:py-[200px]">
      <div className="container-brand">
        {/* Section meta */}
        <div className="mb-10 grid grid-cols-1 items-start gap-7 lg:mb-[120px] lg:grid-cols-[1fr_2fr] lg:gap-[120px]">
          <div className="flex flex-col gap-3.5">
            <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-molten">
              01 — Wie wij zijn
            </span>
            <span className="font-mono text-[11px] tracking-[0.18em] text-steel-60">
              — 01 / 06
            </span>
          </div>
          <h2
            className="font-display font-medium leading-[1.0] tracking-[-0.028em] text-ash"
            style={{ fontSize: "clamp(40px, 5.4vw, 88px)" }}
          >
            Eén werkplaats.
            <br />
            Vier disciplines.
            <br />
            <span className="font-semibold text-molten">Eén aanspreekpunt.</span>
          </h2>
        </div>

        {/* Body — 2 columns */}
        <div className="grid grid-cols-1 items-start gap-16 lg:gap-[120px] lg:grid-cols-[5fr_6fr]">
          {/* Left — body copy */}
          <div>
            <p className="text-[20px] leading-[1.65] text-steel-30 first-letter:float-left first-letter:font-display first-letter:font-semibold first-letter:text-[4.6em] first-letter:leading-[0.9] first-letter:text-molten first-letter:pr-4 first-letter:pt-2">
              Volmer Techniek is een familiebedrijf voor zware industrie. Wat
              begon als een werkplaats voor lassen en staalconstructies, groeide
              uit tot een complete engineering- en serviceorganisatie voor
              offshore, mining, maritiem en machinebouw.
            </p>

            <div className="my-11 border-y border-ash/[16%] py-8">
              <p className="font-display font-medium text-[30px] leading-[1.25] tracking-[-0.01em] text-ash">
                Wij ontwerpen, bouwen en onderhouden alles onder één dak. Geen
                onderaannemers, geen tussenpersonen.
              </p>
            </div>

            <p className="text-[20px] leading-[1.65] text-steel-30">
              De lasser die je werk uitvoert, is dezelfde die je aan de telefoon
              spreekt. Dat houdt de lijnen kort, de besluiten snel en het werk
              consistent — een aanpak die zich in bijna veertig jaar heeft
              bewezen.
            </p>

            {/* Sidefacts */}
            <div className="mt-7 border-t border-ash/[16%]">
              {sidefacts.map(({ k, v }) => (
                <div
                  key={k}
                  className="flex items-baseline justify-between gap-6 border-b border-ash/[8%] py-4"
                >
                  <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-steel-60">
                    {k}
                  </span>
                  <span className="font-mono text-[13px] text-ash">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — photo placeholder */}
          <PhotoPlaceholder
            aspectClass="aspect-[4/5]"
            brief={{
              label: "— FOTO 01 / Hoofdbeeld intro",
              subject:
                "Lasser tijdens TIG-las op stalen frame in eigen werkplaats. Sterk zijlicht, vonken licht op de achtergrond, gezicht in halve schaduw.",
              tech: [
                { key: "Verhouding", value: "4:5 · 1600 × 2000" },
                {
                  key: "Treatment",
                  value: "low saturation · single warm key · lichte film grain",
                },
                { key: "Locatie", value: "werkplaats Volmer Techniek" },
              ],
            }}
          />
        </div>
      </div>
    </section>
  );
}
