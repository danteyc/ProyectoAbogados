import { Link } from "react-router-dom";
import "./listaAbogados.scss";
function CardLawyer(props) {
  const { image, name, lastname, description } = props;

  return (
    <div className="card-lawyer">
      <img className="img-fluid" src={image} alt={`${name} ${lastname}`} />
      <div className="card-lawyer__text">
        <h2>
          {name} {lastname}
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export function PageListaAbogados() {
  const lawyers = [
    {
      id: 1,
      image:
        "https://mexico.unir.net/wp-content/uploads/2021/03/abogado-litigante.jpg",
      name: "Juan",
      lastname: "Perez",
      description: "Abogado penalista de lima",
    },
    {
      id: 2,
      image:
        "https://mexico.unir.net/wp-content/uploads/2021/03/abogado-litigante.jpg",
      name: "Sebastian",
      lastname: "Ramirez",
      description: "Abogado penalista de lima",
    },
    {
      id: 3,
      image:
        "https://mexico.unir.net/wp-content/uploads/2021/03/abogado-litigante.jpg",
      name: "Juan",
      lastname: "Perez",
      description: "Abogado penalista de lima",
    },
    {
      id: 4,
      image:
        "https://mexico.unir.net/wp-content/uploads/2021/03/abogado-litigante.jpg",
      name: "Sebastian",
      lastname: "Ramirez",
      description: "Abogado penalista de lima",
    },
  ];

  return (
    <div class="page-lista-abogados">
      <div className="container pt-3 pb-3">
        <h1 className="mb-4">ABOGADOS</h1>
        <div className="row">
          {lawyers.map((lawyer) => (
            <Link className="col col-4" to={`/abogado/${lawyer.id}`}>
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
