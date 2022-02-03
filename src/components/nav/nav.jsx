import "./nav.scss"
import { NavLink } from "react-router-dom";


export function Nav(){
    return (
        <nav>
            <ul>
                <li><NavLink to="/contacto">Contacto</NavLink></li>
                <li><NavLink to="/lista-abogados">Lista</NavLink></li>
                <li><NavLink to="/abogado">Abogado</NavLink></li>
                <li><NavLink to="/registro">Registro</NavLink></li>
            </ul>
        </nav>
    )
}