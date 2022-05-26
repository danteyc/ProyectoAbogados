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
             Integrado por profesionales con un alto nivel de especialización en diversas áreas del derecho y con un conocimiento profundo de los sectores económicos en los que se desenvuelven.
            </div>
          </div>
          <div className="benefit">
            <div className="benefit-title">
              <ScheduleOutlined className="icon" /> Agenda tu cita
            </div>
            <div className="benefit-description">
            Si tienes una consulta que hacer, no dudes en llamarnos a través del número telefónico del despacho +51949911376.
            </div>
          </div>
          <div className="benefit">
            <div className="benefit-title">
              <SearchOutlined className="icon" /> Encuentra tu especialista
            </div>
            <div className="benefit-description">
            El nivel de especialización de tus consejeros es un factor que define la eficacia del proceso legal. 
            </div>
          </div>
          <div className="benefit">
            <div className="benefit-title">
              <SearchOutlined className="icon" /> Mision-Vision
            </div>
            <div className="benefit-description">
            Los mejores resultados legales siempre llegarán a ti cuando estás siendo representado por un equipo protocolar. 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
