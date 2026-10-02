import { DEFAULT_PALESTRAS_LINKS } from './palestras-links';

export interface Palestra {
  id: string;
  youtubeId: string;
  url: string;
  originalUrl?: string;
}

export function extractYouTubeId(url: string): string | null {
  if (!url) return null;
  const trimmed = url.trim();

  // Caso seja diretamente o ID do YouTube com 11 caracteres
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }

  try {
    const urlStr = trimmed.startsWith('http://') || trimmed.startsWith('https://')
      ? trimmed
      : `https://${trimmed}`;
    const urlObj = new URL(urlStr);

    // Formatos:
    // youtu.be/ID
    if (urlObj.hostname.includes('youtu.be')) {
      const part = urlObj.pathname.split('/').filter(Boolean)[0];
      return part || null;
    }

    // /live/ID
    const liveMatch = urlObj.pathname.match(/\/live\/([^/?&]+)/);
    if (liveMatch) return liveMatch[1];

    // /shorts/ID
    const shortsMatch = urlObj.pathname.match(/\/shorts\/([^/?&]+)/);
    if (shortsMatch) return shortsMatch[1];

    // /embed/ID
    const embedMatch = urlObj.pathname.match(/\/embed\/([^/?&]+)/);
    if (embedMatch) return embedMatch[1];

    // ?v=ID
    const vParam = urlObj.searchParams.get('v');
    if (vParam) return vParam;

    return null;
  } catch {
    return null;
  }
}

/**
 * Retorna as palestras cadastradas.
 * No ambiente local/Node, tenta ler o links.txt dinamicamente para refletir edições imediatas.
 * Em produção (Cloudflare Workers/Edge), utiliza a lista embutida DEFAULT_PALESTRAS_LINKS
 * gerada no build, eliminando falhas de leitura de disco inexistente no worker.
 */
export async function getPalestras(): Promise<Palestra[]> {
  let lines: string[] = [];

  try {
    const fs = await import('fs');
    const path = await import('path');
    const filePath = path.join(process.cwd(), 'links.txt');
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, 'utf-8');
      lines = raw.split('\n').map((l) => l.trim()).filter(Boolean);
    }
  } catch {
    // Ambiente sem suporte a fs ou sem arquivo (ex: Cloudflare Workers)
  }

  // Se não foi possível ler do disco ou estiver vazio, usa os links embutidos no bundle
  if (lines.length === 0) {
    lines = DEFAULT_PALESTRAS_LINKS;
  }

  const palestras: Palestra[] = [];
  const seenIds = new Set<string>();

  for (const line of lines) {
    const youtubeId = extractYouTubeId(line);
    if (!youtubeId || seenIds.has(youtubeId)) continue;
    seenIds.add(youtubeId);

    palestras.push({
      id: youtubeId,
      youtubeId,
      // URL canônica de visualização no YouTube para garantir direcionamento sem falhas
      url: `https://www.youtube.com/watch?v=${youtubeId}`,
      originalUrl: line,
    });
  }

  return palestras;
}
