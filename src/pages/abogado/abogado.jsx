import "./abogado.scss";
import { StarOutlined,StarFilled } from "@ant-design/icons";

export function PageAbogado() {
  return (
    <div className="container cnt-container">
       <div className="box">
            <div className="panel_izquierdo">          
              <div className="imagen">
                <img src="https://www.omcabogados.com.pe/upload/abogados/main/abogado201503201726020170300.jpg" width="200px" alt="" />
                <h2>Dr. Nombre Apellido</h2>
                <h3>ESPECIALIDAD</h3>
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
                 <img src="https://1000marcas.net/wp-content/uploads/2019/11/WhatsApp-logo.png" width="75px" height="50px" alt="" />
                 <h2>999 999 999</h2>
                 
              </div>
                
              
            </div>
           
    </div>
    </div>
   
  );
}