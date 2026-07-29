'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useInView } from '@/hooks/useInView';

interface DevocionaisHeroProps {
  titulo?: string;
  subtitulo?: string;
}

export function DevocionaisHero({
  titulo,
  subtitulo,
}: DevocionaisHeroProps) {
  const { ref: heroRef, isVisible: heroVisible } = useInView(0.05);

  const displaySubtitulo =
    subtitulo ||
    'Palavras de fé, ética e esperança inspiradas nas Escrituras. Leituras breves para fortalecer sua caminhada espiritual e alimentar o seu propósito diário.';

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[55vh] md:min-h-[65vh] flex flex-col justify-center items-center overflow-hidden text-[#093733] font-alan z-0"
    >
      {/* 1. Textura de fundo de cimento fixo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/cement-texture.jpg"
          alt="Textura de cimento de fundo"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-90"
        />
      </div>

      {/* Overlay suave de gradiente */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-white/20 via-transparent to-white/40" />

      {/* 2. Top Header Navigation */}
      <header className="absolute top-0 left-0 right-0 w-full max-w-7xl mx-auto px-6 sm:px-8 py-5 flex items-center justify-between z-20">
        <Link
          href="/"
          className="flex items-center gap-2 text-[#093733] hover:text-[#26BDB0] transition-colors duration-300 group font-alan text-lg font-light"
        >
          <span>Home</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-10 text-lg font-light">
          <Link href="/livros" className="hover:text-[#26BDB0] transition-colors">
            Livros
          </Link>
          <Link href="/#conteudos" className="hover:text-[#26BDB0] transition-colors">
            Conteúdos
          </Link>
          <Link href="/#sobre-mim" className="hover:text-[#26BDB0] transition-colors">
            Sobre mim
          </Link>
        </nav>
      </header>

      {/* 3. Conteúdo Principal da Seção */}
      <div
        className={`
          relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center pt-16 pb-8
          transition-all duration-1000 ease-out
          ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
      >
        {/* Título Fixo da Seção */}
        <h1 className="font-alan font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6">
          {titulo ? (
            <span className="text-[#093733]">{titulo}</span>
          ) : (
            <>
              <span className="text-[#093733]">Reflexões</span>{' '}
              <span className="text-[#26BDB0]">&amp;</span>{' '}
              <span className="text-[#093733]">Devocionais</span>
            </>
          )}
        </h1>

        <div className="w-20 h-[2px] bg-[#26BDB0] mb-6" />

        {/* Subtítulo institucional da página */}
        <p className="font-montserrat font-light text-base sm:text-lg md:text-xl text-[#093733]/85 leading-relaxed max-w-2xl">
          {displaySubtitulo}
        </p>
      </div>
    </section>
  );
  
}