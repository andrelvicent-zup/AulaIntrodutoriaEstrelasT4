import React from 'react';
import ReactDOM from 'react-dom';
import ComponenteComProps from './componentes/ComponenteComProps';
import Cartao from './componentes/Layouts/Cartao';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import './index.css';

ReactDOM.render(
  <div>
    <Cartao titulo="Cartao #1" conteudo="Aulas desse cartão"></Cartao>
  </div>
,document.getElementById('root')
);
