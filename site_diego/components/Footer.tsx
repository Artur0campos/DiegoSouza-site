import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative w-full text-[#093733] font-alan py-12 px-6 md:px-12 overflow-hidden border-t border-[#093733]/10">
      {/* 1. Textura de fundo suave */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/cement-texture.jpg"
          alt="Textura de fundo do rodapé"
          fill
          className="object-cover object-center opacity-90"
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Lado Esquerdo: Nome/Logo */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-2xl font-light tracking-tight">
            Dr Diego Bruno de Souza
          </span>
          <p className="font-montserrat text-xs text-[#093733]/70 mt-1">
            trabalho que segue um propósito
          </p>
        </div>

        {/* Centro: Links Rápidos */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-light">
          <Link href="#proposito" className="hover:text-[#26BDB0] transition-colors">
            Propósito
          </Link>
          <Link href="#sobre-mim" className="hover:text-[#26BDB0] transition-colors">
            Sobre mim
          </Link>
          <Link href="#familia" className="hover:text-[#26BDB0] transition-colors">
            Família
          </Link>
          <Link href="#trabalho" className="hover:text-[#26BDB0] transition-colors">
            Trabalho
          </Link>
          <Link href="#conteudos" className="hover:text-[#26BDB0] transition-colors">
            Conteúdos
          </Link>
        </nav>

        {/* Lado Direito: Copyright */}
        <div className="text-xs font-montserrat text-[#093733]/80 text-center md:text-right">
          © {new Date().getFullYear()} Dr. Diego Bruno de Souza. <br className="hidden sm:inline" />
          Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
}