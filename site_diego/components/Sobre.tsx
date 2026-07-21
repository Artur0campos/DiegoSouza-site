import Image from 'next/image';

export function SobreMim() {
  return (
    <section id="sobre-mim" className="w-full bg-[#093733] text-white py-16 sm:py-24 px-6 md:px-12 flex justify-center items-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Lado Esquerdo: Imagem com proporção preservada */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="relative w-full max-w-[480px] h-[450px] sm:h-[550px] md:h-[600px]">
            <Image
              src="/assets/diegoSobre.jpg"
              alt="Dr. Diego Bruno de Souza"
              fill
              priority
              className="object-cover object-center rounded-sm"
            />
          </div>
        </div>

        {/* Lado Direito: Título + Textos centralizados */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center">
          
          {/* Título: Alan Sans */}
          <h2 className="font-alan font-light text-3xl sm:text-4xl md:text-5xl tracking-wide mb-8">
            Sobre mim
          </h2>

          {/* Conteúdo: Montserrat */}
          <div className="font-montserrat font-light text-sm sm:text-base leading-relaxed space-y-6 max-w-xl text-white/95">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy
              text ever since 1966, when designers at Letraset and James
              Mosley, the librarian at St Bride Printing Library in London,
              took a 1914 Cicero translation and scrambled it to make dummy
              text for Letrases Body Type sheets.
            </p>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy
              text ever since 1966, when designers at Letraset and James
              Mosley, the librarian at St Bride Printing Library in London,
              took a 1914 Cicero translation and scrambled it to make dummy
              text for Letrasets Body Type sheets.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}