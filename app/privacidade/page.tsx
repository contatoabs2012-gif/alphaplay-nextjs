import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade – AlphaPlay TV",
  description: "Política de privacidade e proteção de dados da AlphaPlay TV.",
};

export default function PrivacidadePage() {
  return (
    <main>
      <Header />

      <section className="pt-32 pb-20 px-4 bg-ap-bg min-h-screen">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-black text-white mb-2">Política de Privacidade</h1>
          <p className="text-white/40 text-sm mb-10">Última atualização: março de 2026</p>

          <div className="prose prose-invert max-w-none text-white/70 leading-relaxed space-y-8">
            <div>
              <h2 className="text-white text-xl font-bold mb-3">1. Informações que Coletamos</h2>
              <p>
                A AlphaPlay TV coleta apenas as informações necessárias para a prestação dos nossos serviços,
                incluindo nome, número de telefone (WhatsApp) e dados de uso do serviço de streaming.
                Não coletamos dados de cartão de crédito diretamente — os pagamentos são realizados
                através de canais seguros indicados pela nossa equipe.
              </p>
            </div>

            <div>
              <h2 className="text-white text-xl font-bold mb-3">2. Como Usamos seus Dados</h2>
              <p>Utilizamos suas informações para:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Ativar e gerenciar sua conta de streaming</li>
                <li>Prestar suporte técnico via WhatsApp</li>
                <li>Enviar informações sobre renovação do plano</li>
                <li>Melhorar nossos serviços e experiência do usuário</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white text-xl font-bold mb-3">3. Compartilhamento de Dados</h2>
              <p>
                A AlphaPlay TV não vende, aluga ou compartilha seus dados pessoais com terceiros
                sem o seu consentimento, exceto quando exigido por lei ou ordem judicial.
              </p>
            </div>

            <div>
              <h2 className="text-white text-xl font-bold mb-3">4. Segurança dos Dados</h2>
              <p>
                Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados
                pessoais contra acesso não autorizado, perda ou divulgação indevida.
              </p>
            </div>

            <div>
              <h2 className="text-white text-xl font-bold mb-3">5. Seus Direitos (LGPD)</h2>
              <p>
                Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos ou incorretos</li>
                <li>Solicitar a exclusão dos seus dados</li>
                <li>Revogar o consentimento a qualquer momento</li>
              </ul>
              <p className="mt-3">
                Para exercer qualquer desses direitos, entre em contato via WhatsApp:
                (64) 99327-5252.
              </p>
            </div>

            <div>
              <h2 className="text-white text-xl font-bold mb-3">6. Cookies</h2>
              <p>
                Nosso site utiliza cookies essenciais para garantir o funcionamento correto da plataforma.
                Não utilizamos cookies de rastreamento ou publicidade comportamental.
              </p>
            </div>

            <div>
              <h2 className="text-white text-xl font-bold mb-3">7. Contato</h2>
              <p>
                Em caso de dúvidas sobre esta política, entre em contato pelo WhatsApp (64) 99327-5252
                ou acesse nossa página de{" "}
                <a href="/suporte" className="text-ap-cyan hover:underline">
                  Suporte
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
