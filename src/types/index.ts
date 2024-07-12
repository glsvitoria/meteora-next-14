export interface ICategory {
  nome: string;
  imageSrc: string;
}

export interface IProduct {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  cores: {
    nome: string;
    hexa: string;
  }[];
  tamanho?: string[];
  imageSrc: string;
}

export enum SvgIconName {
  Diamond = "diamond",
  Repeat = "repeat",
  Flower = "flower",
}
