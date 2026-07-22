// src/app/page.tsx
import { Hero } from '@/components/Hero';
import { NavSecondary } from '@/components/navSecondary';
import { Proposito } from '@/components/Proposito';
import { SobreMim } from '@/components/Sobre';
import { Familia } from '@/components/Familia';
import { Trabalho } from '@/components/Trabalho';
import { Conteudos } from '@/components/Conteudos';
import { Footer } from '@/components/Footer';


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
        <Familia/>
        <Trabalho/>
        <Conteudos/>
        <Footer/>
        
        
      

      
    </main>
  );
}