'use client';

import Link from 'next/link';
import { BookOpen, ExternalLink } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { Livro } from '@/data/livros';

interface BookCardProps {
  livro: Livro;
  index: number;
}

export function BookCard({ livro, index }: BookCardProps) {
  const { ref, isVisible } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`
        flex flex-col lg:flex-row items-center gap-8 lg:gap-16
        transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Capa do livro */}
      <div
        className={`
          w-full lg:w-2/5 flex justify-center
          ${index % 2 !== 0 ? 'lg:order-2' : ''}
        `}
      >
        <div className="relative group">
          <div className="absolute -inset-4 bg-[#26BDB0]/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative w-[220px] h-[300px] sm:w-[260px] sm:h-[360px] md:w-[300px] md:h-[420px] rounded-lg overflow-hidden shadow-2xl group-hover:shadow-[0_25px_60px_rgba(9,55,51,0.3)] transition-all duration-500 group-hover:-translate-y-2 bg-[#093733] flex flex-col items-center justify-center gap-4 border-2 border-dashed border-[#26BDB0]/40">
            <BookOpen className="w-10 h-10 text-[#26BDB0]/60 stroke-[1.25]" />
            <span className="text-white/70 font-montserrat text-xs text-center px-6 leading-relaxed">
              Capa do livro
            </span>
            <span className="text-[#26BDB0]/80 font-alan text-sm text-center px-4 leading-snug">
              {livro.titulo}
            </span>
          </div>
        </div>
      </div>

      {/* Conteúdo do livro */}
      <div
        className={`
          w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left
          ${index % 2 !== 0 ? 'lg:order-1' : ''}
        `}
      >
        <span className="inline-block px-4 py-1.5 text-xs font-montserrat font-normal tracking-[0.2em] uppercase bg-[#26BDB0]/10 text-[#26BDB0] rounded-full mb-5">
          {livro.ano} · {livro.paginas} páginas
        </span>

        <h3 className="font-alan font-light text-2xl sm:text-3xl md:text-4xl text-[#093733] tracking-wide mb-3">
          {livro.titulo}
        </h3>

        <p className="font-montserrat font-normal text-sm text-[#26BDB0] tracking-wide mb-5">
          {livro.subtitulo}
        </p>

        <p className="font-montserrat font-light text-sm sm:text-base text-[#093733]/80 leading-relaxed max-w-xl mb-4">
          {livro.descricao}
        </p>

        <p className="font-montserrat text-xs text-[#093733]/50 mb-8">
          Editora: {livro.editora}
        </p>

        <Link
          href={livro.link}
          className="relative inline-flex items-center justify-center gap-2 px-7 py-3 text-base font-alan font-light border-[2px] border-[#093733] text-[#093733] overflow-hidden group/btn transition-colors duration-300"
        >
          <span className="absolute inset-0 w-full h-full bg-[#093733] transition-all duration-300 ease-out transform -translate-x-full group-hover/btn:translate-x-0" />
          <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300 flex items-center gap-2">
            Saiba mais
            <ExternalLink className="w-4 h-4 stroke-[1.5]" />
          </span>
        </Link>
      </div>
    </div>
  );
}