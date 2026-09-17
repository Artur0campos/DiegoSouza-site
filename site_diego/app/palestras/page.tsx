import { Footer } from '@/components/Footer';
import { PalestrasHero } from '@/components/palestras/PalestrasHero';
import { PalestrasGrid } from '@/components/palestras/PalestrasGrid';
import { PalestrasCta } from '@/components/palestras/PalestrasCta';
import { getPalestras } from '@/data/palestras';

// Busca o título real do YouTube via oEmbed (gratuito, sem API key)
async function fetchTitle(youtubeId: string): Promise<string> {
  try {
    const url = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${youtubeId}&format=json`;
    const res = await fetch(url, { next: { revalidate: 86400 } }); // cache de 24h
    if (!res.ok) return 'Palestra';
    const data = await res.json();
    return data.title ?? 'Palestra';
  } catch {
    return 'Palestra';
  }
}

export const metadata = {
  title: 'Palestras & Pregações | Dr. Diego Bruno de Souza',
  description:
    'Assista às palestras e pregações do Dr. Diego Bruno — mensagens que integram fé, direito e propósito.',
};

export default async function PalestrasPage() {
  const palestras = await getPalestras();

  // Busca todos os títulos em paralelo
  const titlesArray = await Promise.all(
    palestras.map((p) => fetchTitle(p.youtubeId))
  );
  const titles: Record<string, string> = {};
  palestras.forEach((p, i) => {
    titles[p.youtubeId] = titlesArray[i];
  });

  return (
    <main className="min-h-screen font-alan">
      {/* 1. HERO BANNER */}
      <PalestrasHero />

      {/* 2. BARRA DE SEPARAÇÃO */}
      <div className="w-full bg-[#093733] py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
          <span className="font-alan text-white/90 text-lg sm:text-xl font-light tracking-wider">
            Palavra e Ensino
          </span>
        </div>
      </div>

      {/* 3. GRID DE VÍDEOS */}
      <PalestrasGrid palestras={palestras} titles={titles} />

      {/* 4. CTA SECTION */}
      <PalestrasCta />

      {/* 5. FOOTER */}
      <Footer />
    </main>
  );
}
