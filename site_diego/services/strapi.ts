import {
  DevocionalAttributes,
  DevocionalItem,
  StrapiMediaField,
  StrapiResponse,
} from '@/data/types/devocional';

const STRAPI_BASE_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

const STRAPI_TOKEN =
  process.env.STRAPI_API_TOKEN || process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

/**
 * Retorna a URL completa para mídias hospedadas no Strapi.
 */
export function getStrapiMediaUrl(url: string | null | undefined): string | null {
  if (!url) return null;
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  return `${STRAPI_BASE_URL}${url.startsWith('/') ? '' : '/'}${url}`;
}

/**
 * Extrai a URL bruta de um campo de mídia do Strapi (suporta Strapi 5 e Strapi 4).
 */
function extractMediaUrl(media: StrapiMediaField | undefined): { url: string | null; alt: string | undefined } {
  if (!media) return { url: null, alt: undefined };

  // Strapi 5 (campo direto na mídia)
  if ('url' in media && typeof media.url === 'string') {
    return {
      url: media.url,
      alt: media.alternativeText,
    };
  }

  // Strapi 4 (wrapper data -> attributes -> url)
  if ('data' in media && media.data && 'attributes' in media.data) {
    return {
      url: media.data.attributes.url || null,
      alt: media.data.attributes.alternativeText,
    };
  }

  return { url: null, alt: undefined };
}

/**
 * Dados mockados para fallback durante o desenvolvimento caso o Strapi esteja offline.
 */
export const mockDevocionais: DevocionalItem[] = [
  {
    id: 1,
    titulo: 'Integridade nos Pequenos Começos',
    subtitulo: 'Como manter a fidelidade e a virtude na jornada profissional diária',
    conteudo:
      'A verdadeira grandeza na caminhada cristã não é medida por grandes palcos ou aplausos públicos, mas pela fidelidade silenciosa nos detalhes do dia a dia. Quando aplicamos o temor do Senhor nas pequenas decisões, construímos um alicerce inabalável.',
    slug: 'integridade-nos-pequenos-comecos',
    coverUrl: null,
    coverAlt: 'Capa do devocional sobre integridade',
    dataPublicacao: '20 de julho de 2026',
    tempoLeitura: '4 min de leitura',
  },
  {
    id: 2,
    titulo: 'A Justiça que Procede da Fé',
    subtitulo: 'Reflexões sobre ética, retidão e o papel do cristão na sociedade',
    conteudo:
      'Muitas vezes confundimos justiça humana com vingança ou rígido legalismo. A justiça divina, por sua vez, é impregnada de misericórdia, verdade e restauração. Buscar essa justiça exige humildade e constante alinhamento com os mandamentos bíblicos.',
    slug: 'a-justica-que-procede-da-fe',
    coverUrl: null,
    coverAlt: 'Capa do devocional sobre justiça',
    dataPublicacao: '15 de julho de 2026',
    tempoLeitura: '5 min de leitura',
  },
  {
    id: 3,
    titulo: 'Firmados na Rocha da Verdade',
    subtitulo: 'Construindo fundamentos espirituais para enfrentar momentos de crise',
    conteudo:
      'Em tempos de incerteza e pressões culturais, a Palavra de Deus permanece imutável. Como o construtor prudente que edifica sobre a rocha, o discípulo de Cristo encontra refúgio e clareza para tomar decisões difíceis no secreto da oração.',
    slug: 'firmados-na-rocha-da-verdade',
    coverUrl: null,
    coverAlt: 'Capa do devocional sobre firmeza espiritual',
    dataPublicacao: '10 de julho de 2026',
    tempoLeitura: '3 min de leitura',
  },
  {
    id: 4,
    titulo: 'Sabedoria para Liderar com Servidão',
    subtitulo: 'O exemplo de Cristo na liderança transformadora e ética',
    conteudo:
      'Liderar segundo os princípios do Evangelho é inverter as lógicas de poder do mundo. Quem deseja ser o primeiro deve ser o servo de todos. A verdadeira autoridade nasce do amor, do serviço ao próximo e do compromisso inegociável com a verdade.',
    slug: 'sabedoria-para-liderar-com-servidao',
    coverUrl: null,
    coverAlt: 'Capa do devocional sobre liderança',
    dataPublicacao: '02 de julho de 2026',
    tempoLeitura: '6 min de leitura',
  },
  {
    id: 5,
    titulo: 'A Paz que Excede Todo Entendimento',
    subtitulo: 'Mantendo o descanso interior em meio à correria e desafios diários',
    conteudo:
      'Não estejais ansiosos por coisa alguma. A promessa da paz de Deus é uma guarda para os nossos corações e mentes. Quando entregamos nossas causas ao Senhor com gratidão, a tempestade interior se dissipa diante da Sua presença.',
    slug: 'a-paz-que-excede-todo-entendimento',
    coverUrl: null,
    coverAlt: 'Capa do devocional sobre paz interior',
    dataPublicacao: '25 de junho de 2026',
    tempoLeitura: '4 min de leitura',
  },
  {
    id: 6,
    titulo: 'Vocação, Trabalho e Glória de Deus',
    subtitulo: 'Encontrando propósito eterno no cumprimento diário do seu chamado',
    conteudo:
      'Seja na advocacia, no ensino ou no lar, todo trabalho honesto realizado para a glória de Deus se torna um ato de adoração. Nossa vocação é o palco onde a graça de Deus se manifesta ao mundo por meio da excelência e do caráter.',
    slug: 'vocacao-trabalho-e-gloria-de-deus',
    coverUrl: null,
    coverAlt: 'Capa do devocional sobre vocação',
    dataPublicacao: '18 de junho de 2026',
    tempoLeitura: '5 min de leitura',
  },
];

/**
 * Normaliza um item do Strapi (5 ou 4) para a interface limpa DevocionalItem.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function normalizeDevocional(item: any): DevocionalItem {
  // Suporta Strapi 5 (atributos no próprio objeto) e Strapi 4 (objeto attributes)
  const attr: DevocionalAttributes = item.attributes ? item.attributes : item;
  const id = item.id || item.documentId || Math.random();

  // Mídia de capa
  const mediaObj = attr.cover || attr.imagem;
  const { url: rawUrl, alt } = extractMediaUrl(mediaObj);
  const coverUrl = getStrapiMediaUrl(rawUrl);

  // Conteúdo e resumo
  const conteudo = attr.texto || attr.conteudo || '';
  const subtitulo = attr.subtitulo || (conteudo ? `${conteudo.replace(/<[^>]*>?/gm, '').slice(0, 140)}...` : '');

  // Data formatada
  const rawData = attr.data || attr.publishedAt || attr.createdAt || new Date().toISOString();
  const dataFormatada = new Date(rawData).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  // Slug
  const slug = attr.slug || `devocional-${id}`;

  return {
    id,
    titulo: attr.titulo || 'Devocional sem título',
    subtitulo,
    conteudo,
    slug,
    coverUrl,
    coverAlt: alt || attr.titulo,
    dataPublicacao: dataFormatada,
    tempoLeitura: attr.tempoLeitura || '4 min de leitura',
  };
}

/**
 * Busca a lista de devocionais no Strapi (http://localhost:1337/api/devocionais).
 * Suporta autenticação por Token de API se fornecido.
 * Se o Strapi estiver offline ou retornar erro, utiliza o fallback mockado.
 */
export async function getDevocionais(): Promise<DevocionalItem[]> {
  try {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (STRAPI_TOKEN) {
      headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`;
    }

    const endpoint = `${STRAPI_BASE_URL}/api/devocionais?populate=*&sort=createdAt:desc`;
    
    const res = await fetch(endpoint, {
      next: { revalidate: 60 },
      headers,
    });

    if (res.status === 403 || res.status === 401) {
      console.warn(
        `[Strapi Integration] Endpoint ${endpoint} retornou HTTP ${res.status}. ` +
          `Certifique-se de habilitar as permissões de leitura (find/findOne) para a Role "Public" no Admin do Strapi ` +
          `(Settings > Users & Permissions Plugin > Roles > Public > Devocional), ou defina a variável STRAPI_API_TOKEN no .env.local.`
      );
      return mockDevocionais;
    }

    if (!res.ok) {
      console.warn(`[Strapi Integration] HTTP Error ${res.status} ao conectar com ${endpoint}. Usando fallback.`);
      return mockDevocionais;
    }

    const data: StrapiResponse<DevocionalAttributes> = await res.json();

    if (!data || !data.data || !Array.isArray(data.data) || data.data.length === 0) {
      console.info('[Strapi Integration] Nenhum item retornado do Strapi. Usando fallback.');
      return mockDevocionais;
    }

    return data.data.map(normalizeDevocional);
  } catch (error) {
    console.warn('[Strapi Integration] Erro ao conectar ao Strapi (http://localhost:1337). Usando fallback.', error);
    return mockDevocionais;
  }
}

/**
 * Busca um devocional específico por slug no Strapi.
 */
export async function getDevocionalBySlug(slug: string): Promise<DevocionalItem | null> {
  try {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (STRAPI_TOKEN) {
      headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`;
    }

    const endpoint = `${STRAPI_BASE_URL}/api/devocionais?filters[slug][$eq]=${slug}&populate=*`;
    const res = await fetch(endpoint, { next: { revalidate: 60 }, headers });

    if (!res.ok) return mockDevocionais.find((d) => d.slug === slug) || null;

    const data: StrapiResponse<DevocionalAttributes> = await res.json();
    if (data.data && data.data.length > 0) {
      return normalizeDevocional(data.data[0]);
    }

    return mockDevocionais.find((d) => d.slug === slug) || null;
  } catch {
    return mockDevocionais.find((d) => d.slug === slug) || null;
  }
}
