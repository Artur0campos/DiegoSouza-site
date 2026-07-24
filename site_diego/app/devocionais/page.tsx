import { getDevocionais } from '@/services/strapi';
import { DevocionaisHero } from '@/components/devocionais/DevocionaisHero';
import { DevocionaisGrid } from '@/components/devocionais/DevocionaisGrid';
import { PhraseSection } from '@/components/devocionais/PhraseSection';
import { Footer } from '@/components/Footer';

export const revalidate = 60; // Revalidação estática a cada 60s no Next.js App Router

export default async function DevocionaisPage() {
  const devocionais = await getDevocionais();

  return (
    <main className="min-h-screen font-alan bg-white flex flex-col justify-between">
      <div>
        {/* 1. Hero Banner */}
        <DevocionaisHero />

        {/* 2. Grid com os Cards de Devocionais */}
        <DevocionaisGrid devocionais={devocionais} />

        {/* 3. Seção de Frase Inspiradora / Citação */}
        <PhraseSection />
      </div>

      {/* 4. Rodapé */}
      <Footer />
    </main>
  );
}
