import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <div className="flex items-center gap-3">
        <Image
  src="/images/logo.png"
            alt="Médano Cup"
            width={55}
            height={55}
          />

          <div>
            <h2 className="text-xl font-black text-white">
              MÉDANO CUP
            </h2>

            <p className="text-xs text-yellow-400">
              II EDICIÓN · 2026
            </p>
          </div>
        </div>

        <nav className="hidden gap-8 text-white lg:flex">
          <a href="#">Inicio</a>
          <a href="#">El Torneo</a>
          <a href="#">Categorías</a>
          <a href="#">Galería</a>
          <a href="#">Contacto</a>
        </nav>

        <button className="rounded-xl bg-[#C89B3C] px-5 py-3 font-bold text-black hover:scale-105 transition">
          Inscribir Equipo
        </button>

      </div>
    </header>
  );
}