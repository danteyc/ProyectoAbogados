import "./header.scss"
import { Nav } from "../nav/nav"
export function Header(){
    return(
      <header>
        <div className="container header-container">
          <a className="header-logo" href="">logo</a>
          <Nav/>
        </div>
      </header>
    );
  }