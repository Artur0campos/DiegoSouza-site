'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, BookOpen, ArrowRight } from 'lucide-react';
import { DevocionalItem } from '@/data/types/devocional';
import { useInView } from '@/hooks/useInView';

interface DevocionalCardProps {
  devocional: DevocionalItem;
  index: number;
}

export function DevocionalCard({ devocional, index }: DevocionalCardProps) {
  const { ref, isVisible } = useInView(0.1);

  return (
    <article
      ref={ref}
      className={`
        bg-white rounded-2xl overflow-hidden border border-[#093733]/10
        shadow-md hover:shadow-2xl transition-all duration-500 ease-out
        flex flex-col justify-between group
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      style={{ transitionDelay: `${(index % 3) * 120}ms` }}
    >
      {/* 1. Área de Imagem ou Placeholder */}
      <div className="relative w-full h-52 sm:h-56 bg-[#093733] overflow-hidden">
        {devocional.coverUrl ? (
          <Image
            src={devocional.coverUrl}
            alt={devocional.coverAlt || devocional.titulo}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          /* Placeholder estilizado quando não há imagem */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#093733] via-[#0b4742] to-[#093733] relative">
            {/* Padrão decorativo de fundo */}
            <div className="absolute inset-0 bg-[radial-gradient(#26BDB0_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
            
            <div className="w-12 h-12 rounded-full bg-[#26BDB0]/20 flex items-center justify-center mb-3 text-[#26BDB0] group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-6 h-6 stroke-[1.5]" />
            </div>

            <span className="font-alan text-white/90 text-sm font-light px-4 line-clamp-2 relative z-10">
              {devocional.titulo}
            </span>
          </div>
        )}

        {/* Overlay escuro em hover da imagem */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#093733]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

        {/* Badge de Data no topo */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#093733] font-montserrat text-xs font-medium shadow-sm">
          <Calendar className="w-3.5 h-3.5 text-[#26BDB0]" />
          <span>{devocional.dataPublicacao}</span>
        </div>
      </div>

      {/* 2. Conteúdo do Card */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-white">
        <div>
          {/* Metadata de tempo de leitura */}
          <div className="flex items-center gap-2 text-xs font-montserrat text-[#093733]/60 mb-3">
            <Clock className="w-3.5 h-3.5 text-[#26BDB0]" />
            <span>{devocional.tempoLeitura}</span>
          </div>

          {/* Título do Devocional */}
          <h3 className="font-alan font-normal text-xl sm:text-2xl text-[#093733] group-hover:text-[#26BDB0] transition-colors duration-300 tracking-tight mb-3 line-clamp-2">
            {devocional.titulo}
          </h3>

          {/* Subtítulo / Resumo */}
          <p className="font-montserrat font-light text-sm text-[#093733]/75 leading-relaxed line-clamp-3 mb-6">
            {devocional.subtitulo}
          </p>
        </div>

        {/* 3. Rodapé do Card / Ação */}
        <div className="pt-4 border-t border-[#093733]/10 flex items-center justify-between">
          <Link
            href={`/devocionais/${devocional.slug}`}
            className="inline-flex items-center gap-2 text-sm font-alan text-[#093733] group-hover:text-[#26BDB0] transition-colors duration-300 group/link"
          >
            <span className="font-medium">Ler devocional</span>
            <ArrowRight className="w-4 h-4 text-[#26BDB0] group-hover/link:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </article>
  );
}
