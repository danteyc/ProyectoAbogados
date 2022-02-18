import "./registro.scss";
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

const REGIONES = ["Amazonas","Lambayeque","Ancash","Lima","Arequipa","Loreto","Ayacucho","Madre de Dios","Apurimac","Moquegua","Cajamarca","Pasco","Cusco","Piura","Huancavelica","Puno","Huánuco","San Martin","Ica","Tacna","Junín","Tumbes","La Libertad","Ucayali"]
export function PageRegistro() {
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
    <div className="form-container">
      
      <Form
        layout="vertical"
        className="form-register"
        autoComplete="off"
        //labelCol={{ span: 6 }}//
       // wrapperCol={{ span: 12 }}//
        onFinish={(values) => {
          console.log({ values });
        }}
        onFinishFailes={(error) => {
          console.log({ error });
        }}
      >
        <Row>
        <Col span= {11} >
        <Form.Item
          name="Nombres"
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
        <Col span={2}> 
        </Col>

        <Col span={11}>
        <Form.Item
          name="Apellidos"
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
          name="Nro de Colegiatura"
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

        <Col span={2}> 
        </Col> 

        <Col span={11}>
        <Form.Item
          name="DNI"
          label="DNI"
          rules={[
            {
              required: true,
              message: "Por favor ingresa tu número de DNI",
            },
            { whitespace: true },
            { max: 8 },
          ]}
          hasFeedback
        >
          <Input placeholder="Ingresa tu número de DNI" />
        </Form.Item>
      
        </Col>
        </Row>
        <Form.Item
          name="correo"
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


        <Form.Item name="Género" label="Género" requiredMark="optional">
          <Select placeholder="Selecciona tu género">
            <Select.Option value="masculino">Masculino</Select.Option>
            <Select.Option value="femenino">Femenino</Select.Option>
            <Select.Option value="prefieronodecirlo">
              Prefiero no decirlo
            </Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name="Ciudad" label="Ciudad"
        rules={[
          {
            required: true,
            message: "Por favor selecciona tu ciudad",
        },
        ]}
     
        >
          <Select placeholder="Selecciona tu ciudad">
            {REGIONES.map((region) => {
              return (
                <Select.Option value={region}>
                  {region}
                </Select.Option>
              )
            })}

          </Select>
      
        </Form.Item>
        <Form.Item name="Especialidad" label="Especialidad"
        rules={[
          {
            required: true,
            message: "Por favor selecciona tu especialidad",
        },
        ]}
        >
          <Select placeholder="Selecciona tu especialidad">
            <Select.Option value="DerechoConstitucional">
              Derecho Constitucional
            </Select.Option>
            <Select.Option value="DerechoAdministrativo">
              Derecho Administrativo
            </Select.Option>
            <Select.Option value="DerechoProcesalPenal">
              Derecho Procesal Penal
            </Select.Option>
            <Select.Option value="DerechodelTrabajo">
              Derecho del Trabajo
            </Select.Option>
            <Select.Option value="DerechoFiscal">Derecho Fiscal</Select.Option>
            <Select.Option value="DerechoCivilyMercantil">
              Derecho Civil y Mercantil
            </Select.Option>
            <Select.Option value="DerechoEmpresarial">
              Derecho Empresarial
            </Select.Option>
            <Select.Option value="DerechoCorporativo">
              Derecho Corporativo
            </Select.Option>
            <Select.Option value="DerechoInternacional">
              Derecho Internacional
            </Select.Option>
            <Select.Option value="Otro">
              Otro
            </Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="contraseña"
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
          name="confirmar constraseña"
          label="Confirmar contraseña"
          dependencies={["contraseña"]}
          rules={[
            {
              required: true,
              message: "Por favor confirmar contraseña",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("contraseña") === value) {
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
          <Checkbox onChange={onChange}>
            Acepto los <a href="#">términos y condiciones</a>
          </Checkbox>
        </Form.Item>




        <Form.Item wrapperCol={{ span: 24 }} name="registrocompletado">
          <Button type="primary" htmlType="submit" block> 
            Registro
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
