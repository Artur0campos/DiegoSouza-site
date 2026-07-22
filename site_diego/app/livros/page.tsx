import { Footer } from "@/components/Footer";

export default function LivrosPage() {
  return (
    <main className="min-h-screen bg-[#093733] text-white font-alan flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-8 py-16 w-full">
        <h1 className="text-4xl sm:text-5xl font-light mb-6">
          Livros do <span className="text-[#26BDB0]">Dr. Diego</span>
        </h1>
        <p className="font-montserrat font-light text-lg max-w-2xl text-white/90">
          Em breve você encontrará aqui todos os livros e publicações.
        </p>
      </div>

      <Footer />
    </main>
  );
}