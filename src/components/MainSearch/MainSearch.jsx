import "./mainsearch.scss";
import { Select } from "antd";
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

export function MainSearch() {
  return (
    <div className="main-search">
      <div className="background">
        <div className="background-img"></div>
      </div>
      <div className="search-info container">
        <h1>Encuentra a tu abogado</h1>
        <h2>1200 profesionales están aquí para ayudarte</h2>
        <div className="search-box">
          <>
            <Select
              placeholder= "P. Ejm. Penal"
              style={{ width: 250, marginRight:10 }}
              onChange={handleChange}
              size="large"
            >
              <Option value="penal">Penal</Option>
              <Option value="registral">Registral</Option>
              <Option value="laboral">Laboral</Option>
            </Select>
            <Select
              defaultValue="lima"
              style={{ width: 250 }}
              onChange={handleChange}
              size="large"
            >
              <Option value="tacna">Tacna</Option>
              <Option value="lima">Lima</Option>
              <Option value="trujillo">Trujillo</Option>
            </Select>
            <Button type="primary" icon={<SearchOutlined />} size="large" onClick={()=>{
                console.log("prueba");
            }}>
              Buscar
            </Button>
          </>
        </div>
      </div>
    </div>
  );
}
