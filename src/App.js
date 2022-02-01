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
import { PageHome } from "./pages/PageHome/PageHome"
import { PageAbogado } from "./pages/PageAbogado/PageAbogado"
import { PageListaAbogados } from "./pages/PageListaAbogados/PageListaAbogados"
import { PageRegistro } from "./pages/PageRegistro/PageRegistro"

function App() {
  return (
    <Router>
      <div className='wrapper'>
        <Header/>
        <Main>
          <Switch>
            <Route path="/home">
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
            <Redirect exact from="/" to="/home" />
          </Switch>
        </Main>
        <Footer/>
      </div>
    </Router>


  );
}

export default App;
