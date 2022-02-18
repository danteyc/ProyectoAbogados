<<<<<<< HEAD
import { Link } from "react-router-dom";
import "./listaAbogados.scss";
import { StarOutlined, StarFilled } from "@ant-design/icons";
function CardLawyer(props) {
  const { image, name, lastname } = props;
  return (
    <div className="card-abogado">
      <img className="img-abogado" src={image} alt={`${name} ${lastname}`} />
      <div className="card-lawyer__text">
        <h2>
          {name} {lastname}
        </h2>
        <h3>Ciudad : Lima</h3>
        <h3>Especialidad : Comercial</h3>
        <div>
          <StarFilled className="star" />
          <StarFilled className="star" />
          <StarFilled className="star" />
          <StarFilled className="star" />
          <StarOutlined className="star" />
=======
import axios from "axios";
import { useEffect, useState } from "react";
import "./listaAbogados.scss"
export function PageListaAbogados(){
    const direccionApi = "http://localhost:3000/data/lawyers";
    
    const[datosAbogados,SetDatosAbogados] = useState([]);
    
    useEffect(()=> {
        axios.get(direccionApi)
            .then((respuesta)=>{
                SetDatosAbogados(respuesta.data);
            })
    },[]);

    return (
        <div>
            {datosAbogados.map((abogado,k)=>(
                <div key={k}>
                    <h1>{abogado.name}</h1>
                    <h2>{abogado.lastname}</h2>
                    <h2>{abogado.email}</h2>
                </div>
            ))}
>>>>>>> dante
        </div>
      </div>
    </div>
  );
}

export function PageListaAbogados() {
  const lawyers = [
    {
      id: 1,
      image:
        "https://cdn.pixabay.com/photo/2020/03/18/15/42/right-4944546__340.jpg",
      name: "Juan",
      lastname: "Gutierrez",
      description: "Abogado penalista de lima",
    },
    {
      id: 2,
      image:
        "https://cdn.pixabay.com/photo/2019/12/18/13/07/right-4703938__340.jpg",
      name: "Sebastian",
      lastname: "Ramirez",
      description: "Abogado Laboral de Arequipa",
    },
    {
      id: 3,
      image:
        "https://cdn.pixabay.com/photo/2019/12/18/13/08/right-4703943__340.jpg",
      name: "Carla",
      lastname: "Maldonado",
      description: "Abogado de Familia de Piura",
    },
    {
      id: 4,
      image:

        "https://cdn.pixabay.com/photo/2020/12/05/14/08/man-5806011__340.jpg",
      name: "Roberto",
      lastname: "Ramirez",
      description: "Abogado Tributarista de lima",
    },
    {
      id: 5,
      image:

        " https://cdn.pixabay.com/photo/2019/04/13/16/45/thinking-4125016__340.jpg",
      name: "Fernando",
      lastname: "Peralta",
      description: "Abogado Comercial  de lima",
    },
    {
      id: 6,
      image:

        "https://cdn.pixabay.com/photo/2019/12/18/13/05/right-4703926__340.jpg",
      name: "Buffete",
      lastname: "Carbajal Daza",
      description: "Abogados Asociados de lima",
    },
  ];

  return (
    <div class="page-lista-abogados">
      <div className="container">
        <h1>ABOGADOS</h1>
        <div className="cards-abogados">
          {lawyers.map((lawyer) => (
            <Link className="card" to={`/abogado/${lawyer.id}`}>
              <CardLawyer
                image={lawyer.image}
                name={lawyer.name}
                lastname={lawyer.lastname}
                description={lawyer.description}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
