import { Footer } from '@/components/Footer';
import { MusicasHero } from '@/components/musicas/MusicasHero';
import { MusicasGrid } from '@/components/musicas/MusicasGrid';

export const metadata = {
  title: 'Músicas | Dr. Diego Bruno de Souza',
  description:
    'Composições musicais de Diego Bruno de Souza — melodias que nascem da fé, do amor e da experiência de vida.',
};

export default function MusicasPage() {
  return (
    <main className="min-h-screen font-alan bg-white flex flex-col justify-between">
      <div>
        {/* 1. Hero com título da seção */}
        <MusicasHero />

        {/* 2. Barra de separação */}
        <div className="w-full bg-[#093733] py-4">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
            <span className="font-alan text-white/90 text-lg sm:text-xl font-light tracking-wider">
              Ouça e sinta cada mensagem
            </span>
          </div>
        </div>

        {/* 3. Lista de músicas */}
        <MusicasGrid />
      </div>

      {/* 4. Rodapé */}
      <Footer />
    </main>
  );
}
