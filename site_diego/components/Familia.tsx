import Image from 'next/image';

export function Familia() {
  return (
    <section id="familia" className="relative w-full py-16 sm:py-24 px-6 md:px-12 flex justify-center items-center overflow-hidden">
      {/* Textura de fundo suave (a mesma textura da Hero) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/cement-texture.jpg"
          alt="Textura de fundo"
          fill
          className="object-cover object-center opacity-90"
        />
      </div>

      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Lado Esquerdo: Título + Texto centralizado no próprio bloco */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center">
          
          {/* Título: Alan Sans + palavra "tesouro" em #26BDB0 */}
          <h2 className="font-alan font-light text-3xl sm:text-4xl md:text-5xl text-[#093733] tracking-wide mb-8">
            Meu <span className="text-[#26BDB0]">tesouro</span> na terra
          </h2>

          {/* Conteúdo: Montserrat */}
          <p className="font-montserrat font-light text-sm sm:text-base md:text-lg text-[#093733] leading-relaxed max-w-lg">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industrys
            standard dummy text ever since 1966, when designers at
            Letraset and James Mosley, the librarian at St Bride
            Printing Library in London, took a 1914 Cicero translation
            and scrambled it to make dummy text for Letrasets Body
            Type sheets.
          </p>

        </div>

        {/* Lado Direito: Foto da Família */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-[500px] h-[450px] sm:h-[550px] md:h-[620px]">
            <Image
              src="/assets/familia.png"
              alt="Família do Dr. Diego Bruno"
              fill
              priority
              className="object-cover object-center shadow-sm rounded-sm"
            />
          </div>
        </div>

      </div>
    </section>
  );
}