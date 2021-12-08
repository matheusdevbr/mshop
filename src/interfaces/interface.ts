import { ButtonHTMLAttributes } from 'react';

export interface ICategoryProps {
    id: number;
    nome: 'Video Games' | 'Smarthphones' | 'Outros';
  }

export interface IProductProps {
 id: number;
 nome: string;
 descricao: string;
 preco: number;
 foto: string;
 categoria_id: number;
 amount: number;
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  nome: string;
  selected: boolean;
}

export interface IProductCardProps {
  nome: string;
  foto: string;
  id: number;
  preco: number;

}
export interface ISideBarProps {
  categorias: ICategoryProps[]
  handleClickButton: Function
  selectedCategoryId: number
}

export interface IContentProps {
  produtos: IProductProps[];
  selectedCategory: ICategoryProps;
}