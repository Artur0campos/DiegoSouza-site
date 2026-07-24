import Link from 'next/link';

export function LivrosCta() {
  return (
    <section className="w-full bg-[#093733] py-20 sm:py-28 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block font-montserrat text-xs tracking-[0.3em] uppercase text-[#26BDB0] mb-6">
          Contato
        </span>

        <h2 className="font-alan font-light text-3xl sm:text-4xl md:text-5xl text-white tracking-wide mb-6">
          Tem <span className="text-[#26BDB0]">interesse</span> em algum livro?
        </h2>

        <p className="font-montserrat font-light text-sm sm:text-base text-white/80 leading-relaxed max-w-xl mx-auto mb-10">
          Entre em contato para saber mais sobre as publicações, adquirir
          exemplares ou solicitar autógrafos. O Dr. Diego Bruno estará à
          disposição para atendê-lo.
        </p>

        <Link
          href="/#conteudos"
          className="relative inline-flex items-center justify-center px-10 py-4 text-lg font-alan font-light border-[2px] border-white text-white overflow-hidden group transition-colors duration-300"
        >
          <span className="absolute inset-0 w-full h-full bg-white transition-all duration-300 ease-out transform -translate-x-full group-hover:translate-x-0" />
          <span className="relative z-10 group-hover:text-[#093733] transition-colors duration-300">
            Explorar outros conteúdos
          </span>
        </Link>
      </div>
    </section>
  );
}