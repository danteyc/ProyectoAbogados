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
        </div>
    )
}