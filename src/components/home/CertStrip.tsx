const items = [
  "VCA Gecertificeerd",
  "ISO 9001",
  "Lid Koninklijke Metaalunie",
  "24/7 Emergency service",
  "Eigen werkplaats",
];

export default function CertStrip() {
  return (
    <div className="border-y border-ash/[8%] bg-carbon py-6">
      <div className="container-brand flex flex-wrap items-center justify-between gap-8">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase text-steel-30"
          >
            <span className="inline-block h-[5px] w-[5px] flex-shrink-0 bg-steel-60" aria-hidden="true" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
