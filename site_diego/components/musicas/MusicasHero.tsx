'use client';

import Image from 'next/image';
import Link from 'next/link';

export function MusicasHero() {
  return (
    <section className="relative w-full min-h-[55vh] md:min-h-[65vh] flex flex-col justify-center items-center overflow-hidden text-[#093733] font-alan z-0">
      {/* 1. Textura de fundo */}
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

      {/* Overlay gradiente */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-white/20 via-transparent to-white/40" />

      {/* 2. Header Navigation */}
      <header className="absolute top-0 left-0 right-0 w-full max-w-7xl mx-auto px-6 sm:px-8 py-5 flex items-center justify-between z-20">
        <Link
          href="/"
          className="flex items-center gap-2 text-[#093733] hover:text-[#26BDB0] transition-colors duration-300 font-alan text-lg font-light"
        >
          <span>Home</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-10 text-lg font-light">
          <Link href="/livros" className="hover:text-[#26BDB0] transition-colors">
            Livros
          </Link>
          <Link href="/devocionais" className="hover:text-[#26BDB0] transition-colors">
            Devocionais
          </Link>
          <Link href="/#sobre-mim" className="hover:text-[#26BDB0] transition-colors">
            Sobre mim
          </Link>
        </nav>
      </header>

      {/* 3. Conteúdo Principal — sempre visível (é o first viewport element) */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center pt-16 pb-8">
        {/* Ícone decorativo */}
        <div className="mb-6 w-16 h-16 rounded-full bg-[#093733]/10 border border-[#093733]/20 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-[#26BDB0]"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
            />
          </svg>
        </div>

        <h1 className="font-alan font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6">
          <span className="text-[#093733]">Músicas &amp; </span>
          <span className="text-[#26BDB0]">Melodias</span>
        </h1>

        <div className="w-20 h-[2px] bg-[#26BDB0] mb-6" />

        <p className="font-montserrat font-light text-base sm:text-lg md:text-xl text-[#093733]/85 leading-relaxed max-w-2xl">
          Composições que nascem da fé, do amor e da experiência de vida. Cada melodia
          carrega uma mensagem de esperança, afeto e propósito.
        </p>
      </div>
    </section>
  );
}
