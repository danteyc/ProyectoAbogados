import "./mainsearch.scss";
import { Form, Button, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";
const { Option } = Select;


export function MainSearch() {
  const [cities,setCities]= useState([]);
  const [specialties,setSpecialties]= useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3000/lawyers")
    .then((response)=>{
      const citiesN = [] ;
      const specialtiesN = [];
      response.data.forEach((lawyer)=> {
        citiesN.push(lawyer.city);
        specialtiesN.push(lawyer.specialty)
      });
      setCities([...new Set(citiesN)]);
      setSpecialties([...new Set(specialtiesN)]);
    });
  },[])
  const history = useHistory();
  const onFinish = (values) => {
    const city = values.city;
    const speciality = values.speciality;
    if (city!==undefined && speciality!== undefined){
      history.push(`abogados/${city}/${speciality}`)
    } else if (city!== undefined || speciality!== undefined){
      if(city===undefined){
        history.push(`abogados/todos/${speciality}`);
      } else(
        history.push(`abogados/${city}/todos`)
      )
    }
  };
  return (
    <div className="main-search">
      <div className="background">
        <div className="background-img"></div>
      </div>
      <div className="search-info container">
        <h1>Encuentra a tu abogado</h1>
        <h2>1200 profesionales están aquí para ayudarte</h2>
        <div className="search-box">
          <Form 
          name="search" 
          onFinish={onFinish}
          layout="inline"
          className="search-form"
          >
            <Form.Item name="speciality" >
              <Select
                placeholder="P. Ejm. Penal"
                size="large"
                className="form-item"
                showSearch
              >
                {specialties.map((specialty)=>(
                  <Option value={specialty}>{specialty}</Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item  name="city">
              <Select
                placeholder="P. Ejm. Lima"
                size="large"
                className="form-item"
                showSearch
              >
                {cities.map((city)=>(
                  <Option value={city}>{city}</Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                icon={<SearchOutlined />}
                size="large"
                htmlType="submit"
                className="btn-search"
              >
                Buscar
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
