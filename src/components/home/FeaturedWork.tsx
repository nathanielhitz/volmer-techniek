import Link from "next/link";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";

const specs = [
  { k: "Sector", v: "Recycling" },
  { k: "Doorlooptijd", v: "10 werkdagen" },
  { k: "Inzet", v: "4 monteurs" },
  { k: "Status", v: "In productie" },
];

export default function FeaturedWork() {
  return (
    <section id="werk" className="border-b border-ash/[8%] py-[200px]">
      <div className="container-brand">
        {/* Section meta */}
        <div className="mb-[120px] grid grid-cols-1 items-start gap-7 lg:grid-cols-[1fr_2fr] lg:gap-[120px]">
          <div className="flex flex-col gap-3.5">
            <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-molten">
              03 — Uitgelicht werk
            </span>
            <span className="font-mono text-[11px] tracking-[0.18em] text-steel-60">
              — 03 / 06
            </span>
          </div>
          <h2
            className="font-display font-medium leading-[1.0] tracking-[-0.028em] text-ash"
            style={{ fontSize: "clamp(40px, 5.4vw, 88px)" }}
          >
            Tien werkdagen.
            <br />
            Eén lijn weer
            <br />
            <span className="font-semibold text-molten">in productie.</span>
          </h2>
        </div>

        {/* Body — 8/5 grid */}
        <div className="grid grid-cols-1 items-end gap-20 lg:grid-cols-[8fr_5fr] lg:gap-20">
          {/* Photo */}
          <PhotoPlaceholder
            aspectClass="aspect-[4/5]"
            brief={{
              label: "— FOTO 02 / Case",
              subject:
                "Hydraulische balenpers tijdens demontage. Wide shot, monteur op de voorgrond, machineromp links uitgelicht.",
              tech: [
                { key: "Verhouding", value: "4:5 · 2000 × 2500" },
                { key: "Treatment", value: "high contrast · cool key + warm bounce" },
                { key: "Locatie", value: "recyclingbedrijf opdrachtgever" },
              ],
            }}
          />

          {/* Info */}
          <div>
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-molten">
              CASE — RECYCLING · Q1 2026
            </span>

            <h3
              className="mt-4 mb-7 font-display font-medium leading-[1.06] tracking-[-0.025em] text-ash"
              style={{ fontSize: "clamp(30px, 3.4vw, 56px)" }}
            >
              Renovatie hydraulische{" "}
              <span className="text-molten font-semibold">balenpers</span>
            </h3>

            <p className="text-[17px] leading-[1.65] text-steel-30 max-w-[480px] mb-12">
              Een balenpers viel buiten bedrijf op een vrijdagmiddag. Wij waren
              maandag op locatie, hebben de cilindergroep gedemonteerd,
              drukleidingen hersteld en het systeem opnieuw opgebouwd —
              inclusief een retrofit van de besturing en een onderhoudsschema
              voor het komende jaar.
            </p>

            {/* Specs table */}
            <div className="grid grid-cols-2 border-t border-ash/[16%]">
              {specs.map(({ k, v }, i) => (
                <div
                  key={k}
                  className={`flex flex-col gap-2 border-b border-ash/[8%] py-5 ${
                    i % 2 === 1 ? "border-l border-ash/[8%] pl-6" : ""
                  }`}
                >
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-steel-60">
                    {k}
                  </span>
                  <span className="font-mono text-[13px] font-medium text-ash">
                    {v}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="#"
              className="group mt-12 inline-flex max-w-[360px] items-center justify-between border border-ash bg-transparent px-6 py-5 text-[13px] tracking-[0.12em] uppercase text-ash font-medium transition-all duration-[280ms] hover:bg-ash hover:text-obsidian"
            >
              <span>Lees de case</span>
              <span className="transition-transform duration-[280ms] group-hover:translate-x-1.5">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
