import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ash/[16%] bg-carbon pt-[120px] pb-10">
      <div className="container-brand">
        <div className="grid grid-cols-1 gap-12 pb-[88px] border-b border-ash/[8%] sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-16">
          {/* Brand signoff */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 font-display font-semibold text-[28px] tracking-[-0.015em] text-ash">
              Volmer<span className="text-molten">.</span>Techniek
            </div>
            <p className="max-w-sm text-sm leading-[1.65] text-steel-30">
              Maatwerk machinebouw, lassen, staalconstructies en thermische
              lansen. Eén ploeg, één werkplaats, één aanspreekpunt — sinds 1987.
            </p>
            <div className="mt-2.5 flex flex-col gap-1.5 font-mono text-[11px] tracking-[0.12em] uppercase text-steel-60">
              <span>
                <strong className="text-steel-30 font-medium">
                  Volmer Techniek B.V.
                </strong>
              </span>
              <span>[Straatnaam] 00 · [Postcode] [Plaats]</span>
              <span>KvK [00000000] · BTW [NL000000000B00]</span>
            </div>
          </div>

          {/* Diensten */}
          <div>
            <h4 className="mb-5 font-mono text-[11px] tracking-[0.22em] uppercase text-molten">
              Diensten
            </h4>
            <nav className="flex flex-col">
              {[
                "Service & lassen",
                "Thermische lansen",
                "Custom machinebouw",
                "Onderhoud & retrofit",
              ].map((label) => (
                <Link
                  key={label}
                  href="#"
                  className="py-1.5 text-sm text-ash opacity-80 transition-all duration-200 hover:opacity-100 hover:text-molten hover:pl-1.5"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Bedrijf */}
          <div>
            <h4 className="mb-5 font-mono text-[11px] tracking-[0.22em] uppercase text-molten">
              Bedrijf
            </h4>
            <nav className="flex flex-col">
              {["Over ons", "Werkplaats", "Werk & cases", "Vacatures"].map(
                (label) => (
                  <Link
                    key={label}
                    href="#"
                    className="py-1.5 text-sm text-ash opacity-80 transition-all duration-200 hover:opacity-100 hover:text-molten hover:pl-1.5"
                  >
                    {label}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 font-mono text-[11px] tracking-[0.22em] uppercase text-molten">
              Contact
            </h4>
            <nav className="flex flex-col">
              {[
                { label: "+31 (0)00 — 000 0000", href: "tel:+31000000000" },
                {
                  label: "info@volmertechniek.com",
                  href: "mailto:info@volmertechniek.com",
                },
                { label: "LinkedIn", href: "#" },
                { label: "Algemene voorwaarden", href: "#" },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="py-1.5 text-sm text-ash opacity-80 transition-all duration-200 hover:opacity-100 hover:text-molten hover:pl-1.5"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-steel-60">
            © Volmer Techniek B.V. — 1987 — {new Date().getFullYear()}
          </span>
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-steel-60">
            VCA · ISO 9001 · Metaalunie
          </span>
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-steel-60">
            NL · EN
          </span>
        </div>
      </div>
    </footer>
  );
}
