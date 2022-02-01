import "./header.scss"
import { Nav } from "../nav/nav"
export function Header(){
    return(
      <header>
        <div class="container header-container">
          <a class="header-logo" href="">logo</a>
          <Nav/>
        </div>
      </header>
    );
  }