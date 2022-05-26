import "./mainsearch.scss";
import { Form, Button, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCities } from "../../api/getCities";
import { getSpecialties } from "../../api/getSpecialties";

const { Option } = Select;

export function MainSearch() {
  const [cities, setCities] = useState([]);
  const [specialties, setSpecialties] = useState([]);
  useEffect(() => {
    getCities()
      .then((data) => {
        setCities(data.data.data);
      })
      .catch((e) => {
        console.log("error", e);
      });
    getSpecialties()
      .then((data) => {
        setSpecialties(data.data.data);
      })
      .catch((e) => {
        console.log("error", e);
      });
  }, []);
  const history = useHistory();
  const onFinish = (values) => {
    const city = values.city;
    const speciality = values.speciality;
    if (city !== undefined && speciality !== undefined) {
      history.push(`abogados/${city}/${speciality}`);
    } else if (city !== undefined || speciality !== undefined) {
      if (city === undefined) {
        history.push(`abogados/todos/${speciality}`);
      } else history.push(`abogados/${city}/todos`);
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
            <Form.Item name="speciality">
              <Select
                placeholder="P. Ejm. Penal"
                size="large"
                className="form-item"
                style={{ textTransform: "capitalize" }}
                showSearch
              >
                {specialties.map((specialty, k) => (
                  <Option
                    value={specialty.descripcion}
                    key={k}
                    style={{ textTransform: "capitalize" }}
                  >
                    {specialty.descripcion}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name="city">
              <Select
                placeholder="P. Ejm. Lima"
                size="large"
                className="form-item"
                showSearch
              >
                {cities.map((city, k) => (
                  <Option value={city.descripcion} key={k}>
                    {city.descripcion}
                  </Option>
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
