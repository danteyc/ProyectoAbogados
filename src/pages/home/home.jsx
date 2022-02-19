import { MainSearch } from "../../components/MainSearch/MainSearch";
import "./home.scss";
import { SearchOutlined, ScheduleOutlined } from '@ant-design/icons';

export function PageHome() {
  return (
    <>
      <MainSearch/>
      <div className="container cnt-main">
        <div className="benefits">
          <div className="benefit">
            <div className="benefit-title">
              <SearchOutlined className="icon" /> Quienes somos
            </div>
            <div className="benefit-description">
             Integrado por profesionales con un alto nivel de especialización en diversas áreas del derecho y con un conocimiento profundo de los sectores económicos en los que se desenvuelven, lo cual nos permite brindar un servicio legal que se integra perfectamente con las estrategias empresariales de nuestros clientes.
            </div>
          </div>
          <div className="benefit">
            <div className="benefit-title">
              <ScheduleOutlined className="icon" /> Agenda tu cita
            </div>
            <div className="benefit-description">
            Si tienes una consulta que hacer, no dudes en llamarnos a través del número telefónico del despacho +51949911376. Nuestra asesora encargada estará feliz de atenderte y de introducirte al mundo de representación legal. La alternativa es escribirnos por WhatsApp en horarios matutinos y vespertinos. Recuerda identificarte y explicar tu caso para que te respondamos con puntualidad.
            </div>
          </div>
          <div className="benefit">
            <div className="benefit-title">
              <SearchOutlined className="icon" /> Encuentra tu especialista
            </div>
            <div className="benefit-description">
            El nivel de especialización de tus consejeros es un factor que define la eficacia del proceso legal. Si quieres buenos resultados, debes contratarnos. Nosotros analizamos tu caso y decidimos quiénes son los profesionales más preparados para ayudarte, de forma que la solución se dé con rapidez. Lee más acerca de los tipos de abogados que trabajan en nuestro despacho:
            </div>
          </div>
          <div className="benefit">
            <div className="benefit-title">
              <SearchOutlined className="icon" /> Mision-Vision
            </div>
            <div className="benefit-description">
            Los mejores resultados legales siempre llegarán a ti cuando estás siendo representado por un equipo protocolar. Nuestro estudio jurídico es ideal para tus casos, pues nos especializamos en la defensa de personas naturales y jurídicas. No solo tendrás la oportunidad de resolver disputas, sino que nosotros te proporcionamos asesoría permanente para que aproveches oportunidades de negocios.
          

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
