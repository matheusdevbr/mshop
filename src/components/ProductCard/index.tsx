import { IProductCardProps } from "../../interfaces/interface";

export function ProductCard(props: IProductCardProps) {
  return (
    <div className="movie-card">
      {<img
        src={props.foto}
        alt={props.nome}
      />}

      <div>
        <div className="movie-info">
          <span>{props.nome}</span>
          <div className="meta">
           
          </div>
        </div>
      </div>
    </div>
  )
}