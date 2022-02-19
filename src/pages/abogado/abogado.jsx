import "./abogado.scss";
import { StarOutlined,StarFilled } from "@ant-design/icons";
import wasap from "../../assets/images/wasap2.png"
import ubicacion from "../../assets/images/ubicacion.png"
import mail from "../../assets/images/mail.jpg"
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect,useState } from "react";

export function PageAbogado() {
  const { id } = useParams();
  const [lawyer,setLawyer]= useState({});


  useEffect(() => {
    axios.get("http://localhost:3000/lawyers")
    .then(response=>{
      setLawyer(response.data[id-1]);
    })
  }, [id]);
  return (
    <div className="container cnt-container">
       <div className="box">
            <div className="panel_izquierdo">          
              <div className="imagen">
                <img className="foto" src={lawyer.photo} width="200px" alt="" />
                <h2>Dr. {lawyer.name}</h2>
                <h3>ESPECIALIDAD: {lawyer.specialty}</h3>
                <h3>{lawyer.gender}</h3>
              </div>
              <br>
              </br>
              <h2>DESCRIPCION</h2>
              <p>                  
                  Aqui se coloca la experiencia y areas de trabajo realizado asi como logros alcanzados en los casos llevados.
              </p>
              <div className="resena">
                <h2>RESEÑAS:</h2>
                <div>
                <StarFilled className="star" />
                <StarFilled className="star" />
                <StarFilled className="star" />
                <StarFilled className="star" />
                <StarOutlined className="star" />
                
                </div>
                <p>
                  Aqui se coloca las opiniones de los clientes
                </p>
              </div>              
            </div>  
            <div className="panel_derecho">
              <h1>AGENDAR UNA CITA </h1> 
              <div className="cita">
                 <img src={wasap} width="30px" alt="logo wasap" />
                 <h2>999 999 999</h2>                               
              </div>
              <div className="cita">                               
                 <img src={ubicacion} width="30px" alt="logo ubicacion" />
                 <h2>{lawyer.city}</h2>                 
              </div>
              <div className="cita">                               
                 <img src={mail} width="30px" alt="logo mail" />
                 <h2>{lawyer.email}</h2>                 
              </div>                              
            </div>           
    </div>
    </div>
   
  );
}