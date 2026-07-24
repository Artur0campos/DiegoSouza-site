import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden text-[#093733] font-alan">
      {/* 1. Textura do fundo de cimento */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/cement-texture.jpg"
          alt="Textura de cimento de fundo"
          fill
          priority
          className="object-cover object-center opacity-90"
        />
      </div>

      {/* 2. Cabeçalho / Navbar superior */}
      <header className="w-full max-w-7xl mx-auto px-2 py-5 flex items-center justify-between">
        <span className="text-3xl tracking-tight font-light hover:text-[#26BDB0]">home</span>
        
        <nav className="hidden md:flex items-center space-x-10 text-xl font-light">
          <Link href="/livros" className="hover:opacity-75 transition-opacity hover:text-[#26BDB0]" >
            Livros
          </Link>
          <Link href="#louvores" className="hover:opacity-75 transition-opacity hover:text-[#26BDB0]">
            Louvores
          </Link>
          <Link href="#discipulado" className="hover:opacity-75 transition-opacity hover:text-[#26BDB0]">
            Discipulado
          </Link>
          <Link href="#materiais" className="hover:opacity-75 transition-opacity hover:text-[#26BDB0]">
            Materiais
          </Link>
        </nav>
      </header>

      {/* 3. Conteúdo Principal (Foto + Textos) */}
      <div className="w-full max-w-7xl mx-auto px-8 flex-1 flex flex-col md:flex-row items-end justify-between pb-0 -pt-20">
        
        {/* Lado Esquerdo: Foto do Diego */}
        <div className="relative w-full md:w-1/2 h-[450px] sm:h-[550px] md:h-[780px] flex items-end">
          <Image
            src="/assets/diegoHero.png"
            alt="Dr. Diego Bruno de Souza"
            fill
            priority
            className="object-contain object-left-bottom"
          />
        </div>

        {/* Lado Direito: Nome, Subtítulo e Botão com Animação */}
        <div className="w-full md:w-auto flex flex-col items-start md:items-end text-left md:text-right pb-20 md:pb-40 md:-mt-20">
        
        <h1 className="font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-2 ">
            Dr Diego Bruno de Souza pires.        
        </h1>

        <p className="text-xl sm:text-2xl font-light tracking-wide mb-10 text-[#093733]/90">
            trabalho que segue um propósito
        </p>

        {/* Botão */}
        <Link
            href="#conheca-mais"
            className="relative inline-flex items-center justify-center px-8 py-3 text-xl font-light border-[3px] border-[#093733] text-[#093733] overflow-hidden group transition-colors duration-300"
        >
            <span className="absolute inset-0 w-full h-full bg-[#093733] transition-all duration-300 ease-out transform -translate-x-full group-hover:translate-x-0"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            conheça mais
            </span>
        </Link>

        </div>
      </div>
    </section>
  );
}