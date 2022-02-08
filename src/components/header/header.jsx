import "./header.scss"
import { Nav } from "../nav/nav"
import { NavLink } from "react-router-dom"
export function Header(){
    return(
      <header>
        <div className="container header-container">
          <NavLink to="/" className="header-logo">Logo</NavLink>
          <Nav/>
        </div>
      </header>
    );
  }