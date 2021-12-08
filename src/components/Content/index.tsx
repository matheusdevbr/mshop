import { IContentProps } from "../../interfaces/interface";

import { ProductCard } from "../ProductCard";
import { Container } from "./style";



export function Content({ produtos, selectedCategory}: IContentProps) {
  return(
    <div className="container">
    <header>
      <span className="category"><span> {selectedCategory.nome}</span></span>
    </header>

    <main>
      <Container>
       
        {produtos.map(product => (
          <ProductCard key ={product.id} nome={product.nome} foto={product.foto} id={product.id} preco={product.preco}  />
        ))}
      </Container>
    </main>
  </div>
  )
}