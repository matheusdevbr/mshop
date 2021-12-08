
import { useEffect, useState } from "react";
import { Content } from "./components/Content";
import { SideBar } from "./components/SideBar";
import { ICategoryProps, IProductProps } from "./interfaces/interface";
import { api } from "./services/api";

import { GlobalStyles } from "./styles/global";

export function App() {
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
    api.get<IProductProps[]>(`produtos/?categoria_id=${selectedCategoryId}`).then(response => {
      setProducts(response.data);
    });

    api.get<ICategoryProps>(`categorias/${selectedCategoryId}`).then(response => {
      setSelectedCategory(response.data);
    })
  }, [selectedCategoryId]);

  function handleClickButton(id: number) {
    setSelectedCategoryId(id);
  }
  
  console.log({ selectedCategoryId, categorys, products, selectedCategory})

  return (
    <>
      <GlobalStyles />
      <SideBar 
        categorias={categorys}
        handleClickButton={handleClickButton}
        selectedCategoryId={selectedCategoryId}
      />

      <Content
        produtos={products}
        selectedCategory={selectedCategory} 
      />
    </>
  );
}
