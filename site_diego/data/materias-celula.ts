export interface MateriaCelula {
  id: number;
  titulo: string;
  subtitulo: string;
  descricao: string;
  tema: string;
  duracao: string;
  publico: string;
  link: string;
}

export const materiasCelula: MateriaCelula[] = [
  {
    id: 1,
    titulo: 'Identidade em Cristo',
    subtitulo: 'Quem sou eu à luz da Palavra',
    descricao:
      'Uma jornada profunda sobre o que significa ser filho de Deus em todos os aspectos da vida. Esta matéria guia os participantes a descobrir e viver a identidade que Cristo nos deu, superando inseguranças e crenças limitantes.',
    tema: 'Identidade',
    duracao: '4 encontros',
    publico: 'Jovens e adultos',
    link: '#',
  },
  {
    id: 2,
    titulo: 'Família segundo o Projeto de Deus',
    subtitulo: 'Relacionamentos à luz do Reino',
    descricao:
      'Este material explora o propósito eterno da família desde a criação, abordando temas como casamento, parentalidade, reconciliação e a família como reflexo da Igreja de Cristo. Ideal para grupos de casais ou células familiares.',
    tema: 'Família',
    duracao: '6 encontros',
    publico: 'Casais e famílias',
    link: '#',
  },
  {
    id: 3,
    titulo: 'Propósito e Vocação',
    subtitulo: 'Descobrindo o chamado de Deus',
    descricao:
      'Uma matéria transformadora que auxilia os membros a identificar os dons, talentos e o chamado divino em suas vidas. Com base em textos bíblicos e reflexões práticas, os participantes são encorajados a viver com intencionalidade.',
    tema: 'Propósito',
    duracao: '5 encontros',
    publico: 'Todos os públicos',
    link: '#',
  },
  {
    id: 4,
    titulo: 'Fé que Transforma',
    subtitulo: 'Vivendo o Evangelho no cotidiano',
    descricao:
      'Material voltado para a integração da fé com o dia a dia profissional, social e espiritual. Aborda como o discípulo pode impactar sua comunidade ao viver de forma autêntica e comprometida com os valores do Reino.',
    tema: 'Fé e Vida',
    duracao: '4 encontros',
    publico: 'Adultos',
    link: '#',
  },
];
