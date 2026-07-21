// src/app/page.tsx
import { Hero } from '@/components/Hero';
import { NavSecondary } from '@/components/navSecondary';
import { Proposito } from '@/components/Proposito';
import { SobreMim } from '@/components/Sobre';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero (que contém a textura de fundo e a header) */}
      <Hero />

      {/* 2. Menu Secundário */}
      <NavSecondary />

      {/* 3. Próximas Seções da Página */}
        <Proposito/>
        <SobreMim/>


      <section id="familia" className="py-20 px-8 min-h-screen bg-white">
        <h2 className="text-3xl font-light text-[#093733]">Família</h2>
      </section>

      <section id="trabalho" className="py-20 px-8 min-h-screen bg-slate-50">
        <h2 className="text-3xl font-light text-[#093733]">Trabalho</h2>
      </section>

      <section id="conteudos" className="py-20 px-8 min-h-screen bg-white">
        <h2 className="text-3xl font-light text-[#093733]">Conteúdos</h2>
      </section>
    </main>
  );
}