const items = [
  "VCA Gecertificeerd",
  "ISO 9001",
  "Lid Koninklijke Metaalunie",
  "24/7 Emergency service",
  "Eigen werkplaats",
];

export default function CertStrip() {
  return (
    <div className="overflow-x-auto border-y border-ash/[8%] bg-carbon py-3 md:overflow-visible md:py-6">
      <div className="container-brand flex min-w-max items-center gap-6 md:min-w-0 md:flex-wrap md:justify-between md:gap-8">
        {items.map((item) => (
          <div
            key={item}
            className="flex flex-shrink-0 items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase text-steel-30"
          >
            <span className="inline-block h-[5px] w-[5px] flex-shrink-0 bg-steel-60" aria-hidden="true" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
