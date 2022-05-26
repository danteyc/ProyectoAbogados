import { Form, Input, Button, Checkbox } from "antd";
import "./iniciarSesion.scss";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { login } from "../../api/login";

export function PageIniciarSesion() {
  const history = useHistory();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    login(values)
      .then((data) => {
        if (data.status === 200) {
          const { token, nombres, rol, id } = data.data;
          console.log(data);
          localStorage.setItem("token", token);
          history.push("/");
          dispatch({
            type: "SET_ID",
            payload: id,
          });
          dispatch({
            type: "SET_NAME",
            payload: nombres,
          });
          dispatch({
            type: "SET_ROL",
            payload: rol,
          });
          dispatch({
            type: "SET_IS_LOGIN",
            payload: true,
          });
        }
      })
      .catch((e) => {
        console.log("error", e);
      });
  };
  return (
    <div className="container cnt-login">
      <div className="form-login">
        <h1>Accede a tu cuenta</h1>
        <Form
          name="basic"
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Por favor introduce tu correo!",
              },
            ]}
          >
            <Input placeholder="Correo Electrónico" size="large" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Por favor pon tu contraseña!" },
            ]}
          >
            <Input.Password placeholder="Contraseña" size="large" />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Recuérdame</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 24 }}>
            <Button type="primary" htmlType="submit" size="large" block>
              Entrar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
