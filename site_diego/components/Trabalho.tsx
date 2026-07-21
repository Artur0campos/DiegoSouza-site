import Image from 'next/image';

export function Trabalho() {
  return (
    <section id="trabalho" className="w-full bg-white text-[#093733] py-16 sm:py-24 px-6 md:px-12 flex justify-center items-center">
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Lado Esquerdo: Título + Texto */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center">
          
          {/* Título: Alan Sans */}
          <h2 className="font-alan font-light text-3xl sm:text-4xl md:text-5xl tracking-wide mb-8">
            Atuação Profissional
          </h2>

          {/* Conteúdo: Montserrat */}
          <p className="font-montserrat font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industrys
            standard dummy text ever since 1966, when designers at
            Letraset and James Mosley, the librarian at St Bride
            Printing Library in London, took a 1914 Cicero translation
            and scrambled it to make dummy text for Letrasets Body
            Type sheets.
          </p>

        </div>

        {/* Lado Direito: Foto no escritório */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-[500px] h-[450px] sm:h-[550px] md:h-[620px]">
            <Image
              src="/assets/diegoTrabalho.jpg"
              alt="Dr. Diego Bruno em seu ambiente de trabalho"
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