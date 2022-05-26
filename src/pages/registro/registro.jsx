import "./registro.scss";
import { Form, Button, Checkbox, Input, Row, Col, message } from "antd";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { registro } from "../../api/registro";

export function PageRegistro() {
  const history = useHistory();
  const [data, setData] = useState({});

  const onFinish = (values) => {
    registro(values)
      .then((data) => {
        if (data.status === 201){
          message.success(data.data.message);
          history.push("/iniciar-sesion");
        }
      })
      .catch((e) => {
        console.log("error", e);
      });
  };
  return (
    <div className="container registro-container">
      <h1>Regístrate</h1>
      <div className="form-container">
        <Form
          layout="vertical"
          className="form-register"
          autoComplete="off"
          onFinish={onFinish}
        >
          <Form.Item hidden name="rol_user" initialValue="cliente">
            <Input type="hidden" />
          </Form.Item>
          <Row>
            <Col span={11}>
              <Form.Item
                name="nombres"
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
                name="apellidos"
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
          <Form.Item
            name="telefono"
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
              { type: "email", message: "Por favor ingrese un correo válido" },
            ]}
            hasFeedback
          >
            <Input placeholder="Ingresa tu correo" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Contraseña"
            rules={[
              {
                required: true,
                message: "Por favor ingresa tu contraseña",
              },
              { min: 6 },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="ingresa tu contraseña" />
          </Form.Item>

          <Form.Item
            name="passwordconfirm"
            label="Confirmar contraseña"
            dependencies={["contraseña"]}
            rules={[
              {
                required: true,
                message: "Por favor confirmar contraseña",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("Las constraseñas no coinciden");
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Ingresa tu contraseña" />
          </Form.Item>
          <Form.Item
            className="form-agree"
            name="acuerdo"
            wrapperCol={{ span: 24 }}
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        "Para proceder con el registro debe aceptar nuestros términos y condiciones"
                      ),
              },
              {
                required: true,
                message:
                  "Para proceder con el registro debe aceptar nuestros términos y condiciones",
              },
            ]}
          >
            <Checkbox>
              Acepto los <a href="#">términos y condiciones</a>
            </Checkbox>
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Registro
          </Button>
        </Form>
      </div>
    </div>
  );
}
