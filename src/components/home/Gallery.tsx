import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";

const photos = [
  {
    brief: {
      label: "— FOTO 03 / Werkplaats",
      subject:
        "Wide-shot van de werkplaats bij ochtendlicht. Eén lasser zichtbaar, rest van de hal in halfduister.",
      tech: [
        { key: "Verhouding", value: "3:4 · 1500 × 2000" },
        { key: "Treatment", value: "tegenlicht · vol contrast" },
      ],
    },
    offsetClass: "",
  },
  {
    brief: {
      label: "— FOTO 04 / Detail",
      subject:
        "Macro van een verse lasnaad in staal. Diepe focus, vonken vervaagd op achtergrond. Geen mensen in beeld.",
      tech: [
        { key: "Verhouding", value: "3:4 · 1500 × 2000" },
        { key: "Treatment", value: "warme tonen op staal · low key" },
      ],
    },
    offsetClass: "lg:mt-20",
  },
  {
    brief: {
      label: "— FOTO 05 / Materiaal",
      subject:
        "Stilleven: thermische lans, drukregelaar en slang gerangschikt op een plaat staal. Bovenaanzicht.",
      tech: [
        { key: "Verhouding", value: "3:4 · 1500 × 2000" },
        { key: "Treatment", value: "top-light · matte materialen" },
      ],
    },
    offsetClass: "lg:mt-40",
  },
];

export default function Gallery() {
  return (
    <section id="werkplaats" className="border-b border-ash/[8%] py-[200px]">
      <div className="container-brand">
        {/* Section meta */}
        <div className="mb-[120px] grid grid-cols-1 items-start gap-7 lg:grid-cols-[1fr_2fr] lg:gap-[120px]">
          <div className="flex flex-col gap-3.5">
            <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-molten">
              06 — Werkplaats
            </span>
            <span className="font-mono text-[11px] tracking-[0.18em] text-steel-60">
              — 06 / 06
            </span>
          </div>
          <h2
            className="font-display font-medium leading-[1.0] tracking-[-0.028em] text-ash"
            style={{ fontSize: "clamp(40px, 5.4vw, 88px)" }}
          >
            Daar waar
            <br />
            het werk{" "}
            <span className="font-semibold text-molten">begint.</span>
          </h2>
        </div>

        {/* Staggered 3-column gallery */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-[5fr_4fr_4fr] lg:gap-6 lg:items-start">
          {photos.map((photo, i) => (
            <PhotoPlaceholder
              key={i}
              aspectClass="aspect-[3/4]"
              brief={photo.brief}
              className={photo.offsetClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
