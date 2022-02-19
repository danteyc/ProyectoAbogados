import {
  Form,
  Button,
  Checkbox,
  DatePicker,
  Input,
  Select,
  InputNumber,
  Row,
  Col
} from "antd";
import axios from "axios";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";


export function PageEditarPerfil() {
  const id = useSelector((state)=> state.id);
  const [user,setUser] = useState({});
  useEffect(()=>{
    axios.get(`http://localhost:3000/lawyers/${id}`)
    .then((response)=>{
      setUser(response.data);
    })
  },[id])
  const REGIONES = ["Amazonas","Lambayeque","Ancash","Lima","Arequipa","Loreto","Ayacucho","Madre de Dios","Apurimac","Moquegua","Cajamarca","Pasco","Cusco","Piura","Huancavelica","Puno","Huánuco","San Martin","Ica","Tacna","Junín","Tumbes","La Libertad","Ucayali"];
  function postData(dataRegister){
    axios.post("http://localhost:3000/lawyers",dataRegister)
    .then((response)=>{
      console.log("response",response);
    })
  }
  return (
    <div className="container">
      <div className="container registro-container">
        <h1>Edita tu Perfil</h1>
        <div className="form-container">
          <Form
            layout="vertical"
            className="form-register"
            autoComplete="off"
            onFinish={(values) => {
              postData(values);
            }}
            onFinishFailed={(error) => {
              console.log({ error });
            }}
          >
            <Row>
              <Col span={11}>
                <Form.Item
                  name="name"
                  label="Nombres"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingresa tus nombres",
                    },
                    { whitespace: true },
                    { min: 3 },
                  ]}
                  hasFeedback
                >
                  <Input placeholder="Ingresa tus nombres" />
                </Form.Item>
              </Col>
              <Col span={2}></Col>

              <Col span={11}>
                <Form.Item
                  name="lastname"
                  label="Apellidos"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingresa tus apellidos",
                    },
                    { whitespace: true },
                    { min: 3 },
                  ]}
                  hasFeedback
                >
                  <Input placeholder="Ingresa tus apellidos" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={11}>
                <Form.Item
                  name="tuition number"
                  label="Nro de colegiatura"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingresa tu número de colegiatura",
                    },
                    { whitespace: true },
                    { max: 5 },
                  ]}
                  hasFeedback
                >
                  <Input placeholder="Ingresa tu número de colegiatura" />
                </Form.Item>
              </Col>

              <Col span={2}></Col>

              <Col span={11}>
                <Form.Item
                  name="document"
                  label="DNI"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingresa tu número de DNI",
                    },
                    { max: 8 },
                  ]}
                  hasFeedback
                >
                  <Input placeholder="Ingresa tu número de DNI" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="phone"
              label="Celular"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa tu número de celular",
                },
                { max: 9 },
              ]}
              hasFeedback
            >
              <Input placeholder="ingresa tu número de celular" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Correo electronico"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa tu correo",
                },
                { type: "email" },
                { message: "Por favor ingrese un correo válido" },
              ]}
              hasFeedback
            >
              <Input placeholder="Ingresa tu correo" />
            </Form.Item>
            <Form.Item
              name="fecha de nacimiento"
              label="Fecha de nacimiento"
              rules={[
                {
                  required: true,
                  message: "Por favor selecciona tu fecha de nacimiento",
                },
              ]}
              hasFeedback
            >
              <DatePicker
                style={{ width: "100%" }}
                picker="date"
                placeholder="Selecciona tu fecha de nacimiento"
              />
            </Form.Item>
            <Form.Item
              name="city"
              label="Ciudad"
              rules={[
                {
                  required: true,
                  message: "Por favor selecciona tu ciudad",
                },
              ]}
            >
              <Select placeholder="Selecciona tu ciudad">
                {REGIONES.map((region,k) => {
                  return <Select.Option key={k} value={region}>{region}</Select.Option>;
                })}
              </Select>
            </Form.Item>
            <Form.Item
              name="specialty"
              label="Especialidad"
              rules={[
                {
                  required: true,
                  message: "Por favor selecciona tu especialidad",
                },
              ]}
            >
              <Select placeholder="Selecciona tu especialidad">
                <Select.Option value="Constitucional">
                  Derecho Constitucional
                </Select.Option>
                <Select.Option value="Administrativo">
                  Derecho Administrativo
                </Select.Option>
                <Select.Option value="Penal">Derecho Penal</Select.Option>
                <Select.Option value="Trabajo">
                  Derecho del Trabajo
                </Select.Option>
                <Select.Option value="Fiscal">Derecho Fiscal</Select.Option>
                <Select.Option value="CivilyMercantil">
                  Derecho Civil y Mercantil
                </Select.Option>
                <Select.Option value="Empresarial">
                  Derecho Empresarial
                </Select.Option>
                <Select.Option value="Corporativo">
                  Derecho Corporativo
                </Select.Option>
                <Select.Option value="Internacional">
                  Derecho Internacional
                </Select.Option>
                <Select.Option value="Otro">Otro</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item wrapperCol={{ span: 24 }} name="registrocompletado">
              <Button type="primary" htmlType="submit" block>
                Modificar
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
