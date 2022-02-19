import "./abogado.scss";
import { StarOutlined, StarFilled,PushpinOutlined,MailOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import buttonwtp from "../../assets/images/btn-wtp.png"

export function PageAbogado() {
  const { id } = useParams();
  const [lawyer, setLawyer] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3000/lawyers/${id}`).then((response) => {
      setLawyer(response.data);
    });
  }, [id]);
  return (
    <div className="container cnt-container">
      <div className="box">
        <div className="panel_izquierdo">
          <div className="imagen">
            <img className="foto" src={lawyer.photo} width="200px" alt="" />
            <h2 className="lawyer-name">Dr. {lawyer.name} {lawyer.lastname}</h2>
            <h3 className="abogado-specialty"><span>Especialidad:</span> {lawyer.specialty}</h3>
          </div>
          <br></br>
          <div className="descripcion">
            <h2>EXPERIENCIA</h2>
            <p>
              Profesional con años de experiencia comprobada con estudios de
              Maestría en Ciencias Contables y Financieras con mención de
              Auditoria y Gestión Tributaria y Estudios de Especialización en
              Auditoria Tributaria, Peritaje Contable y Contrataciones y
              Adquisiciones del Estado, conoce perfectamente los problemas
              tributarios, contables y laborales, en el ambito privado y en la
              administración pública, quien asumirá con énfasis y
              responsabilidad toda dificultad en sus deberes para con el estado,
              evitando perjuicios en su bienestar patrimonial y capital social.
            </p>
          </div>

          <div className="resena">
            <h2>RESEÑAS:</h2>
            <div>
              <StarFilled className="star" />
              <StarFilled className="star" />
              <StarFilled className="star" />
              <StarFilled className="star" />
              <StarOutlined className="star" />
            </div>
            <p>Aqui se coloca las opiniones de los clientes</p>
          </div>
        </div>
        <div className="panel_derecho">
          <div className="cita-card">
            <h3 className="cita-card-title">AGENDAR UNA CITA </h3>
            <div className="cita">
              <a href="https://wa.me/51999999999">
                <img src={buttonwtp} alt="logo wasap" className="button-wtp"/>
              </a>
            </div>
            <div className="cita cita-city">
              <div className="cita_dato-title"><PushpinOutlined className="icon-card" /> Ubicación</div>
              <h4 className="cita_dato">{lawyer.city}</h4>
            </div>
            <div className="cita">
              <div className="cita_dato-title"><MailOutlined className="icon-card"/> Correo</div>
              <h4 className="cita_dato">{lawyer.email}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
