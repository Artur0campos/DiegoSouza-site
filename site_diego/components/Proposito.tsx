export function Proposito() {
  return (
    <section id="proposito" className="w-full bg-white py-24 px-6 md:px-12 flex justify-center items-center">
      <div className="max-w-4xl w-full flex flex-col items-center text-center">
        
        {/* Título: Alan Sans + palavra "vida" em #26BDB0 */}
        <h2 className="font-alan font-light text-3xl sm:text-4xl md:text-5xl text-[#093733] tracking-wide mb-12">
          Uma <span className="text-[#26BDB0]">vida</span> com Propósito
        </h2>

        {/* Texto Central: Montserrat + Cor verde escura #093733 */}
        <p className="font-montserrat font-light text-base sm:text-lg md:text-xl text-[#093733] leading-relaxed max-w-3xl mb-12">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since 1966,
          when designers at Letraset and James Mosley, the librarian at St Bride
          Printing Library in London, took a 1914 Cicero translation and scrambled
          it to make dummy text for Letrasets Body Type sheets.
        </p>

        {/* Assinatura no canto inferior direito do bloco */}
        <div className="w-full max-w-3xl flex justify-end">
          <span className="font-cursive text-2xl sm:text-3xl text-[#093733] tracking-wider">
            Diego Bruno de Souza Pires
          </span>
        </div>

      </div>
    </section>
  );
}