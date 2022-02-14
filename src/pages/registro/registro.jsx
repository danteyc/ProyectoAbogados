import "./registro.scss"
import {Form, Button, Checkbox, DatePicker, Input, Select, InputNumber} from "antd";

export function PageRegistro(){
    // return (
    //     <>
    //     <h1>Página de Registro</h1>
    //     <form>
    //         <input type="text" placeholder="Ingresar Nombre"></input>
    //     </form>
    //     </>
    // )
    function onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    }
    return (
            <div>
            
                    <Form 
                    autoComplete="off"
                    labelCol={{ span: 6 }} 
                    wrapperCol={{ span: 10}}
                    onFinish={(values)=>{
                      console.log({values});
                    }}
                    onFinishFailes={(error)=> {
                      console.log({error});
                    }}

                    >
                        <Form.Item 
                        name="Nombres"
                        label="Nombres" 
                        rules={[
                          {
                            required:true,
                            message: "Por favor ingresa tus nombres",
                          }, 
                          {whitespace: true},
                          {min: 3},
                        ]}
                        hasFeedback
                        >
                        <Input placeholder="Ingresa tus nombres"/>
                        </Form.Item>

                        <Form.Item 
                        name="Apellidos"
                         label="Apellidos" rules={[
                          {
                            required:true,
                            message: "Por favor ingresa tus apellidos",
                          }, 
                          {whitespace: true},
                          {min: 3},
                        ]}
                        hasFeedback>
                        <Input placeholder="Ingresa tus apellidos"/>
                        </Form.Item>

                        <Form.Item name="Numero de Colegiatura" label="Nro de colegiatura" rules={[
                          {
                            required:true,
                            message: "Por favor ingresa tu nro de colegiatura",
                          }, 
                          {whitespace: true},
                          {min: 3},
                        ]}
                        hasFeedback>
                        <Input placeholder="Ingresa tu nro de colegiatura"/>
                        </Form.Item>

                        <Form.Item name="DNI" label="DNI" rules={[
                          {
                            required:true,
                            message: "Por favor ingresa tu nro de DNI",
                          }, 
                          {whitespace: true},
                          {min: 3},
                        ]}
                        hasFeedback>
                        <Input placeholder="Ingresa tu nro de DNI"/>
                        </Form.Item>

                        <Form.Item name="correo" label="Correo electronico" 
                        rules={[
                          {
                            required:true,
                            message: "Por favor ingresa tu correo",
                          }, 
                          {type:"email"},
                          {message: "Por favor ingrese un correo válido"},
                        ]}
                        hasFeedback>
                        <Input placeholder="Ingresa tu correo"/>
                        </Form.Item>

                        <Form.Item name="genero" label="Genero" requiredMark="optional">
                          <Select placeholder= "Selecciona tu género">
                           <Select.Option value="masculino">Masculino</Select.Option>
                           <Select.Option value="femenino">Femenino</Select.Option>
                           <Select.Option value="prefieronodecirlo">Prefiero no decirlo</Select.Option>
                          </Select>
                        </Form.Item>
                        
                        <Form.Item 
                        name="contraseña"
                        label="Contraseña"
                        rules={[
                          {
                            required:true,
                          }, 
                          { min:6 },
                        ]}
                        hasFeedback>

                        <Input.Password placeholder="ingresa tu contraseña"/>
                        </Form.Item>

                        <Form.Item 
                        name="confirmar constraseña"
                        label="Confirmar contraseña"
                        dependencies={["contraseña"]}
                        rules={[
                          {
                            required:true,
                            message: "Por favor confirmar contraseña",
                          }, 
                          ({getFieldValue})=> ({
                            validator (_,value){
                              if(!value|| getFieldValue( "contraseña")=== value){
                                return Promise.resolve ()
                              }
                              return Promise.reject( "Las constraseñas no coinciden")
                            }
                          })
                        ]}
                        hasFeedback>

                        <Input.Password placeholder="Ingresa tu contraseña"/>
                        </Form.Item>

                        <Form.Item name="fecha de nacimiento" label="Fecha de nacimiento" 
                        rules={[
                          {
                            required:true,
                            message: "Por favor selecciona tu fecha de nacimiento"},
                        ]}
                        hasFeedback
                        >
                          
                        <DatePicker 
                        style={{ width: "100%"}}
                         picker="date" 
                         placeholder="Selecciona tu fecha de nacimiento"/>
                        </Form.Item>

                        <Form.Item 
                        name="acuerdo" 
                        wrapperCol={{ span: 24 }}
                        valuePropName="checked"
                        rules={[
                          {
                            validator: (_,value)=>
                            value 
                            ? Promise.resolve ()
                            : Promise.reject("Para proceder con el registro debe aceptar nuestros términos y condiciones"),
                          },
                          {
                            required:true,
                            message: "Para proceder con el registro debe aceptar nuestros términos y condiciones"},
                        ]}
                        >
                        <Checkbox onChange={onChange}>Acepto los  <a href="#">términos y condiciones</a></Checkbox>
                        </Form.Item>


                        <Form.Item  wrapperCol={{span: 24}} name="registrocompletado">
                        <Button type= "primary" htmlType= "submit">Registro</Button>
                        </Form.Item>
                        
                    </Form>
            </div>
        )

}