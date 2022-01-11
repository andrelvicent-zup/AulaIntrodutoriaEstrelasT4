/* eslint-disable import/no-anonymous-default-export */
import react from "react";
import ComponenteComFilhos from './componentes/ComponenteComFilhos';
import ComponenteComProps from './componentes/ComponenteComProps';
import Cartao from './componentes/Layouts/Cartao';
import PrimeiroComponente from './componentes/PrimeiroComponente';

export default (props) => (
    <div>
    <Cartao titulo="Cartao #1"> <PrimeiroComponente /> </Cartao>
    <Cartao titulo="Cartao #2">
      <ComponenteComFilhos>
        <ul>
          <li> Arroz </li>
          <li> Arroz </li>
          <li> Arroz </li>
          <li> Arroz </li>
        </ul>
      </ComponenteComFilhos>
    </Cartao>

  </div>
);