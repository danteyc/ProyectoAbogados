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
    <div className='wrapper'>
      <Header/>
      <Main>
        <Switch>
          <Route path="/">
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
        </Switch>
      </Main>
      <Footer/>
    </div>

  );
}

export default App;
