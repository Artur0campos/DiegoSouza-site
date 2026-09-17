'use client';

import { useState } from 'react';
import { Play, X } from 'lucide-react';
import type { Palestra } from '@/data/palestras';

interface VideoCardProps {
  palestra: Palestra;
  title: string;
  index: number;
}

function VideoCard({ palestra, title, index }: VideoCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const thumbnail = `https://i.ytimg.com/vi/${palestra.youtubeId}/hqdefault.jpg`;

  return (
    <>
      {/* Card */}
      <article
        className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col"
        style={{ animationDelay: `${index * 80}ms` }}
      >
        {/* Thumbnail com overlay de play */}
        <button
          id={`palestra-play-${palestra.youtubeId}`}
          aria-label={`Assistir: ${title}`}
          onClick={() => setIsOpen(true)}
          className="relative w-full aspect-video overflow-hidden cursor-pointer focus:outline-none"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Overlay escuro ao hover */}
          <div className="absolute inset-0 bg-[#093733]/40 group-hover:bg-[#093733]/20 transition-colors duration-300" />
          {/* Botão play central */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
              <Play className="w-6 h-6 text-[#093733] fill-[#093733] ml-0.5" />
            </div>
          </div>
          {/* Badge YouTube */}
          <div className="absolute bottom-3 right-3 bg-[#093733]/80 text-white text-[10px] font-montserrat tracking-widest uppercase px-2 py-1 rounded">
            YouTube
          </div>
        </button>

        {/* Corpo do card */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-alan font-light text-lg text-[#093733] leading-snug mb-3 line-clamp-2">
            {title}
          </h3>
          <div className="mt-auto flex items-center justify-between">
            <span className="font-montserrat text-xs text-[#093733]/50 tracking-wide uppercase">
              Dr. Diego Bruno
            </span>
            <button
              onClick={() => setIsOpen(true)}
              className="font-montserrat text-xs text-[#26BDB0] hover:text-[#093733] transition-colors font-medium tracking-wide"
            >
              Assistir →
            </button>
          </div>
        </div>
      </article>

      {/* Modal de player inline */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Reproduzindo: ${title}`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Player container */}
          <div className="relative w-full max-w-4xl z-10">
            {/* Botão fechar */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Fechar vídeo"
              className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors flex items-center gap-2 font-montserrat text-sm"
            >
              <X className="w-5 h-5" />
              Fechar
            </button>

            {/* iframe YouTube */}
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${palestra.youtubeId}?autoplay=1&rel=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* Título abaixo do player */}
            <p className="mt-4 text-white/90 font-alan font-light text-lg text-center">
              {title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

interface PalestrasGridProps {
  palestras: Palestra[];
  titles: Record<string, string>;
}

export function PalestrasGrid({ palestras, titles }: PalestrasGridProps) {
  if (palestras.length === 0) {
    return (
      <section className="w-full bg-white py-20 px-6 text-center">
        <p className="font-montserrat text-[#093733]/60 text-base">
          Nenhuma palestra disponível no momento.
        </p>
      </section>
    );
  }

  return (
    <section className="w-full bg-white py-20 sm:py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {palestras.map((palestra, index) => (
          <VideoCard
            key={palestra.youtubeId}
            palestra={palestra}
            title={titles[palestra.youtubeId] ?? 'Palestra'}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
