import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import './App.css';
import { Header } from "./components/header/header"
import { Main } from "./components/main/main"
import { Footer } from "./components/footer/footer"
import { PageHome } from "./pages/home/home"
import { PageAbogado } from "./pages/abogado/abogado"
import { PageListaAbogados } from "./pages/listaAbogados/listaAbogados"
import { PageRegistro } from "./pages/registro/registro"
import { PageContacto } from "./pages/contacto/contacto";
import "./assets/style/main.scss"

function App() {
  return (
    <Router>
      <div className='wrapper'>
        <Header/>
        <Main>
          <Switch>
            <Route exact path="/">
              <PageHome />
            </Route>
            <Route path="/abogado">
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
          </Switch>
        </Main>
        <Footer/>
      </div>
    </Router>


  );
}

export default App;
