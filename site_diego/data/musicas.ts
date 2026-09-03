export interface Musica {
  id: number;
  titulo: string;
  arquivo: string;
  descricao?: string;
}

export const musicas: Musica[] = [
  {
    id: 1,
    titulo: 'As Pressões do Mundo',
    arquivo: '/assets/musicas/as-pressoes-do-mundo.mp3',
    descricao: 'Uma reflexão musical sobre as tribulações da vida',
  },
  {
    id: 2,
    titulo: 'Deus te Fez pra Mim',
    arquivo: '/assets/musicas/deus-te-fez-pra-mim.mp3',
    descricao: 'Amor e propósito que vêm do alto',
  },
  {
    id: 3,
    titulo: 'Do Jeito que Você Sabia Amar',
    arquivo: '/assets/musicas/do-jeito-que-voce-sabia-amar.mp3',
    descricao: 'Uma homenagem ao amor verdadeiro',
  },
  {
    id: 4,
    titulo: 'Maria Giulia – Flor do Meu Jardim',
    arquivo: '/assets/musicas/maria-giulia-flor-do-meu-jardim.mp3',
    descricao: 'Canção dedicada à filha amada',
  },
  {
    id: 5,
    titulo: 'Meu Pequeno Dã',
    arquivo: '/assets/musicas/meu-pequeno-da.mp3',
    descricao: 'Amor paterno em forma de melodia',
  },
  {
    id: 6,
    titulo: 'O Presente – Teteu',
    arquivo: '/assets/musicas/o-presente-teteu.mp3',
    descricao: 'Gratidão pelo presente que a vida oferece',
  },
  {
    id: 7,
    titulo: 'Olhe para o Céu',
    arquivo: '/assets/musicas/olhe-para-o-ceu.mp3',
    descricao: 'Um convite à esperança e à fé',
  },
  {
    id: 8,
    titulo: 'Pedrito',
    arquivo: '/assets/musicas/pedrito.mp3',
    descricao: 'Carinho e afeto em cada nota',
  },
  {
    id: 9,
    titulo: 'Presente de Deus',
    arquivo: '/assets/musicas/presente-de-deus.mp3',
    descricao: 'Celebração dos dons que recebemos',
  },
  {
    id: 10,
    titulo: 'Tudo pra Mim',
    arquivo: '/assets/musicas/tudo-pra-mim.mp3',
    descricao: 'Declaração de amor e gratidão',
  },
];
