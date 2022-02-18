import { Form, Input, Button, Checkbox } from "antd";
import "./iniciarSesion.scss"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export function PageIniciarSesion() {
  const history = useHistory();
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("Success:", values);
    history.push("/perfil");
    dispatch({
      type: "SET_IS_LOGIN",
      payload: true,
    });
    dispatch({
      type: "SET_NAME",
      payload: "Dante",
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="email"
            rules={[{ type: 'email', required: true, message: "Por favor introduce tu correo!" }]}
          >
            <Input placeholder="Correo Electrónico" size="large"/>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Por favor pon tu contraseña!" }]}
          >
            <Input.Password placeholder="Contraseña" size="large"/>
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16}}
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
