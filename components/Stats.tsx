const stats = [
  { value: "+600",    label: "Canais ao Vivo" },
  { value: "+12.000", label: "Filmes" },
  { value: "+2.900",  label: "Séries" },
  { value: "2",       label: "Telas Simultâneas" },
];

export default function Stats() {
  return (
    <section className="bg-ap-bg2 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-ap-blue text-4xl font-black">{s.value}</p>
              <p className="text-white/60 text-sm font-semibold mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
