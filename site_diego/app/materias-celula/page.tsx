import { Footer } from '@/components/Footer';
import { MateriasCelulaHero } from '@/components/materias-celula/MateriasCelulaHero';
import { MateriaCard } from '@/components/materias-celula/MateriaCard';
import { MateriasCelulaCta } from '@/components/materias-celula/MateriasCelulaCta';
import { materiasCelula } from '@/data/materias-celula';

export default function MateriasCelulaPage() {
  return (
    <main className="min-h-screen font-alan">
      {/* 1. HERO BANNER */}
      <MateriasCelulaHero />

      {/* 2. BARRA DE SEPARAÇÃO */}
      <div className="w-full bg-[#093733] py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
          <span className="font-alan text-white/90 text-lg sm:text-xl font-light tracking-wider">
            Materiais de Estudo para Grupos
          </span>
        </div>
      </div>

      {/* 3. GRID DE MATÉRIAS */}
      <section className="w-full bg-white py-20 sm:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto space-y-24 sm:space-y-32">
          {materiasCelula.map((materia, index) => (
            <div key={materia.id}>
              <MateriaCard materia={materia} index={index} />
            </div>
          ))}
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <MateriasCelulaCta />

      {/* 5. FOOTER */}
      <Footer />
    </main>
  );
}
