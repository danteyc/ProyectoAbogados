import "./abogado.scss";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import wasap from "../../assets/images/wasap2.png";
import ubicacion from "../../assets/images/ubicacion.png";
import mail from "../../assets/images/mail.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export function PageAbogado() {
  const { id } = useParams();
  const [lawyer, setLawyer] = useState({});

  useEffect(() => {
    axios.get("http://localhost:3000/lawyers").then((response) => {
      setLawyer(response.data[id - 1]);
    });
  }, [id]);
  return (
    <div className="container cnt-container">
      <div className="box">
        <div className="panel_izquierdo">
          <div className="imagen">
            <img className="foto" src={lawyer.photo} width="200px" alt="" />
            <h2 >Dr. {lawyer.name}</h2>
            <h3 >ESPECIALIDAD: {lawyer.specialty}</h3>
            <h3 >{lawyer.gender}</h3>
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
              administración pública, quien asumirá con énfasis y responsabilidad
              toda dificultad en sus deberes para con el estado, evitando
              perjuicios en su bienestar patrimonial y capital social.
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
          <h1>AGENDAR UNA CITA </h1>
          <div className="cita">
            <img src={wasap} width="30px" alt="logo wasap" />
            <h2 className="cita_dato">999 999 9998</h2>
          </div>
          <div className="cita">
            <img src={ubicacion} width="30px" alt="logo ubicacion" />
            <h2 className="cita_dato">{lawyer.city}</h2>
          </div>
          <div className="cita">
            <img src={mail} width="30px" alt="logo mail" />
            <h2 className="cita_dato">{lawyer.email}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
