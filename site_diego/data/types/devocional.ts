/**
 * Interfaces TypeScript para a estrutura de dados dos Devocionais.
 * Suporta formatos do Strapi 5 (atributos achatados) e Strapi 4 (wrapper de atributos).
 */

export interface StrapiMediaFormat {
  url: string;
  width?: number;
  height?: number;
}

export interface StrapiMediaAttributes {
  id?: number;
  documentId?: string;
  name?: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  url: string;
  formats?: {
    thumbnail?: StrapiMediaFormat;
    small?: StrapiMediaFormat;
    medium?: StrapiMediaFormat;
    large?: StrapiMediaFormat;
  };
}

// Strapi 5 mídia direta ou Strapi 4 { data: { attributes: ... } }
export type StrapiMediaField =
  | StrapiMediaAttributes
  | { data: { id: number; attributes: StrapiMediaAttributes } | null }
  | null;

export interface DevocionalAttributes {
  id?: number;
  documentId?: string;
  titulo: string;
  subtitulo?: string;
  conteudo?: string;
  texto?: string;
  slug?: string;
  tempoLeitura?: string;
  cover?: StrapiMediaField;
  imagem?: StrapiMediaField;
  data?: string;
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface StrapiEntity<T> {
  id: number;
  documentId?: string;
  attributes?: T;
  [key: string]: unknown;
}

export interface StrapiResponse<T> {
  data: (StrapiEntity<T> & T)[];
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
  error?: {
    status: number;
    name: string;
    message: string;
    details?: Record<string, unknown>;
  };
}

/**
 * Interface normalizada para consumo direto nos componentes React.
 */
export interface DevocionalItem {
  id: string | number;
  titulo: string;
  subtitulo: string;
  conteudo: string;
  slug: string;
  coverUrl: string | null;
  coverAlt?: string;
  dataPublicacao: string;
  tempoLeitura: string;
}
