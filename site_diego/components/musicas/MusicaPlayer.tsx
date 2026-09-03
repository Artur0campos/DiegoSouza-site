'use client';

import { useState, useRef, useEffect } from 'react';
import { Musica } from '@/data/musicas';

interface MusicaPlayerProps {
  musica: Musica;
  index: number;
  isActive: boolean;
  onPlay: (id: number) => void;
}

export function MusicaPlayer({ musica, index, isActive, onPlay }: MusicaPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [canPlay, setCanPlay] = useState(false);

  // Pause quando outra faixa fica ativa
  useEffect(() => {
    if (!isActive && isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    }
  }, [isActive, isPlaying]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    onPlay(musica.id);

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        console.error('Erro ao reproduzir áudio:', err);
      }
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;
    const cur = audio.currentTime;
    const dur = audio.duration || 0;
    setCurrentTime(cur);
    setProgress(dur > 0 ? (cur / dur) * 100 : 0);
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleCanPlay = () => setCanPlay(true);

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    if (audioRef.current) audioRef.current.currentTime = 0;
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audio.currentTime = Math.max(0, Math.min(ratio * duration, duration));
  };

  const formatTime = (s: number) => {
    if (!s || isNaN(s) || !isFinite(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div
      className={`
        group relative flex items-center gap-4 sm:gap-6 px-5 sm:px-7 py-5 rounded-2xl
        border transition-all duration-500
        ${isActive
          ? 'bg-[#093733] border-[#26BDB0]/40 shadow-xl shadow-[#093733]/20'
          : 'bg-white border-[#093733]/10 hover:border-[#093733]/25 hover:shadow-md'
        }
      `}
    >
      {/* Número da faixa */}
      <span
        className={`
          hidden sm:flex w-7 shrink-0 text-center font-montserrat text-sm font-light
          ${isActive ? 'text-[#26BDB0]' : 'text-[#093733]/30'}
        `}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Botão Play / Pause */}
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? `Pausar ${musica.titulo}` : `Tocar ${musica.titulo}`}
        disabled={!canPlay && !isPlaying}
        className={`
          shrink-0 w-12 h-12 rounded-full flex items-center justify-center
          transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#26BDB0]
          disabled:opacity-50 disabled:cursor-wait
          ${isActive
            ? 'bg-[#26BDB0] text-white shadow-lg hover:bg-[#1fa99e]'
            : 'bg-[#093733]/8 text-[#093733] hover:bg-[#093733] hover:text-white'
          }
        `}
      >
        {isPlaying ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5.14v14l11-7-11-7z" />
          </svg>
        )}
      </button>

      {/* Info + Barra de progresso */}
      <div className="flex-1 min-w-0">
        <p
          className={`
            font-alan font-light text-base sm:text-lg truncate mb-0.5
            ${isActive ? 'text-white' : 'text-[#093733]'}
          `}
        >
          {musica.titulo}
        </p>
        {musica.descricao && (
          <p
            className={`
              font-montserrat text-xs truncate mb-2
              ${isActive ? 'text-white/60' : 'text-[#093733]/50'}
            `}
          >
            {musica.descricao}
          </p>
        )}

        {/* Barra de progresso clicável */}
        <div
          className="w-full h-1.5 rounded-full cursor-pointer relative overflow-hidden"
          style={{ background: isActive ? 'rgba(255,255,255,0.15)' : 'rgba(9,55,51,0.1)' }}
          onClick={handleSeek}
          role="slider"
          aria-label="Progresso da música"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full rounded-full transition-[width] duration-100"
            style={{
              width: `${progress}%`,
              background: isActive ? '#26BDB0' : '#093733',
            }}
          />
        </div>

        {/* Tempos */}
        <div className="flex justify-between mt-1">
          <span className={`font-montserrat text-[10px] ${isActive ? 'text-white/50' : 'text-[#093733]/40'}`}>
            {formatTime(currentTime)}
          </span>
          <span className={`font-montserrat text-[10px] ${isActive ? 'text-white/50' : 'text-[#093733]/40'}`}>
            {formatTime(duration)}
          </span>
        </div>
      </div>

      {/* Elemento de áudio com source explícito */}
      <audio
        ref={audioRef}
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onCanPlay={handleCanPlay}
        onEnded={handleEnded}
        onError={(e) => console.error('Erro no áudio:', musica.arquivo, e)}
      >
        <source src={musica.arquivo} type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
    </div>
  );
}
