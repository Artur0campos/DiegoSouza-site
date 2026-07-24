export interface Livro {
  id: number;
  titulo: string;
  subtitulo: string;
  descricao: string;
  ano: string;
  paginas: string;
  editora: string;
  imagem: string;
  link: string;
}

export const livros: Livro[] = [
  {
    id: 1,
    titulo: 'Fé e Propósito na Advocacia',
    subtitulo: 'Reflexões sobre carreira e fé',
    descricao:
      'Uma obra que entrelaça os princípios da fé cristã com a prática jurídica, mostrando como o propósito divino pode nortear a atuação profissional de advogados comprometidos com a justiça e a verdade.',
    ano: '2024',
    paginas: '248',
    editora: 'Editora Vida',
    imagem: '/assets/livro-fe-proposito.png',
    link: '#',
  },
  {
    id: 2,
    titulo: 'Justiça com Humanidade',
    subtitulo: 'Direito e valores cristãos',
    descricao:
      'Neste livro, o Dr. Diego Bruno explora a interseção entre a justiça terrena e os valores do Reino, apresentando perspectivas sobre como a dignidade humana deve ser o centro de toda atuação jurídica.',
    ano: '2023',
    paginas: '312',
    editora: 'Editora Vida',
    imagem: '/assets/livro-justica-humanidade.png',
    link: '#',
  },
  {
    id: 3,
    titulo: 'Caminhos de um Advogado',
    subtitulo: 'Trajetória profissional e espiritual',
    descricao:
      'Uma narrativa autobiográfica que revela os bastidores de uma carreira jurídica guiada pela fé, com lições práticas sobre perseverança, ética e o chamado para servir através do Direito.',
    ano: '2022',
    paginas: '196',
    editora: 'Editora Vida',
    imagem: '/assets/livro-caminhos-advogado.png',
    link: '#',
  },
];