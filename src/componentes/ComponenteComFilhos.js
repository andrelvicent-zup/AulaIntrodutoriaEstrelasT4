import react from "react";

function ComponenteComFilhos(props){
    return (
        <div>
            <h2>Filhos: </h2>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default ComponenteComFilhos