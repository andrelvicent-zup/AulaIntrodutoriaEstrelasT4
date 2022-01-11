import React from 'react';
import ReactDOM from 'react-dom';
import ComponenteComFilhos from './componentes/ComponenteComFilhos';
import ComponenteComProps from './componentes/ComponenteComProps';
import Cartao from './componentes/Layouts/Cartao';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import './index.css';

ReactDOM.render(
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
,document.getElementById('root')
);
