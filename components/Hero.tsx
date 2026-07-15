export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: "url('/images/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: "5rem",
          fontWeight: "bold",
          textShadow: "0 4px 10px rgba(0,0,0,.6)",
        }}
      >
        MÉDANO CUP
      </h1>
    </section>
  );
}