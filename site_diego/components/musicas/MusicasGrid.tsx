'use client';

import { useState } from 'react';
import { musicas } from '@/data/musicas';
import { MusicaPlayer } from './MusicaPlayer';

export function MusicasGrid() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handlePlay = (id: number) => {
    setActiveId(id);
  };

  return (
    <section className="w-full bg-white py-16 sm:py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Cabeçalho */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 border-b border-[#093733]/10 pb-6 gap-4">
          <div>
            <span className="font-montserrat text-xs tracking-[0.25em] uppercase text-[#26BDB0] font-medium block mb-2">
              Composições
            </span>
            <h2 className="font-alan font-light text-3xl sm:text-4xl text-[#093733]">
              Todas as <span className="text-[#26BDB0]">Músicas</span>
            </h2>
          </div>

          <span className="font-montserrat text-xs text-[#093733]/60 bg-[#093733]/5 px-4 py-2 rounded-full">
            {musicas.length} {musicas.length === 1 ? 'faixa' : 'faixas'}
          </span>
        </div>

        {/* Lista de players */}
        <div className="flex flex-col gap-3">
          {musicas.map((musica, index) => (
            <MusicaPlayer
              key={musica.id}
              musica={musica}
              index={index}
              isActive={activeId === musica.id}
              onPlay={handlePlay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
