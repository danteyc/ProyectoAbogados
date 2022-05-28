import { Button, Col, Form, Input, Row, Select } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { getCities } from "../../../api/getCities";
import { getContactLawyer } from "../../../api/getContactLawyer";
import { getLawyer } from "../../../api/getLawyer";
import { getSpecialties } from "../../../api/getSpecialties";
import { updateLawyer } from "../../../api/updateLawyer";
import { UploadImage } from "../../../components/UploadImage/UploadImage";
const { TextArea } = Input;
const { Option } = Select;
export function PageEditarAbogado() {
  const { id } = useParams();
  const [form] = Form.useForm();
  const history = useHistory();
  const [cities, setCities] = useState([]);
  const [specialties, setSpecialties] = useState([]);
  const [lawyer, setLawyer] = useState({});
  const [contactLawyer, setContactLawyer] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLawyer(id)
      .then((data) => {
        setLawyer(data.data.data);
      })
      .catch((e) => {
        console.log("error", e);
      });
    getContactLawyer(id)
      .then((data) => {
        setContactLawyer(data.data.data);
      })
      .catch((e) => {
        console.log("error", e);
      });
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
    setLoading(false);
  }, []);
  useEffect(() => {
    form.setFieldsValue({
      nombres: lawyer?.nombres,
      apellidos: lawyer?.apellidos,
      email: contactLawyer?.email,
      telefono: contactLawyer?.telefono,
      ciudad: lawyer?.ciudad?.id,
      especialidad: lawyer?.especialidad?.id,
      experiencia: lawyer?.experiencia,
    });
  }, [loading]);
  const onFinish = (values) => {
    values.imagen = values?.imagen[0]?.response;
    console.log(values);
    updateLawyer(id, values)
      .then((data) => {
        history.push("/admin");
      })
      .catch((e) => console.log(e));
  };
  const initialValues = {
    ...lawyer,
  };
  return (
    <div className="container admin">
      <h2 style={{ marginBottom: "20px" }}>Editar Abogado</h2>
      {loading ? (
        "Cargando"
      ) : (
        <Form
          size="large"
          layout="vertical"
          style={{ width: "80%", margin: "0 auto" }}
          form={form}
          onFinish={onFinish}
        >
          <UploadImage name="imagen" />
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Nombres"
                name="nombres"
                initialValue={lawyer?.nombres}
              >
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
      )}
    </div>
  );
}
