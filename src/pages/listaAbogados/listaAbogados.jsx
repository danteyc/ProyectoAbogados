import axios from "axios";
import { useEffect, useState } from "react";
import "./listaAbogados.scss"
export function PageListaAbogados(){
    const direccionApi = "https://61f426e510f0f7001768c855.mockapi.io/abogados";
    
    const[datosAbogados,SetDatosAbogados] = useState([]);
    
    useEffect(()=> {
        axios.get(direccionApi)
            .then((respuesta)=>{
                SetDatosAbogados(respuesta.data);
//               console.log(respuesta.data);
            })
    },[]);

    return (
        <div>
            {datosAbogados.map((abogado)=>(
                <div>
                    Hola
                    <h1>{abogado.nombre}</h1>
                    <h2>{abogado.apellido}</h2>
                    <h2>{abogado.empresa}</h2>
                    <img src={abogado.foto} width="300"/>
                </div>
            ))}
        </div>
    )
}