'use client';

import { ExternalLink } from 'lucide-react';
import type { Palestra } from '@/data/palestras';

interface VideoCardProps {
  palestra: Palestra;
  title: string;
  index: number;
}

function VideoCard({ palestra, title, index }: VideoCardProps) {
  const thumbnail = `https://i.ytimg.com/vi/${palestra.youtubeId}/hqdefault.jpg`;

  return (
    <article
      className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col border border-[#093733]/10"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Thumbnail com link direto para o YouTube */}
      <a
        href={palestra.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Assistir no YouTube: ${title}`}
        className="relative w-full aspect-video overflow-hidden cursor-pointer block group/thumb"
        title="Assistir no YouTube"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500"
        />
        {/* Overlay com indicação visual de redirecionamento para o YouTube no hover */}
        <div className="absolute inset-0 bg-[#093733]/30 group-hover/thumb:bg-[#093733]/50 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover/thumb:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/thumb:translate-y-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 text-[#093733] font-montserrat text-xs font-semibold shadow-lg">
            <svg className="w-4 h-4 text-red-600 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>Assistir no YouTube</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#26BDB0]" />
          </span>
        </div>

        {/* Badge YouTube */}
        <div className="absolute bottom-3 right-3 bg-[#093733]/85 text-white text-[10px] font-montserrat tracking-widest uppercase px-2.5 py-1 rounded-md shadow-sm flex items-center gap-1.5">
          <svg className="w-3 h-3 text-red-500 fill-current" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          <span>YouTube</span>
        </div>
      </a>

      {/* Corpo do card */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <a
            href={palestra.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/title block"
            title={title}
          >
            <h3 className="font-alan font-light text-lg text-[#093733] leading-snug mb-3 line-clamp-2 group-hover/title:text-[#26BDB0] transition-colors">
              {title}
            </h3>
          </a>
        </div>

        <div className="pt-3 border-t border-[#093733]/10 flex items-center justify-between mt-auto">
          <span className="font-montserrat text-xs text-[#093733]/60 tracking-wide uppercase">
            Dr. Diego Bruno
          </span>

          <a
            href={palestra.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-montserrat text-xs text-[#26BDB0] hover:text-[#093733] font-medium tracking-wide transition-colors group/link"
          >
            <span>Assistir no YouTube</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </article>
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
