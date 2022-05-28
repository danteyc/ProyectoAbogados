import { Link } from "react-router-dom";
import "./listaAbogados.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLawyers } from "../../api/getLawyers";
import ProfilePhoto from "../../assets/images/profile.webp";
import { Rate } from "antd";
import {
  getLawyerCity,
  getLawyerCitySpecialty,
  getLawyerSpecialty,
} from "../../api/getFilterLawyers";

function CardLawyer(props) {
  const { image, name, lastname, city, specialty, stars } = props;
  return (
    <div className="card-abogado">
      <img
        src={`${process.env.REACT_APP_PATH_FILES}/${image}`}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = ProfilePhoto;
        }}
        className="img-abogado"
      />
      <div className="card-lawyer__text">
        <h2>
          {name} {lastname}
        </h2>
        <h3>Ciudad : {city}</h3>
        <h3 className="specialty">Especialidad : {specialty}</h3>
        <div>
          <Rate value={stars} className="star" />
        </div>
      </div>
    </div>
  );
}

export function PageListaAbogados() {
  const [abogados, setAbogados] = useState([]);
  const { ciudad, especialidad } = useParams();
  useEffect(() => {
    if (ciudad === "todos" && especialidad === "todos") {
      getLawyers()
        .then((data) => {
          setAbogados(data.data.data);
        })
        .catch((e) => {
          console.log("error", e);
        });
    } else if (ciudad === "todos") {
      getLawyerSpecialty(especialidad)
        .then((data) => {
          setAbogados(data.data.data);
        })
        .catch((e) => {
          console.log("error", e);
        });
    } else if (especialidad === "todos") {
      getLawyerCity(ciudad)
        .then((data) => {
          setAbogados(data.data.data);
        })
        .catch((e) => {
          console.log("error", e);
        });
    } else {
      getLawyerCitySpecialty(ciudad, especialidad)
        .then((data) => {
          setAbogados(data.data.data);
        })
        .catch((e) => {
          console.log("error", e);
        });
    }
  }, [ciudad, especialidad]);
  return (
    <div className="page-lista-abogados">
      <div className="container cnt-list">
        <h1>Abogados</h1>
        <div className="filter-abogados">
          <h3>
            <span>Ciudad:</span> {ciudad}
          </h3>
          <h3>
            <span>Especialidad:</span> {especialidad}
          </h3>
        </div>
        <div className="cards-abogados">
          {abogados.map((abogado, k) => (
            <Link key={k} className="card" to={`/abogado/${abogado?.id}`}>
              <CardLawyer
                image={abogado?.imagen}
                name={abogado?.nombres}
                lastname={abogado?.apellidos}
                city={abogado?.ciudad.descripcion}
                specialty={abogado?.especialidad.descripcion}
                stars={abogado?.calificaciontotal}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
