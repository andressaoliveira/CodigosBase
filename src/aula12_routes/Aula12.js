import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import './Aula12.scss';

import Aula01 from '../aula01_elementos/Aula01';
import Aula02 from '../aula02_lista-itens/Aula02';
import Aula03 from '../aula03_bootstrap/Aula03';
import Aula04 from '../aula04_componentes/Aula04';
import Aula05 from '../aula05_state/Aula05';
import Aula06 from '../aula06_imc/Aula06';
import Aula07 from '../aula07_lifecycle/Aula07';
import Aula08 from '../aula08_sass/Aula08';
import Aula09 from '../aula09_consumir-api/Aula09';
import Aula10 from '../aula10_consumir-api-axios/Aula10';
import { Aula11 } from '../aula11_redux';
import Menu from "./Menu/Menu";

const Routes = () => {
  return (
    <div className="rotas">
      <BrowserRouter>
        <Menu />
        <Route path="/" exact={true} component={Aula01} />
        <Route path="/Aula01" component={Aula01} />
        <Route path="/Aula02" component={Aula02} />
        <Route path="/Aula03" component={Aula03} />
        <Route path="/Aula04" component={Aula04} />
        <Route path="/Aula05" component={Aula05} />
        <Route path="/Aula06" component={Aula06} />
        <Route path="/Aula07" component={Aula07} />
        <Route path="/Aula08" component={Aula08} />
        <Route path="/Aula09" component={Aula09} />
        <Route path="/Aula10" component={Aula10} />
        <Route path="/Aula11" component={Aula11} />
      </BrowserRouter>
    </div>
  )
}

export default Routes;