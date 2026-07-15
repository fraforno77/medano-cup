import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      <Image
        src="/images/hero.jpg"
        alt="Playa de El Médano"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl md:text-8xl font-extrabold text-white">
          MÉDANO CUP
        </h1>

        <p className="mt-6 text-2xl text-white">
          II EDICIÓN · 2026
        </p>
      </div>
    </section>
  );
}