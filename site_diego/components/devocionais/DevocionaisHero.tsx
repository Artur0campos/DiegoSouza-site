'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Sparkles } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

export function DevocionaisHero() {
  const { ref: heroRef, isVisible: heroVisible } = useInView(0.05);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[55vh] md:min-h-[65vh] flex flex-col justify-center items-center overflow-hidden text-[#093733] font-alan"
    >
      {/* 1. Textura de fundo de cimento */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/cement-texture.jpg"
          alt="Textura de cimento de fundo"
          fill
          priority
          className="object-cover object-center opacity-90"
        />
      </div>

      {/* Overlay suave de gradiente */}
      <div className="absolute inset-0 -z-[5] bg-gradient-to-b from-white/20 via-transparent to-white/40" />

      {/* 2. Top Header Navigation */}
      <header className="absolute top-0 left-0 right-0 w-full max-w-7xl mx-auto px-6 sm:px-8 py-5 flex items-center justify-between z-10">
        <Link
          href="/"
          className="flex items-center gap-2 text-[#093733] hover:text-[#26BDB0] transition-colors duration-300 group font-alan text-lg font-light"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
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

      {/* 3. Conteúdo Principal */}
      <div
        className={`
          max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center pt-16 pb-8
          transition-all duration-1000 ease-out
          ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
      >
        {/* Subtag em destaque Teal */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#26BDB0]/10 border border-[#26BDB0]/20 mb-6">
          <Sparkles className="w-4 h-4 text-[#26BDB0]" />
          <span className="font-montserrat text-xs sm:text-sm tracking-[0.25em] uppercase text-[#26BDB0] font-medium">
            Devocionais Diários
          </span>
        </div>

        {/* Título Principal */}
        <h1 className="font-alan font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6">
          <span className="text-[#093733]">Reflexões</span>{' '}
          <span className="text-[#26BDB0]">&amp;</span>{' '}
          <span className="text-[#093733]">Devocionais</span>
        </h1>

        {/* Divisor decorativo Teal */}
        <div className="w-20 h-[2px] bg-[#26BDB0] mb-6" />

        {/* Subtítulo */}
        <p className="font-montserrat font-light text-base sm:text-lg md:text-xl text-[#093733]/85 leading-relaxed max-w-2xl">
          Palavras de fé, ética e esperança inspiradas nas Escrituras. Leituras breves
          para fortalecer sua caminhada espiritual e alimentar o seu propósito diário.
        </p>
      </div>

      {/* Indicador suave de scroll */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 animate-bounce">
        <BookOpen className="w-5 h-5 text-[#093733]/40 stroke-[1.5]" />
        <div className="w-[1px] h-6 bg-gradient-to-b from-[#093733]/30 to-transparent" />
      </div>
    </section>
  );
}
