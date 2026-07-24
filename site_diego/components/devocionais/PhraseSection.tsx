'use client';

import { Quote } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

export function PhraseSection() {
  const { ref, isVisible } = useInView(0.15);

  return (
    <section
      ref={ref}
      className="w-full bg-[#093733] text-white py-20 sm:py-28 px-6 md:px-12 relative overflow-hidden flex justify-center items-center"
    >
      {/* Detalhes de luz e textura decorativos */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#26BDB0]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#26BDB0]/5 rounded-full blur-3xl pointer-events-none" />

      <div
        className={`
          max-w-4xl w-full flex flex-col items-center text-center relative z-10
          transition-all duration-1000 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
      >
        {/* Ícone de aspas */}
        <div className="w-14 h-14 rounded-full bg-[#26BDB0]/20 flex items-center justify-center mb-8 text-[#26BDB0]">
          <Quote className="w-7 h-7 stroke-[1.5]" />
        </div>

        {/* Citação em destaque */}
        <blockquote className="font-alan font-light text-2xl sm:text-3xl md:text-4xl text-white leading-snug tracking-wide mb-8">
          &ldquo;Lâmpada para os meus pés é a tua palavra e{' '}
          <span className="text-[#26BDB0] font-normal">luz para o meu caminho</span>.&rdquo;
        </blockquote>

        {/* Referência bíblica / autor */}
        <p className="font-montserrat text-xs sm:text-sm tracking-[0.25em] uppercase text-white/70 mb-10">
          Salmos 119:105
        </p>

        {/* Assinatura Cursiva do Dr. Diego Bruno */}
        <div className="pt-6 border-t border-white/10 w-full max-w-md flex justify-center">
          <span className="font-cursive text-2xl sm:text-3xl text-[#26BDB0] tracking-wider">
            Diego Bruno de Souza Pires
          </span>
        </div>
      </div>
    </section>
  );
}
