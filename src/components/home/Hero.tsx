import Link from "next/link";

export default function Hero() {
  return (
    <header
      className="relative flex min-h-screen flex-col justify-end overflow-hidden isolate px-6 pb-20 pt-[140px] md:px-20"
      style={{ padding: "140px 5rem 80px" }}
    >
      {/* ── Background stage — placeholder for real workshop photograph/video ── */}
      <div className="absolute inset-0 -z-[2] overflow-hidden" aria-hidden="true">
        <div
          className="absolute inset-[-8%]"
          style={{
            background: `
              radial-gradient(ellipse 55% 40% at 76% 64%, rgba(217,74,31,0.32) 0%, rgba(122,31,10,0.16) 30%, transparent 62%),
              radial-gradient(ellipse 40% 28% at 28% 86%, rgba(122,31,10,0.22) 0%, transparent 55%),
              linear-gradient(155deg, #0a0a0b 0%, #11090a 45%, #0a0a0b 100%)
            `,
            filter: "saturate(0.85)",
          }}
        />
      </div>

      {/* Gradient floor — legibility */}
      <div
        className="absolute inset-x-0 bottom-0 -z-[1] h-[55%]"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(10,10,11,0.65) 55%, #0a0a0b 100%)",
        }}
        aria-hidden="true"
      />

      {/* Hero eyebrow — top-left */}
      <div className="absolute top-[124px] left-[5rem] hidden items-center gap-3.5 font-mono text-[11px] tracking-[0.2em] uppercase text-steel-30 lg:flex">
        <span className="inline-block h-px w-6 bg-molten flex-shrink-0" aria-hidden="true" />
        <strong className="text-ash font-medium">Volmer Techniek B.V.</strong>
        &nbsp;·&nbsp; sinds 1987
      </div>

      {/* ── Hero content ── */}
      <div className="container-brand relative z-[5] grid grid-cols-1 items-end gap-16 lg:grid-cols-[7fr_4fr]">
        {/* Left — display headline */}
        <h1
          className="font-display font-medium text-ash leading-[0.96] tracking-[-0.035em]"
          style={{ fontSize: "clamp(54px, 8.6vw, 144px)" }}
        >
          Maatwerk machinebouw.
          <span className="mt-2 block text-steel-30 font-normal">
            Lassen, staal en service.
          </span>
        </h1>

        {/* Right — lede + CTAs */}
        <div className="flex flex-col gap-9 pb-3.5">
          <p className="text-[17px] leading-[1.6] text-steel-30 max-w-[360px]">
            Wij ontwerpen, bouwen, repareren en onderhouden voor zware industrie.
            In-house engineering, eigen werkplaats, één aanspreekpunt — van eerste
            schets tot draaiende lijn.
          </p>

          <div className="flex flex-col gap-4">
            {/* Primary CTA */}
            <Link
              href="#diensten"
              className="group inline-flex max-w-[360px] items-center justify-between border border-ash bg-transparent px-6 py-5 text-[13px] tracking-[0.12em] uppercase text-ash font-medium transition-all duration-[280ms] ease-[cubic-bezier(.2,.7,.2,1)] hover:bg-ash hover:text-obsidian"
            >
              <span>Bekijk wat we doen</span>
              <span className="transition-transform duration-[280ms] group-hover:translate-x-1.5">
                →
              </span>
            </Link>

            {/* Ghost CTA */}
            <Link
              href="#contact"
              className="group inline-flex items-center gap-3.5 font-mono text-[12px] tracking-[0.14em] uppercase text-ash"
            >
              <span className="inline-block h-px w-7 bg-molten transition-[width] duration-[280ms] group-hover:w-11" aria-hidden="true" />
              Plan een werkbezoek
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
