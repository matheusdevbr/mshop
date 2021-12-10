import { ISideBarProps } from "../../interfaces/interface"
import { ButtonSideBar } from "../ButtonSidebar"
import { Container } from "./style"


export function SideBar({ categorias, handleClickButton, selectedCategoryId }: ISideBarProps) {
    
  return (
    <Container>
        <span>Categorias:</span>

        <div className="buttons-container">
          {categorias.map(categoria => (
            <ButtonSideBar
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