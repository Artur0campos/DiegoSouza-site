import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';

interface DevocionalPageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getDevocional(idOrSlug: string) {
  try {
    const url = `${STRAPI_URL}/api/devocionais/${idOrSlug}?populate=*`;
    const res = await fetch(url, { cache: 'no-store' });

    if (!res.ok) {
      const fallbackUrl = `${STRAPI_URL}/api/devocionais?filters[id][$eq]=${idOrSlug}&populate=*`;
      const fallbackRes = await fetch(fallbackUrl, { cache: 'no-store' });
      
      if (!fallbackRes.ok) return null;
      
      const fallbackData = await fallbackRes.json();
      return fallbackData?.data?.[0] || null;
    }

    const data = await res.json();
    return data?.data || null;
  } catch (error) {
    console.error('Erro de conexão com Strapi:', error);
    return null;
  }
}

export default async function DevocionalDetailPage({ params }: DevocionalPageProps) {
  const { slug } = await params;
  const rawDevocional = await getDevocional(slug);

  if (!rawDevocional) {
    notFound();
  }

  const item = rawDevocional?.attributes || rawDevocional;

  const titulo = item?.titulo || 'Sem título';
  const subtitulo = item?.subtitulo || '';
  const texto = item?.texto || ''; 
  const publishedAt = item?.publishedAt || item?.createdAt;

  const coverObj = item?.cover?.data?.attributes || item?.cover;
  const imagemUrl = coverObj?.url || null;

  const dataFormatada = publishedAt
    ? new Date(publishedAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    : '';

  const urlImagem = imagemUrl
    ? imagemUrl.startsWith('http')
      ? imagemUrl
      : `${STRAPI_URL}${imagemUrl}`
    : '/assets/placeholder-devocional.jpg';

  return (
    <article className="min-h-screen bg-[#F7F9F8] text-[#093733] font-alan pb-20">
      <header className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-6 flex items-center justify-between">
        <Link
          href="/devocionais"
          className="flex items-center gap-2 text-[#093733] hover:text-[#26BDB0] transition-colors group font-alan text-lg font-light"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          <span>Voltar para Devocionais</span>
        </Link>
      </header>

      <section className="relative w-full h-[45vh] md:h-[55vh] min-h-[350px] overflow-hidden">
        <Image
          src={urlImagem}
          alt={titulo || 'Imagem do Devocional'}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-24 md:-mt-32 relative z-10">
        <div className="bg-[#F3F3F3] border border-gray-200/60 rounded-sm shadow-xl p-8 sm:p-12 md:p-16">
          {dataFormatada && (
            <div className="text-xs sm:text-sm font-semibold tracking-wider text-[#093733]/70 uppercase mb-4 font-montserrat">
              <span>{dataFormatada}</span>
            </div>
          )}

          <h1 className="font-alan font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#093733] leading-[1.15] mb-6">
            {titulo}
          </h1>

          {subtitulo && (
            <p className="font-montserrat font-light text-base sm:text-lg md:text-xl text-[#093733]/80 leading-relaxed">
              {subtitulo}
            </p>
          )}
        </div>
      </div>

{/* Texto do Devocional */}
      <section className="max-w-3xl mx-auto px-6 sm:px-8 mt-12 sm:mt-16">
        <div className="prose prose-lg prose-[#093733] max-w-none font-montserrat font-light leading-relaxed text-[#093733]/90">
          {typeof texto === 'string' ? (
            // 2. Substitua o dangerouslySetInnerHTML pelo ReactMarkdown
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {texto}
            </ReactMarkdown>
          ) : (
            <p>{subtitulo || 'Conteúdo do devocional...'}</p>
          )}
        </div>
      </section>
    </article>
  );
}