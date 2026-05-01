import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Suporte AlphaPlay – Atendimento via WhatsApp",
  description:
    "Suporte AlphaPlay disponível via WhatsApp. Ajuda com recarga, código de resgate, renovação, instalação do APK e TV Box. Atendimento rápido e humanizado.",
  keywords: [
    "suporte alphaplay",
    "whatsapp alphaplay",
    "recarga alphaplay",
    "código resgate alphaplay",
    "renovar alphaplay",
    "alphaplay apk",
    "alphaplay tv box",
  ],
  alternates: {
    canonical: "https://alphaplaytv.com.br/suporte",
  },
};

const WA_SUPPORT = "https://wa.me/5564993275252?text=Preciso+de+suporte";
const WA_INSTALL = "https://wa.me/5564993275252?text=Preciso+de+ajuda+para+instalar+o+app";

const faqs = [
  {
    q: "Como faço para instalar o app?",
    a: "O processo é simples! Entre em contato via WhatsApp e nossa equipe te guia passo a passo na instalação em qualquer dispositivo Android.",
  },
  {
    q: "Em quais dispositivos funciona?",
    a: "AlphaPlay funciona em TV Box, TV Stick, Fire TV Stick, Celular Android, Tablet Android, ChromeCast 4 e Android TV.",
  },
  {
    q: "Posso usar em mais de um dispositivo ao mesmo tempo?",
    a: "Sim! Todos os planos incluem 2 telas simultâneas — uma fixa (TV Box/Fire) e uma móvel (celular/tablet).",
  },
  {
    q: "O que é a Função Playback?",
    a: "Com o playback você pode retomar qualquer programa do ponto onde parou, disponível em todos os canais.",
  },
  {
    q: "Como faço para assinar?",
    a: "É só clicar em qualquer botão 'Assinar via WhatsApp' e nossa equipe cuida de tudo para você.",
  },
  {
    q: "Tem teste grátis?",
    a: "Sim! Oferecemos 24 horas de teste grátis sem compromisso. Solicite pelo WhatsApp.",
  },
];

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function SuportePage() {
  return (
    <main>
      <Header />

      <section className="pt-32 pb-20 px-4 bg-ap-bg min-h-screen">
        <div className="max-w-3xl mx-auto">
          <p className="text-ap-cyan text-sm font-bold tracking-widest text-center mb-3">
            SUPORTE
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white text-center mb-4">
            Como podemos <span className="text-ap-green">te ajudar?</span>
          </h1>
          <p className="text-white/60 text-center text-lg mb-12">
            Nossa equipe está disponível para resolver qualquer dúvida rapidamente.
          </p>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            <a
              href={WA_SUPPORT}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ap-card border border-white/10 hover:border-ap-green/50 rounded-2xl p-6 flex items-center gap-4 transition-colors group"
            >
              <div className="bg-ap-green/10 rounded-xl p-3">
                <WhatsAppIcon />
              </div>
              <div>
                <p className="text-white font-bold group-hover:text-ap-green transition-colors">
                  Falar com Suporte
                </p>
                <p className="text-white/50 text-sm">Resposta em minutos</p>
              </div>
            </a>
            <a
              href={WA_INSTALL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ap-card border border-white/10 hover:border-ap-blue/50 rounded-2xl p-6 flex items-center gap-4 transition-colors group"
            >
              <div className="bg-ap-blue/10 rounded-xl p-3 text-ap-blue">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <div>
                <p className="text-white font-bold group-hover:text-ap-blue transition-colors">
                  Ajuda para Instalar
                </p>
                <p className="text-white/50 text-sm">Instalação assistida</p>
              </div>
            </a>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-black text-white mb-6">Perguntas Frequentes</h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-ap-card border border-white/5 rounded-2xl p-6"
              >
                <h3 className="text-white font-bold mb-2">{faq.q}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
