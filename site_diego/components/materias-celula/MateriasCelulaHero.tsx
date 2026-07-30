'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

export function MateriasCelulaHero() {
  const { ref: heroRef, isVisible: heroVisible } = useInView(0.05);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center items-center overflow-hidden text-[#093733]"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/cement-texture.jpg"
          alt="Textura de fundo"
          fill
          priority
          className="object-cover object-center opacity-90"
        />
      </div>

      <div className="absolute inset-0 -z-[5] bg-gradient-to-b from-white/10 via-transparent to-white/30" />

      <header className="absolute top-0 left-0 right-0 w-full max-w-7xl mx-auto px-6 sm:px-8 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-[#093733] hover:text-[#26BDB0] transition-colors duration-300 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-lg font-light">Home</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-10 text-lg font-light">
          <Link href="/#conteudos" className="hover:text-[#26BDB0] transition-colors">
            Conteúdos
          </Link>
          <Link href="/#sobre-mim" className="hover:text-[#26BDB0] transition-colors">
            Sobre mim
          </Link>
        </nav>
      </header>

      <div
        className={`
          max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center
          transition-all duration-1000 ease-out
          ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
      >
        <span className="inline-block font-montserrat text-xs sm:text-sm tracking-[0.3em] uppercase text-[#26BDB0] mb-6">
          Material de Estudo
        </span>

        <h1 className="font-alan font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6">
          <span className="text-[#093733]">Materiais</span>{' '}
          <span className="text-[#26BDB0]">para</span>{' '}
          <span className="text-[#093733]">Célula</span>
        </h1>


        <p className="font-montserrat font-light text-base sm:text-lg md:text-xl text-[#093733]/80 leading-relaxed max-w-2xl">
          Materiais cuidadosamente elaborados para enriquecer seus encontros de
          célula, aprofundar o conhecimento bíblico e fortalecer os vínculos da
          comunidade.
        </p>
      </div>
    </section>
  );
}
