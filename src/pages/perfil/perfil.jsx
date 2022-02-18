import "./perfil.scss";
import { StarOutlined,StarFilled } from "@ant-design/icons";

export function PagePerfil() {
  return (
    <div className="container">
      <div className="perfil">
        <div className="perfil-left">
          <div className="foto-perfil">
            <figure>
              <img
                src="https://abogadoboyerflorida.com/wp-content/uploads/2020/10/abogado-francis-m-boyer-300x300.jpg"
                alt=""
              />
            </figure>
          </div>
        </div>
        <div className="perfil-right">
          <h1>Carlos Gonzalez</h1>
          <h2>Especialidad: Penal</h2>
          <div className="valoracion">
            <StarFilled className="star" />
            <StarFilled className="star" />
            <StarFilled className="star" />
            <StarFilled className="star" />
            <StarOutlined className="star"/>
          </div>
        </div>
      </div>
    </div>
  );
}
