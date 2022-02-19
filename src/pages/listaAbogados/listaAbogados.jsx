import { Link } from "react-router-dom";
import "./listaAbogados.scss";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import { useEffect,useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


function CardLawyer(props) {
  const { image, name, lastname,city,specialty } = props;
  return (
    <div className="card-abogado">
      <img className="img-abogado" src={image} alt={`${name} ${lastname}`} />
      <div className="card-lawyer__text">
        <h2>
          {name} {lastname} 
        </h2>
        <h3>Ciudad : {city}</h3>
        <h3 className="specialty">Especialidad : {specialty}</h3>
        <div>
          <StarFilled className="star" />
          <StarFilled className="star" />
          <StarFilled className="star" />
          <StarFilled className="star" />
          <StarOutlined className="star" />
        </div>
      </div>
    </div>
  );
}

export function PageListaAbogados() {
  const {ciudad,especialidad} = useParams();
  const [lawyers,setLawyers]= useState([]);
  function comprobar(abogados,ciudad,especialidad){
    let abogadosFiltrados = [];
    console.log(abogadosFiltrados);
    if (ciudad==="todos" && especialidad ==="todos"){
      abogadosFiltrados= abogados;
    } else if (ciudad==="todos"){
      abogadosFiltrados = abogados.filter((abogado) => abogado.specialty === especialidad);
    } else if (especialidad==="todos"){
      abogadosFiltrados = abogados.filter((abogado) => abogado.city === ciudad);
    } else{
      abogadosFiltrados = abogados.filter((abogado) => abogado.city === ciudad && abogado.specialty === especialidad);
    }
    return abogadosFiltrados;
  }
  useEffect(() => {
    axios.get("http://localhost:3000/lawyers")
    .then(response=>{
      setLawyers(comprobar(response.data,ciudad,especialidad));
    })
  }, [ciudad,especialidad]);
  return (
    <div className="page-lista-abogados">
      <div className="container cnt-list">
        <h1>Abogados</h1>
        <div className="filter-abogados">
          <h3><span>Ciudad:</span> {ciudad}</h3><h3><span>Especialidad:</span> {especialidad}</h3>
        </div>
        <div className="cards-abogados">
          {lawyers.map((lawyer,k) => (
            <Link key={k} className="card" to={`/abogado/${lawyer.id}`}>
              <CardLawyer
                image={lawyer.photo}
                name={lawyer.name}
                lastname={lawyer.lastname}
                city={lawyer.city}
                specialty={lawyer.specialty}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
