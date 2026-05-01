import Link from "next/link";

const WA_TRIAL = `https://wa.me/5564993275252?text=${encodeURIComponent("Olá, AlphaPlay! Quero solicitar o teste grátis de 24h.")}`;

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: "url('/alphaplay-tv-online-streaming.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-ap-bg/75" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <span className="text-ap-orange font-bold text-sm">⚡ TESTE GRÁTIS</span>
          <span className="text-white/70 text-xs font-semibold">24 HORAS DISPONÍVEL</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
          <span className="text-ap-orange block">TV Online Completa</span>
          <span className="text-ap-cyan block">na palma da sua mão</span>
        </h1>

        <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-semibold">
          Assista canais, filmes, séries, esportes e muito mais em qualquer dispositivo, a qualquer hora.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#planos"
            className="bg-ap-blue hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-full transition-colors text-lg flex items-center gap-2"
          >
            Ver Planos →
          </Link>
          <a
            href={WA_TRIAL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-full transition-colors text-lg"
          >
            🎁 Teste Grátis 24h
          </a>
        </div>
      </div>
    </section>
  );
}
