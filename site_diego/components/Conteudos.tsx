import Link from 'next/link';
import { BookOpen, Bookmark, Users, Music } from 'lucide-react';

export function Conteudos() {
  const cards = [
    {
      title: 'Devocionais',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      icon: BookOpen,
      href: '/devocionais',
    },
    {
      title: 'Livros',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      icon: Bookmark,
      href: '/livros',
    },
    {
      title: 'Materiais para célula',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      icon: Users,
      href: '#materiais',
    },
    {
      title: 'Louvores',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      icon: Music,
      href: '#louvores',
    },
  ];

  return (
    <section id="conteudos" className="w-full bg-[#093733] py-20 sm:py-28 px-6 md:px-12 flex justify-center items-center">
      <div className="max-w-5xl w-full flex flex-col items-center">
        
        {/* Título da Seção */}
        <h2 className="font-alan font-light text-3xl sm:text-4xl md:text-5xl text-white tracking-wide mb-16 text-center">
          Feito para <span className="text-[#26BDB0]">você</span>
        </h2>

        {/* Grid de 4 Cards (2x2 em telas maiores) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Link
                key={index}
                href={card.href}
                className="bg-white rounded-xl p-8 sm:p-10 text-center flex flex-col items-center justify-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Cabeçalho do Card: Ícone + Título */}
                <div className="flex items-center justify-center gap-3 mb-4 text-[#093733]">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                  <h3 className="font-alan text-xl sm:text-2xl font-normal tracking-tight">
                    {card.title}
                  </h3>
                </div>

                {/* Descrição */}
                <p className="font-montserrat font-light text-xs sm:text-sm text-[#093733]/90 leading-relaxed max-w-xs">
                  {card.description}
                </p>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}