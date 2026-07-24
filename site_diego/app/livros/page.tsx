import { Footer } from '@/components/Footer';
import { LivrosHero } from '@/components/livros/LivrosHero';
import { BookCard } from '@/components/livros/BookCard';
import { LivrosCta } from '@/components/livros/LivrosCta';
import { livros } from '@/data/livros';

export default function LivrosPage() {
  return (
    <main className="min-h-screen font-alan">
      {/* 1. HERO BANNER */}
      <LivrosHero />

      {/* 2. BARRA DE SEPARAÇÃO */}
      <div className="w-full bg-[#093733] py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
          <span className="font-alan text-white/90 text-lg sm:text-xl font-light tracking-wider">
            Publicações e Obras
          </span>
        </div>
      </div>

      {/* 3. GRID DE LIVROS */}
      <section className="w-full bg-white py-20 sm:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto space-y-24 sm:space-y-32">
          {livros.map((livro, index) => (
            <div key={livro.id}>
              <BookCard livro={livro} index={index} />

              {/* Divisor entre livros */}
              {index < livros.length - 1 && (
                <div className="mt-20 sm:mt-28 flex items-center justify-center gap-4">
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#093733]/10" />
                  <div className="w-2 h-2 rounded-full bg-[#26BDB0]/40" />
                  <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#093733]/10" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <LivrosCta />

      {/* 5. FOOTER */}
      <Footer />
    </main>
  );
}