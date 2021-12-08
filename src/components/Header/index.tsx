import { Link } from "react-router-dom";

export function Header() {
  return(
    <>
    <Link to="/"><button>home</button></Link>
    <Link to="/cart">
    <button >vcarinho</button>
      </Link>
      </>
  )
}