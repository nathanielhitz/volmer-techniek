import Link from "next/link";

const channels = [
  {
    k: "Telefoon",
    v: "+31 (0)00 — 000 0000",
    href: "tel:+31000000000",
    mono: true,
    accent: false,
  },
  {
    k: "E-mail",
    v: "info@volmertechniek.com",
    href: "mailto:info@volmertechniek.com",
    mono: false,
    accent: false,
  },
  {
    k: "Werkbezoek",
    v: "Plan een rondleiding →",
    href: "#",
    mono: false,
    accent: false,
  },
  {
    k: "Spoed 24/7",
    v: "06 — 00 00 00 00",
    href: "tel:+31600000000",
    mono: true,
    accent: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-[200px]"
    >
      {/* Subtle molten glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 80% 50%, rgba(217,74,31,0.10), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="container-brand">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-[7fr_5fr] lg:gap-24">
          {/* Left — headline */}
          <div>
            <div className="mb-7 inline-flex items-center gap-3.5 font-mono text-[11px] tracking-[0.2em] uppercase text-steel-60">
              <span className="inline-block h-px w-6 bg-molten flex-shrink-0" aria-hidden="true" />
              Hoe je ons bereikt
            </div>
            <h2
              className="font-display font-medium leading-[0.96] tracking-[-0.035em] text-ash"
              style={{ fontSize: "clamp(48px, 7vw, 120px)" }}
            >
              Bel ons. Of{" "}
              <span className="font-semibold text-molten">kom langs.</span>
            </h2>
          </div>

          {/* Right — lede + channels */}
          <div>
            <p className="mb-12 text-[17px] leading-[1.65] text-steel-30 max-w-[420px]">
              De snelste route loopt via een telefoongesprek. Liever fysiek? Plan
              een werkbezoek — we zetten koffie en lopen samen door de werkplaats.
            </p>

            {/* Contact channels */}
            <div className="border-t border-ash/[16%]">
              {channels.map(({ k, v, href, mono, accent }) => (
                <Link
                  key={k}
                  href={href}
                  className="group flex items-center justify-between gap-4 border-b border-ash/[8%] py-6 transition-all duration-300 hover:pl-3"
                >
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-steel-60 whitespace-nowrap">
                    {k}
                  </span>
                  <span
                    className={`transition-colors duration-200 group-hover:text-molten ${
                      accent ? "text-molten" : "text-ash"
                    } ${
                      mono
                        ? "font-mono text-[16px] font-normal"
                        : "font-display font-medium text-[24px] tracking-[-0.01em]"
                    }`}
                  >
                    {v}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
