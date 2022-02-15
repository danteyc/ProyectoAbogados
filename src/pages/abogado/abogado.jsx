import "./abogado.scss";

export function PageAbogado() {
  return (
    <div className="box">
            <div className="panel_izquierdo">          
              <div className="imagen">
                <img src="https://cdn.pixabay.com/photo/2014/06/27/16/47/person-378368_960_720.png" width="200px" alt="" />
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
                <p>
                  Aqui se coloca las opiniones de los clientes
                </p>
              </div>              
            </div>  
            <div className="panel_derecho">
              <h1>AGENDAR UNA CITA</h1> 
            </div>
           
    </div>
  );
}