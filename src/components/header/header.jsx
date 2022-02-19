import "./header.scss"
import { Nav } from "../nav/nav"
import { NavLink } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";

export function Header(){
    const [isActive, setActive] = useState("false");
    const ToggleClass = () => {
      setActive(!isActive); 
     };
    return(
      <header>
        <div className="container header-container">
          <NavLink to="/" className="header-logo">TuAbogado</NavLink>
          <div className="menu-button" onClick={ToggleClass}><MenuOutlined/></div>
          <Nav/>
        </div>
      </header>
    );
  }