const devices = [
  { icon: "📺", label: "TV Box" },
  { icon: "🔌", label: "TV Stick" },
  { icon: "📱", label: "Celular Android" },
  { icon: "📟", label: "Tablet Android" },
  { icon: "📡", label: "ChromeCast 4" },
  { icon: "🖥️", label: "Android TV" },
  { icon: "🔥", label: "Fire TV Stick" },
];

export default function Compatibility() {
  return (
    <section className="bg-ap-bg py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-ap-cyan text-sm font-bold tracking-widest text-center mb-3">
          COMPATIBILIDADE
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-white text-center mb-12">
          Funciona em Aparelhos Android
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {devices.map((d) => (
            <div
              key={d.label}
              className="flex items-center gap-2 bg-ap-card border border-white/10 rounded-xl px-5 py-3 text-white font-semibold text-sm hover:border-ap-blue/40 transition-colors"
            >
              <span className="text-xl">{d.icon}</span>
              {d.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
