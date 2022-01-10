import React from 'react';
import ReactDOM from 'react-dom';
import ComponenteComProps from './componentes/ComponenteComProps';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import './index.css';

ReactDOM.render(
  <div>
    <ComponenteComProps nome="André" cargo="Instrutor"/>
    <ComponenteComProps nome="Vini" cargo="Instrutor"/>
    <ComponenteComProps nome="Maga" cargo="GP"/>
    <ComponenteComProps nome="Gi" cargo="GP"/>
  </div>
,document.getElementById('root')
);
