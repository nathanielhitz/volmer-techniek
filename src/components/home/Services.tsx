import Link from "next/link";

const services = [
  {
    id: "01 — SERVICE",
    name: "Lassen & staalconstructies",
    sub: "Van spoedreparatie tot draagconstructie",
    href: "#",
    description:
      "MIG/MAG, TIG, elektrode en gouching — in staal, RVS en aluminium. Frames, trappen, leuningen, platformen en complete draagconstructies. Nieuwbouw in eigen werkplaats of reparatie op locatie.",
    specs: ["MIG/MAG", "TIG", "Elektrode", "Gouching", "VCA"],
  },
  {
    id: "02 — SALES",
    name: "Thermische lansen",
    sub: "5.500 °C · koop & huur · inclusief training",
    href: "#",
    description:
      "Snijdt door beton, gietijzer, gewapend staal en pantserplaat. Geen stroom of brandstof — alleen zuurstof. Voor sloop, recycling, bergingen en zware industrie. Demonstraties op locatie.",
    specs: ['1/4"', '3/8"', '1/2"', "3 m lengte", "Operator-training"],
  },
  {
    id: "03 — CUSTOM",
    name: "Maatwerk machinebouw",
    sub: "Concept · engineering · productie · installatie",
    href: "#",
    description:
      "Wij bouwen geen catalogusproducten. Ontwerpen en bouwen die passen bij jouw materiaalstroom, productieritme en plaatselijke condities — van eerste schets tot inbedrijfstelling op de werkvloer.",
    specs: ["2D / 3D ontwerp", "Engineering", "Productie", "Installatie"],
  },
  {
    id: "04 — ONDERHOUD",
    name: "Modernisering & retrofit",
    sub: "Preventief onderhoud · hydraulisch persen · retrofit",
    href: "#",
    description:
      "Hydraulisch persen van bussen en pennen, demontage en assemblage van zware componenten, retrofit van bestaande lijnen. Werk dat downtime voorkomt voordat hij begint.",
    specs: ["Hydraulisch persen", "Retrofit", "Preventief", "24/7 spoed"],
  },
];

export default function Services() {
  return (
    <section id="diensten" className="border-b border-ash/[8%] py-[200px]">
      <div className="container-brand">
        {/* Section meta */}
        <div className="mb-[120px] grid grid-cols-1 items-start gap-7 lg:grid-cols-[1fr_2fr] lg:gap-[120px]">
          <div className="flex flex-col gap-3.5">
            <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-molten">
              02 — Diensten
            </span>
            <span className="font-mono text-[11px] tracking-[0.18em] text-steel-60">
              — 02 / 06
            </span>
          </div>
          <h2
            className="font-display font-medium leading-[1.0] tracking-[-0.028em] text-ash"
            style={{ fontSize: "clamp(40px, 5.4vw, 88px)" }}
          >
            Vakwerk dat de
            <br />
            <span className="font-semibold text-molten">productielijn</span>
            <br />
            draaiende houdt.
          </h2>
        </div>

        {/* Services — horizontal table rows */}
        <div className="flex flex-col">
          {services.map((srv) => (
            <Link
              key={srv.id}
              href={srv.href}
              className="group grid grid-cols-1 items-start gap-5 border-t border-ash/[16%] py-12 transition-colors duration-[350ms] last:border-b last:border-ash/[16%] hover:bg-white/[1.2%] lg:grid-cols-[80px_4fr_5fr_auto] lg:gap-12 lg:py-12"
            >
              {/* Number */}
              <div className="font-mono text-[12px] tracking-[0.18em] text-molten pt-0 lg:pt-2">
                {srv.id}
              </div>

              {/* Name */}
              <div
                className="font-display font-medium leading-[1.05] tracking-[-0.022em] text-ash"
                style={{ fontSize: "clamp(28px, 3vw, 48px)" }}
              >
                {srv.name}
                <span className="mt-3.5 block font-sans font-normal text-steel-30 text-[0.4em] leading-[1.5] tracking-normal">
                  {srv.sub}
                </span>
              </div>

              {/* Description + specs */}
              <div className="text-[15px] leading-[1.65] text-steel-30">
                {srv.description}
                <div className="mt-5 flex flex-wrap gap-2">
                  {srv.specs.map((spec) => (
                    <span
                      key={spec}
                      className="border border-ash/[16%] px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] uppercase text-steel-30"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* More link */}
              <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase text-ash transition-colors duration-200 group-hover:text-molten pt-0 lg:pt-3.5 whitespace-nowrap">
                <span className="inline-block h-px w-5 bg-steel-60 transition-all duration-[280ms] group-hover:w-9 group-hover:bg-molten" aria-hidden="true" />
                Bekijk
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
