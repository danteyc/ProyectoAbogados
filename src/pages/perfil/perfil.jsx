import "./perfil.scss";
import { StarOutlined,StarFilled } from "@ant-design/icons";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState,useEffect } from "react";


export function PagePerfil() {
  const [lawyer,setLawyer]=useState({});
  const id = useSelector((state)=> state.id);
  useEffect(()=>{
    axios.get(`http://localhost:3000/lawyers/${id}`)
    .then((response)=>{
      setLawyer(response.data);
    })
  },[])

  return (
    <div className="container">
      <div className="perfil">
        <div className="perfil-left">
          <div className="foto-perfil">
            <figure>
              <img
                src={lawyer.photo}
                alt=""
              />
            </figure>
          </div>
        </div>
        <div className="perfil-right">
          <h1>{lawyer.name} {lawyer.lastname}</h1>
          <h2>Especialidad: {lawyer.specialty}</h2>
          <div className="valoracion">
            <StarFilled className="star" />
            <StarFilled className="star" />
            <StarFilled className="star" />
            <StarFilled className="star" />
            <StarOutlined className="star"/>
          </div>
        </div>
      </div>
    </div>
  );
}
