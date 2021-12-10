import { useEffect, useState } from "react";
import { Content } from "../../components/Content";
import { SideBar } from "../../components/SideBar";
import { ICategoryProps, IProductProps } from "../../interfaces/interface";
import { api } from "../../services/api";

import { Container } from "./style";


export function Home() {
const [selectedCategoryId, setSelectedCategoryId] = useState(1);

  const [categorys, setCategorys] = useState<ICategoryProps[]>([]);
  const [products, setProducts] = useState<IProductProps[]>([]);
  
  const [selectedCategory, setSelectedCategory] = useState<ICategoryProps>({} as ICategoryProps);

  useEffect(() => {
    api.get<ICategoryProps[]>('categorias').then(response => {
      setCategorys(response.data);
    });
  }, []); 

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<IProductProps[]>(`produtos/?categoria_id=${selectedCategoryId}`)
 
      setProducts(response.data);
    }

    api.get<ICategoryProps>(`categorias/${selectedCategoryId}`).then(response => {
      setSelectedCategory(response.data);
      
    })
    
    loadProducts();
  }, [selectedCategoryId]);

  function handleClickButton(id: number) {
    setSelectedCategoryId(id);
  }
  
  

  return (
    <Container>
      <SideBar 
        categorias={categorys}
        handleClickButton={handleClickButton}
        selectedCategoryId={selectedCategoryId}
      />

      <Content
        produtos={products}
        selectedCategory={selectedCategory} 
      />
    </Container>
  );
}
