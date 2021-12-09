import { ISideBarProps } from "../../interfaces/interface"
import { Button } from "../Button"
import { Container } from "./style"


export function SideBar({ categorias, handleClickButton, selectedCategoryId }: ISideBarProps) {
    
  return (
    <Container>
        <span>Categorias:</span>

        <div className="buttons-container">
          {categorias.map(categoria => (
            <Button
              key={String(categoria.id)}
              nome={categoria.nome}
              onClick={() => handleClickButton(categoria.id)}
              selected={selectedCategoryId === categoria.id}
            />
          ))}
        </div>

      
    </Container>
  )
}