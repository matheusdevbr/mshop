import { ISideBarProps } from "../../interfaces/interface"
import { Button } from "../Button"


export function SideBar({ categorias, handleClickButton, selectedCategoryId }: ISideBarProps) {
  
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <nav className="sidebar">
        <span>Nome da aplicação</span>

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

      </nav>
    </div>
  )
}