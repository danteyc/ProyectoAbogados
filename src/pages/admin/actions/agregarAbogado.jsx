import { Button, Col, Form, Input, Row, Select } from "antd";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getCities } from "../../../api/getCities";
import { getSpecialties } from "../../../api/getSpecialties";
import { postLawyer } from "../../../api/postLawyer";
import { UploadImage } from "../../../components/UploadImage/UploadImage";
const { TextArea } = Input;
const { Option } = Select;
export function PageAgregarAbogado() {
  const history = useHistory();
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
  const onFinish = (values) => {
    values.imagen = values.imagen[0].response;
    console.log(values);
    postLawyer(values).then((data) => {
      data.status===201 &&  history.push("/admin")
    });
  };
  return (
    <div className="container admin">
      <h2 style={{ marginBottom: "20px" }}>Agregar Abogado</h2>
      <Form
        size="large"
        layout="vertical"
        style={{ width: "80%", margin: "0 auto" }}
        onFinish={onFinish}
      >
        <UploadImage name="imagen" />
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Nombres" name="nombres">
              <Input placeholder="Nombres" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Apellidos" name="apellidos">
              <Input placeholder="Apellidos" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Email" name="email">
              <Input placeholder="Email" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Teléfono" name="telefono">
              <Input placeholder="Teléfono" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="ciudad" label="Ciudad">
              <Select
                placeholder="P. Ejm. Lima"
                size="large"
                className="form-item"
                showSearch
              >
                {cities.map((city, k) => (
                  <Option value={city.id} key={k}>
                    {city.descripcion}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="especialidad" label="Especialidad">
              <Select
                placeholder="P. Ejm. Penal"
                size="large"
                className="form-item"
                style={{ textTransform: "capitalize" }}
                showSearch
              >
                {specialties.map((specialty, k) => (
                  <Option
                    value={specialty.id}
                    key={k}
                    style={{ textTransform: "capitalize" }}
                  >
                    {specialty.descripcion}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="Experiencia" name="experiencia">
          <TextArea placeholder="Experiencia" />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Guardar
        </Button>
      </Form>
    </div>
  );
}
