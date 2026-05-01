import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Recarga AlphaPlay – Renove seu Plano Online pelo WhatsApp",
  description:
    "Faça sua recarga AlphaPlay de forma rápida e segura pelo WhatsApp. Planos Mensal, Trimestral, Semestral e Anual. Código de resgate enviado na hora. Renovação imediata.",
  keywords: [
    "recarga alphaplay",
    "alphaplay recarga",
    "renovar alphaplay",
    "código recarga alphaplay",
    "código resgate alphaplay",
    "alphaplay mensal",
    "recarga alphaplay online",
    "renovação alphaplay",
  ],
  alternates: {
    canonical: "https://alphaplaytv.com.br/recarga-alphaplay",
  },
  openGraph: {
    title: "Recarga AlphaPlay – Renove seu Plano Online",
    description:
      "Recarga AlphaPlay rápida e segura via WhatsApp. Código enviado na hora.",
    url: "https://alphaplaytv.com.br/recarga-alphaplay",
  },
};

const WA = "5564993275252";

const plans = [
  {
    name: "MENSAL",
    period: "30 dias",
    price: "21,90",
    perDay: "R$0,73/dia",
    popular: false,
    waText: "Olá, AlphaPlay! Quero fazer a recarga do plano Mensal por R$21,90.",
  },
  {
    name: "TRIMESTRAL",
    period: "90 dias",
    price: "51,90",
    perDay: "R$0,58/dia",
    popular: true,
    waText: "Olá, AlphaPlay! Quero fazer a recarga do plano Trimestral por R$51,90.",
  },
  {
    name: "SEMESTRAL",
    period: "180 dias",
    price: "76,90",
    perDay: "R$0,43/dia",
    popular: false,
    waText: "Olá, AlphaPlay! Quero fazer a recarga do plano Semestral por R$76,90.",
  },
  {
    name: "ANUAL",
    period: "365 dias",
    price: "131,90",
    perDay: "R$0,36/dia",
    popular: false,
    waText: "Olá, AlphaPlay! Quero fazer a recarga do plano Anual por R$131,90.",
  },
];

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Recarga AlphaPlay",
  provider: {
    "@type": "Organization",
    name: "AlphaPlay TV",
    url: "https://alphaplaytv.com.br",
  },
  description:
    "Serviço de recarga e renovação de planos AlphaPlay TV via WhatsApp. Código de resgate enviado imediatamente.",
  areaServed: "BR",
  offers: [
    { "@type": "Offer", name: "Plano Mensal", price: "21.90", priceCurrency: "BRL", description: "Válido por 30 dias" },
    { "@type": "Offer", name: "Plano Trimestral", price: "51.90", priceCurrency: "BRL", description: "Válido por 90 dias" },
    { "@type": "Offer", name: "Plano Semestral", price: "76.90", priceCurrency: "BRL", description: "Válido por 180 dias" },
    { "@type": "Offer", name: "Plano Anual", price: "131.90", priceCurrency: "BRL", description: "Válido por 365 dias" },
  ],
};

export default function RecargaAlphaPlay() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="bg-ap-bg min-h-screen pt-24 pb-20 px-4">
        <div className="max-w-5xl mx-auto">

          {/* Hero da página */}
          <div className="text-center mb-14">
            <p className="text-ap-cyan text-sm font-bold tracking-widest mb-3">RENOVAÇÃO RÁPIDA E SEGURA</p>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Recarga <span className="text-ap-orange">AlphaPlay</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Renove seu plano AlphaPlay pelo WhatsApp em menos de 5 minutos.
              Código de resgate enviado imediatamente após o pagamento.
            </p>
          </div>

          {/* Diferenciais */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
            {[
              { icon: "⚡", title: "Recarga Imediata", desc: "Código enviado na hora via WhatsApp" },
              { icon: "🔒", title: "100% Seguro", desc: "Pagamento direto com nossa equipe" },
              { icon: "📱", title: "Fácil de Ativar", desc: "Basta inserir o código no app" },
            ].map((item) => (
              <div key={item.title} className="bg-ap-card border border-white/10 rounded-2xl p-5 text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-white font-bold mb-1">{item.title}</p>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Planos */}
          <h2 className="text-2xl font-black text-white text-center mb-8">
            Escolha seu plano de recarga
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-ap-card rounded-2xl p-6 flex flex-col items-center text-center border transition-transform hover:-translate-y-1 ${
                  plan.popular ? "border-ap-orange shadow-lg shadow-ap-orange/20" : "border-white/5"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-ap-orange text-white text-xs font-black px-4 py-1.5 rounded-full tracking-wider">
                    ⭐ MAIS POPULAR
                  </div>
                )}
                <p className="text-white font-black text-sm tracking-widest mb-1">{plan.name}</p>
                <p className="text-white/50 text-xs mb-5">Válido por {plan.period}</p>
                <div className="mb-1">
                  <span className="text-white/70 text-sm font-bold">R$</span>
                  <span className="text-white text-5xl font-black">{plan.price.split(",")[0]}</span>
                  <span className="text-white text-xl font-bold">,{plan.price.split(",")[1]}</span>
                </div>
                <p className="text-ap-green text-sm font-bold mb-6">apenas {plan.perDay}</p>
                <a
                  href={`https://wa.me/${WA}?text=${encodeURIComponent(plan.waText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-ap-green hover:bg-green-500 text-white font-bold py-3 rounded-xl transition-colors text-sm"
                >
                  <WhatsAppIcon /> Recarregar agora
                </a>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="bg-ap-card border border-white/10 rounded-2xl p-8 mb-10">
            <h2 className="text-2xl font-black text-white mb-6">Dúvidas sobre a recarga</h2>
            <div className="flex flex-col gap-6">
              {[
                {
                  q: "Como funciona a recarga AlphaPlay?",
                  a: "Clique em um dos botões acima, envie a mensagem pelo WhatsApp e nossa equipe te passa o código de resgate imediatamente após a confirmação do pagamento.",
                },
                {
                  q: "Como inserir o código de resgate AlphaPlay?",
                  a: "Abra o aplicativo AlphaPlay, vá em Configurações → Recarregar ou Renovar, insira o código que enviamos e confirme. Seu plano é ativado na hora.",
                },
                {
                  q: "Quanto tempo leva para receber o código?",
                  a: "Em menos de 5 minutos após a confirmação do pagamento, nossa equipe envia o código pelo próprio WhatsApp.",
                },
                {
                  q: "Posso renovar antes do plano vencer?",
                  a: "Sim! Os dias são somados ao saldo atual. Você não perde nenhum dia do plano vigente.",
                },
              ].map((item) => (
                <div key={item.q} className="border-b border-white/10 pb-5 last:border-0 last:pb-0">
                  <p className="text-white font-bold mb-1">{item.q}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-white/40 text-sm">
            Ainda com dúvidas?{" "}
            <Link href="/suporte" className="text-ap-green underline">
              Acesse nosso suporte
            </Link>
          </p>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
