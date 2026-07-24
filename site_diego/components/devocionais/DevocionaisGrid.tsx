'use client';

import { DevocionalItem } from '@/data/types/devocional';
import { DevocionalCard } from './DevocionalCard';
import { BookOpen } from 'lucide-react';

interface DevocionaisGridProps {
  devocionais: DevocionalItem[];
}

export function DevocionaisGrid({ devocionais }: DevocionaisGridProps) {
  if (!devocionais || devocionais.length === 0) {
    return (
      <section className="w-full bg-white py-20 px-6 text-center">
        <div className="max-w-md mx-auto flex flex-col items-center justify-center p-8 rounded-2xl bg-[#093733]/5 border border-[#093733]/10">
          <BookOpen className="w-12 h-12 text-[#26BDB0] mb-4 stroke-[1.5]" />
          <h3 className="font-alan text-2xl text-[#093733] font-light mb-2">
            Nenhum devocional encontrado
          </h3>
          <p className="font-montserrat text-sm text-[#093733]/70">
            Em breve novos devocionais e reflexões serão publicados aqui.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white py-16 sm:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da Grid */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 border-b border-[#093733]/10 pb-6 gap-4">
          <div>
            <span className="font-montserrat text-xs tracking-[0.25em] uppercase text-[#26BDB0] font-medium block mb-2">
              Leituras Recentes
            </span>
            <h2 className="font-alan font-light text-3xl sm:text-4xl text-[#093733]">
              Todos os <span className="text-[#26BDB0]">Devocionais</span>
            </h2>
          </div>

          <span className="font-montserrat text-xs text-[#093733]/60 bg-[#093733]/5 px-4 py-2 rounded-full">
            {devocionais.length} {devocionais.length === 1 ? 'publicação' : 'publicações'}
          </span>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {devocionais.map((devocional, index) => (
            <DevocionalCard key={devocional.id} devocional={devocional} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
