import "./nav.scss";
import { NavLink } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


export function Nav() {
  const history = useHistory();
  const dispatch = useDispatch();
  const name = useSelector((state)=> state.name);
  const isLogin = useSelector((state)=> state.isLogin);
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <NavLink to="/perfil">Perfil</NavLink>
      </Menu.Item>
      <Menu.Item key="1">
        <NavLink to="/editar-perfil">Editar Perfil</NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to="/"
        onClick={(e)=>{
          e.preventDefault();
          dispatch({
            type: "SET_IS_LOGIN",
            payload: false,
          });
          dispatch({
            type: "SET_NAME",
            payload: null,
          });
          dispatch({
            type: "SET_ID",
            payload: null,
          });
          history.push("/iniciar-sesion")
        }}>Cerrar Sesión</NavLink>
      </Menu.Item>
    </Menu>
  );
  
  
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/contacto">Contacto</NavLink>
        </li>
        <li>
          <NavLink to="/abogados/todos/todos">Abogados</NavLink>
        </li>
        <li>
          <NavLink to="/registro">Registro</NavLink>
        </li>
        {name ? (
          <li>
            <Dropdown overlay={menu} trigger={["click"]}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                {name} <DownOutlined />
              </a>
            </Dropdown>
          </li>
        ) : (
          <li>
            <NavLink to="/iniciar-sesion">Iniciar Sesión</NavLink>
          </li>
        )
        }
      </ul>
    </nav>
  );
}
