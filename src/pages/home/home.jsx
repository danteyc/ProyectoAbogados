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
              <SearchOutlined className="icon" /> Encuentra tu especialista
            </div>
            <div className="benefit-description">
              Las opiniones reales de miles de pacientes te ayudarán a tomar siempre la mejor decisión.
            </div>
          </div>
          <div className="benefit">
            <div className="benefit-title">
              <ScheduleOutlined className="icon" /> Agenda tu cita
            </div>
            <div className="benefit-description">
              Las opiniones reales de miles de pacientes te ayudarán a tomar siempre la mejor decisión.
            </div>
          </div>
          <div className="benefit">
            <div className="benefit-title">
              <SearchOutlined className="icon" /> Encuentra tu especialista
            </div>
            <div className="benefit-description">
              Las opiniones reales de miles de pacientes te ayudarán a tomar siempre la mejor decisión.
            </div>
          </div>
          <div className="benefit">
            <div className="benefit-title">
              <SearchOutlined className="icon" /> Encuentra tu especialista
            </div>
            <div className="benefit-description">
              Las opiniones reales de miles de pacientes te ayudarán a tomar siempre la mejor decisión.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
