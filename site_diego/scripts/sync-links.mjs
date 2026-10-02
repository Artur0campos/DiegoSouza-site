import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const linksTxtPath = path.join(rootDir, 'links.txt');
const outputPath = path.join(rootDir, 'data', 'palestras-links.ts');
const publicOutputPath = path.join(rootDir, 'public', 'links.txt');

let links = [];

if (fs.existsSync(linksTxtPath)) {
  const content = fs.readFileSync(linksTxtPath, 'utf-8');
  links = content
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  // Copia também para public/links.txt para acesso como ativo estático
  try {
    fs.copyFileSync(linksTxtPath, publicOutputPath);
  } catch (err) {
    console.warn('[sync-links] Aviso: não foi possível copiar para public/links.txt', err);
  }
}

if (links.length === 0) {
  links = ['https://www.youtube.com/live/6-38Gi4r794?si=3mnnYm8O4thnts4u'];
}

const fileContent = `// Arquivo gerado automaticamente pelo script sync-links.mjs
// Garante que os links de palestras estejam embutidos no bundle JS para Cloudflare Workers / produção
export const DEFAULT_PALESTRAS_LINKS: string[] = ${JSON.stringify(links, null, 2)};
`;

fs.writeFileSync(outputPath, fileContent, 'utf-8');
console.log(`[sync-links] Sincronizados ${links.length} links para ${outputPath}`);
