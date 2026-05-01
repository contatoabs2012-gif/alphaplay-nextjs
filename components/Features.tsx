const features = [
  {
    icon: "📺",
    title: "2 Telas Simultâneas",
    desc: "Uma tela fixa (TV Box/Fire) e uma móvel (celular/tablet) no mesmo plano.",
  },
  {
    icon: "⏮️",
    title: "Função Playback",
    desc: "Perdeu algum programa? Assista de onde parou com o playback disponível em todos os canais.",
  },
  {
    icon: "🏆",
    title: "Esportes ao Vivo",
    desc: "Transmissões exclusivas de futebol, UFC, F1 e muito mais em alta qualidade.",
  },
  {
    icon: "🎬",
    title: "Filmes & Séries",
    desc: "Catálogo enorme com filmes e séries das principais plataformas do mundo.",
  },
  {
    icon: "💻",
    title: "Servidores de Qualidade",
    desc: "Infraestrutura robusta para garantir estabilidade e imagem em alta definição.",
  },
  {
    icon: "💬",
    title: "Suporte via WhatsApp",
    desc: "Atendimento rápido e humanizado diretamente pelo WhatsApp quando precisar.",
  },
];

export default function Features() {
  return (
    <section id="recursos" className="bg-ap-bg py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-ap-cyan text-sm font-bold tracking-widest text-center mb-3">
          POR QUE ESCOLHER ALPHAPLAY?
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-white text-center mb-12">
          Tudo o que você precisa em um só app
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-ap-card rounded-2xl p-6 border border-white/5 hover:border-ap-blue/30 transition-colors"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
