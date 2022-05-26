import "./abogado.scss";
import { PushpinOutlined, MailOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import buttonwtp from "../../assets/images/btn-wtp.png";
import { getLawyer } from "../../api/getLawyer";
import ProfilePhoto from "../../assets/images/profile.webp";
import { Rate } from "antd";

export function PageAbogado() {
  const { id } = useParams();
  const [lawyer, setLawyer] = useState({});

  useEffect(() => {
    getLawyer(id)
      .then((response) => {
        setLawyer(response.data.data);
      })
      .catch((e) => {
        console.log(e, "error");
      });
  }, [id]);
  return (
    <div className="container cnt-container">
      <div className="box">
        <div className="panel_izquierdo">
          <div className="imagen">
            <img
              src={`${process.env.REACT_APP_PATH_FILES}/${lawyer.imagen}`}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = ProfilePhoto;
              }}
              width="200px"
              className="foto"
              alt="Imagen"
            />
            <h2 className="lawyer-name">
              Dr. {lawyer?.nombres} {lawyer?.apellidos}
            </h2>
            <h3
              className="abogado-specialty"
              style={{ textTransform: "capitalize" }}
            >
              <span>Especialidad:</span> {lawyer?.especialidad?.descripcion}
            </h3>
          </div>
          <br></br>
          <div className="descripcion">
            <h2>EXPERIENCIA</h2>
            <p>{lawyer?.experiencia}</p>
          </div>

          <div className="resena">
            <h2>RESEÑAS:</h2>
            <div>
              <Rate value={lawyer?.calificaciontotal} className="star" />
            </div>
            <p>Aqui se coloca las opiniones de los clientes</p>
          </div>
        </div>
        <div className="panel_derecho">
          <div className="cita-card">
            <h3 className="cita-card-title">AGENDAR UNA CITA </h3>
            <div className="cita">
              <a href="https://wa.me/51999999999">
                <img src={buttonwtp} alt="logo wasap" className="button-wtp" />
              </a>
            </div>
            <div className="cita cita-city">
              <div className="cita_dato-title">
                <PushpinOutlined className="icon-card" /> Ubicación
              </div>
              <h4 className="cita_dato">{lawyer?.ciudad?.descripcion}</h4>
            </div>
            <div className="cita">
              <div className="cita_dato-title">
                <MailOutlined className="icon-card" /> Correo
              </div>
              <h4 className="cita_dato">{lawyer.email}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
