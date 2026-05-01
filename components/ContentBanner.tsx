export default function ContentBanner() {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: "220px" }}>
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ap-bg to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ap-bg to-transparent pointer-events-none z-10" />
      <img
        src="/alphaplay-filmes-series-canais-ao-vivo.webp"
        alt="Conteúdo AlphaPlay – filmes, séries e esportes"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
