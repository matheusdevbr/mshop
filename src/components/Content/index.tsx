import { IContentProps } from "../../interfaces/interface";

import { ProductCard } from "../ProductCard";



export function Content({ produtos, selectedCategory}: IContentProps) {
  return(
    <div className="container">
    <header>
      <span className="category">Categoria:<span> {selectedCategory.nome}</span></span>
    </header>

    <main>
      <div className="products-list">
        {produtos.map(product => (
          <ProductCard key ={product.id} nome={product.nome} foto={product.foto}  />
        ))}
      </div>
    </main>
  </div>
  )
}