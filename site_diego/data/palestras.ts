import { readFileSync } from 'fs';
import path from 'path';

export interface Palestra {
  id: string;
  youtubeId: string;
  url: string;
}

function extractYouTubeId(url: string): string | null {
  try {
    const urlObj = new URL(url.trim());
    // Formatos aceitos:
    // youtube.com/watch?v=ID
    // youtube.com/live/ID
    // youtu.be/ID
    if (urlObj.hostname.includes('youtu.be')) {
      return urlObj.pathname.replace('/', '');
    }
    // /live/ID
    const liveMatch = urlObj.pathname.match(/\/live\/([^/?&]+)/);
    if (liveMatch) return liveMatch[1];
    // ?v=ID
    return urlObj.searchParams.get('v');
  } catch {
    return null;
  }
}

// Leitura em build-time: lemos o links.txt durante a compilação do servidor (RSC)
export async function getPalestras(): Promise<Palestra[]> {
  const filePath = path.join(process.cwd(), 'links.txt');
  let raw: string;
  try {
    raw = readFileSync(filePath, 'utf-8');
  } catch {
    return [];
  }

  const lines = raw.split('\n').map((l) => l.trim()).filter(Boolean);

  const palestras: Palestra[] = [];
  for (const line of lines) {
    const youtubeId = extractYouTubeId(line);
    if (!youtubeId) continue;
    palestras.push({
      id: youtubeId,
      youtubeId,
      url: line,
    });
  }

  return palestras;
}
