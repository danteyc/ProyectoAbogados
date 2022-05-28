import { Button, Rate } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getLawyers } from "../../api/getLawyers";
import ProfilePhoto from "../../assets/images/profile.webp";
import "./admin.scss";

function CardLawyer(props) {
  const { image, name, lastname, city, specialty } = props;
  return (
    <div className="card-abogado">
      <figure style={{ position: "relative" }}>
        <img
          src={`${process.env.REACT_APP_PATH_FILES}/${image}`}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = ProfilePhoto;
          }}
          className="img-abogado"
        />
        <div
          className="buttons-actions"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            position: "absolute",
            top: "29%",
            left: "38%",
          }}
        >
          <Button
            type="primary"
            style={{ marginBottom: "5px", width: "90px" }}
            size="large"
          >
            Editar
          </Button>
          <Button type="primary" danger size="large" style={{ width: "90px" }}>
            Eliminar
          </Button>
        </div>
      </figure>

      <div className="card-lawyer__text">
        <h2>
          {name} {lastname}
        </h2>
        <h3>Ciudad : {city}</h3>
        <h3 className="specialty">Especialidad : {specialty}</h3>
      </div>
    </div>
  );
}

export function PageAdmin() {
  const [abogados, setAbogados] = useState([]);
  useEffect(() => {
    getLawyers()
      .then((data) => {
        setAbogados(data.data.data);
      })
      .catch((e) => {
        console.log("error", e);
      });
  }, []);
  return (
    <div className="container admin">
      <h2>Lista de Abogados</h2>
      <div className="buttons">
        <Link to="/admin/agregar">
          <Button type="primary">Crear Abogado</Button>
        </Link>
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
  );
}
