import { Form, Input, Button, Checkbox } from "antd";
import "./iniciarSesion.scss"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect,useState } from "react";

export function PageIniciarSesion() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [data,setData]=useState({});

  function userExist(email,password,users){
    const actualUser = users.filter((dataUser) => dataUser.email === email && dataUser.password === password);
    if (actualUser.length > 0){
      console.log("EXISTE USUARIO",actualUser);
      dispatch({
        type: "SET_ID",
        payload: actualUser[0].id,
      });
      dispatch({
        type: "SET_NAME",
        payload: actualUser[0].name,
      });
      dispatch({
        type: "SET_IS_LOGIN",
        payload: true,
      });
      history.push("/perfil");
    } else {
      alert("No existe usuario");
    }
    return actualUser[0].id;
  }
  const onFinish = (values) => {
    console.log("Success:", values);
    const {email,password} = values;
    console.log(email,password);
    userExist(email,password,data);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    axios.get("http://localhost:3000/lawyers")
    .then(response=>{
      setData(response.data);
    })
  }, []);

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
