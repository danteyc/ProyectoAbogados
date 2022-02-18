import "./mainsearch.scss";
import { Form, Button, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const { Option } = Select;

export function MainSearch() {
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
                <Option value="penal">Penal</Option>
                <Option value="registral">Registral</Option>
                <Option value="laboral">Laboral</Option>
              </Select>
            </Form.Item>
            <Form.Item  name="city">
              <Select
                placeholder="P. Ejm. Lima"
                size="large"
                className="form-item"
                showSearch
              >
                <Option value="tacna">Tacna</Option>
                <Option value="lima">Lima</Option>
                <Option value="trujillo">Trujillo</Option>
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
