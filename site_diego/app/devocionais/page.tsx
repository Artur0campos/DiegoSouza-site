import { getDevocionais } from '@/services/strapi';
import { DevocionaisHero } from '@/components/devocionais/DevocionaisHero';
import { DevocionaisGrid } from '@/components/devocionais/DevocionaisGrid';
import { PhraseSection } from '@/components/devocionais/PhraseSection';
import { Footer } from '@/components/Footer';

export const revalidate = 60;

export default async function DevocionaisPage() {
  const devocionais = await getDevocionais();

  return (
    <main className="min-h-screen font-alan bg-white flex flex-col justify-between">
      <div>
        {/* 1. Hero com o título fixo da seção de devocionais */}
        <DevocionaisHero />

        {/* 2. Grid listando todos os devocionais do Strapi */}
        <DevocionaisGrid devocionais={devocionais} />

        {/* 3. Citação/Frase em destaque */}
        <PhraseSection />
      </div>

      {/* 4. Rodapé */}
      <Footer />
    </main>
  );
}