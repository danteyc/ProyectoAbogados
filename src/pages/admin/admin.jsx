import { Button, Rate } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { deleteLawyer } from "../../api/deleteLawyer";
import { getLawyers } from "../../api/getLawyers";
import ProfilePhoto from "../../assets/images/profile.webp";
import "./admin.scss";

export function PageAdmin() {
  const [abogados, setAbogados] = useState([]);
  const history = useHistory();
  const getData = () => {
    getLawyers()
      .then((data) => {
        setAbogados(data.data.data);
      })
      .catch((e) => {
        console.log("error", e);
      });
  };
  const deleteData = (id) => {
    deleteLawyer(id);
    getData();
  };
  useEffect(() => {
    getData();
  }, [abogados]);

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
          <React.Fragment key={k}>
            <div className="card-abogado">
              <figure style={{ position: "relative" }}>
                <img
                  src={`${process.env.REACT_APP_PATH_FILES}/${abogado?.imagen}`}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = ProfilePhoto;
                  }}
                  className="img-abogado"
                />
                <div
                  className="buttons-actions"
                  style={{
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
                    onClick={() => history.push(`/admin/editar/${abogado?.id}`)}
                  >
                    Editar
                  </Button>
                  <Button
                    type="primary"
                    danger
                    size="large"
                    style={{ width: "90px" }}
                    onClick={() => deleteData(abogado?.id)}
                  >
                    Eliminar
                  </Button>
                </div>
              </figure>

              <div className="card-lawyer__text">
                <h2>
                  {abogado?.nombres} {abogado?.apellidos}
                </h2>
                <h3>Ciudad : {abogado?.ciudad.descripcion}</h3>
                <h3 className="specialty">
                  Especialidad : {abogado?.especialidad.descripcion}
                </h3>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
