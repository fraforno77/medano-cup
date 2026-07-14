export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{
       backgroundImage:
  "linear-gradient(rgba(25,20,20,.75), rgba(25,20,20,.75)), url('/images/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center px-6 max-w-4xl">

        <span className="inline-block mb-6 rounded-full bg-yellow-500 px-5 py-2 text-sm font-bold uppercase tracking-widest text-black">
          II Edición · 2026
        </span>

        <h1 className="text-6xl md:text-8xl font-extrabold uppercase tracking-tight">
          MÉDANO CUP
        </h1>

        <p className="mt-6 text-2xl md:text-3xl text-gray-200">
          Más que un torneo,
          <br />
          <span className="text-yellow-400 font-bold">
            una experiencia.
          </span>
        </p>

        <div className="mt-8 text-lg text-white/80">
          📍 El Médano · Tenerife
        </div>

        <div className="mt-3 text-yellow-400 font-semibold text-xl">
          29 · 30 Agosto &nbsp;|&nbsp; 5 · 12 Septiembre
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-center gap-5">

          <button className="rounded-xl bg-yellow-500 px-8 py-4 font-bold text-black transition hover:scale-105 hover:bg-yellow-400">
            INSCRIBIR MI CLUB
          </button>

          <button className="rounded-xl border border-white px-8 py-4 transition hover:bg-white hover:text-black">
            DESCUBRIR EL TORNEO
          </button>

        </div>

      </div>
    </section>
  );
}