import "./registro.scss"
import {Form, Button, Checkbox, DatePicker, Input, Select} from "antd";

export function PageRegistro(){
    // return (
    //     <>
    //     <h1>Página de Registro</h1>
    //     <form>
    //         <input type="text" placeholder="Ingresar Nombre"></input>
    //     </form>
    //     </>
    // )
    return (
            <div>
            
                    <Form labelCol={{ span: 5 }} wrapperCol={{ span: 14}}>
                        <Form.Item name="NombreCompleto" label="Nombre Completo">
                        <Input placeholder="Ingresa tus nombres"/>
                        </Form.Item>

                        <Form.Item name="ApellidoCompleto" label="Apellido Completo">
                        <Input placeholder="Ingresa tus apellidos"/>
                        </Form.Item>

                        <Form.Item name="NumerodeColegiatura" label="Nro de colegiatura">
                        <Input placeholder="Ingresa tus nombres"/>
                        </Form.Item>

                        <Form.Item name="DNI" label="DNI">
                        <Input placeholder="Ingresa tu nro de DNI"/>
                        </Form.Item>

                        <Form.Item name="correoel" label="Correo electronico">
                        <Input placeholder="Ingresa tu correo"/>
                        </Form.Item>

                        <Form.Item name="genero" label="Genero">
                          <Select placeholder= "Selecciona tu genero">
                           <Select.Option value="masculino">Masculino</Select.Option>
                           <Select.Option value="femenino">Femenino</Select.Option>
                           <Select.Option value="prefieronodecirlo">Prefiero no decirlo</Select.Option>
                          </Select>
                        </Form.Item>
                        
                        <Form.Item name="contrasena" label="Contraseña">
                        <Input.Password placeholder="ingresa tu contraseña"/>
                        </Form.Item>

                        <Form.Item name="confirmarconstrasena" label="Confirmar contraseña">
                        <Input.Password placeholder="Ingresa tu contraseña"/>
                        </Form.Item>

                        <Form.Item name="fechadenacimiento" label="Fecha de nacimiento">
                        <DatePicker 
                        style={{ width: "100%"}}
                         picker="date" 
                         placeholder="Selecciona tu fecha de nacimiento"/>
                        </Form.Item>

                        <Form.Item name="acuerdo">
                        <Checkbox> Acepto los términos y condiciones <a href="#"></a></Checkbox> 
                        </Form.Item>

                        <Form.Item name="registrocompletado">
                        <Button type= "primary" htmlType= "submit">Registro</Button>
                        </Form.Item>
                        
                    </Form>
            </div>
        )

}