import { IContentProps } from "../../interfaces/interface";

import { ProductCard } from "../ProductCard";
import { Container } from "./style";



export function Content({ produtos }: IContentProps) {
  return(
    
      <Container>
       
        {produtos.map(product => (
          <ProductCard 
          key={product.nome} 
          nome={product.nome} 
          foto={product.foto} 
          id={product.id} 
          preco={product.preco} 
          descricao={product.descricao}
          categoria_id={product.categoria_id}
          />
        ))}
      </Container>
  
  )
}