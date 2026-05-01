import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ap-bg border-t border-white/5 py-10 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <Image
          src="/alphaplay-tv-logo.svg"
          alt="AlphaPlay TV"
          width={140}
          height={40}
          className="h-10 w-auto mx-auto mb-4"
        />
        <p className="text-white/60 text-sm mb-3">(64) 99327-5252</p>
        <div className="flex justify-center gap-6 text-white/40 text-xs mb-4">
          <Link href="/privacidade" className="hover:text-white transition-colors">
            Política de Privacidade
          </Link>
          <Link href="/suporte" className="hover:text-white transition-colors">
            Suporte
          </Link>
        </div>
        <p className="text-white/30 text-xs">
          © 2026 AlphaPlay TV. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
