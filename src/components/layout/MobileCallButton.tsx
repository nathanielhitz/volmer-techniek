export default function MobileCallButton() {
  return (
    <a
      href="tel:+31000000000"
      aria-label="Bel Volmer Techniek direct"
      className="fixed bottom-5 right-5 z-[150] flex h-[58px] w-[58px] items-center justify-center rounded-full bg-molten shadow-[0_12px_28px_rgba(217,74,31,0.35)] transition-transform duration-300 active:scale-95 md:hidden"
    >
      {/* Phone icon */}
      <svg
        viewBox="0 0 24 24"
        className="h-[22px] w-[22px] fill-obsidian"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M20.487 17.14l-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.289.652c-.018.262-.367 6.46 4.44 11.268C11.566 21.398 16.85 21.5 18 21.5h.005c.146 0 .283-.007.413-.014a1 1 0 0 0 .652-.289l1.86-2.17a1 1 0 0 0-.443-1.887z" />
      </svg>
    </a>
  );
}
