import react from "react";
import "./Cartao.css"

function Cartao(props) {
  return (
    <div className="Cartao">
        <div className="Titulo">
          {props.titulo}
        </div>
        <div className="Conteudo">
            {props.conteudo}
        </div>
    </div>
  );
}

export default Cartao;
