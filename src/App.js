import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import "antd/dist/antd.min.css"
import './App.css';
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { Footer } from "./components/footer/footer";
import { PageHome } from "./pages/home/home";
import { PageAbogado } from "./pages/abogado/abogado";
import { PageListaAbogados } from "./pages/listaAbogados/listaAbogados";
import { PageRegistro } from "./pages/registro/registro";
import { PageIniciarSesion } from "./pages/iniciarSesion/iniciarSesion";
import { PageContacto } from "./pages/contacto/contacto";
import { PagePerfil } from "./pages/perfil/perfil";
import "./assets/style/main.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <div className='wrapper'>
            <Header/>
            <Main>
              <Switch>
                <Route exact path="/">
                  <PageHome />
                </Route>
                <Route path="/abogado/:id">
                  <PageAbogado />
                </Route>
                <Route path="/lista-abogados">
                  <PageListaAbogados />
                </Route>
                <Route path="/registro">
                  <PageRegistro />
                </Route>
                <Route path="/contacto">
                  <PageContacto/>
                </Route>
                <Route path="/iniciar-sesion">
                  <PageIniciarSesion/>
                </Route>
                <Route path="/perfil">
                  <PagePerfil/>
                </Route>
              </Switch>
            </Main>
            <Footer/>
          </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
