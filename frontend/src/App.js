//Neste arquivo é onde nós iremos centralizar nossas páginas escritas em ReactJS, dentro de arquivo podemos ver os imports que nada mais são embutir código javascript de outros arquivos .js

import React from 'react';
// import React, { useState } from 'react';
//Para que possamos escrever em formato JSX é necessario que importemos dentro de todo o arquivo que formos utilizar ReactJS o React que possibilita a leitura do JSX.
import './Global.css';
//Assim como podemos embutir códigos .js o ReactJS nos permite também embutir .css, assim com o link do HTML.

import Routes from './routes';

function App() {
  
  // Aqui abaixo segue funções para a explicão entre a diferença do JS entre o React.
  // const [y, setY] = useState(0);
  // let x = 0;

  // function change_in_js () {
  //   x += 1;
  //   console.log(x);
  // }

  // function change_in_react () {
  //   setY(y + 1);
  //   console.log(y)
  // }

  return (
    <div>

      
      {
      /* Aqui abaixo server uma explicação entre a diferença do JS antigo 
      <div className="js">
        <p>Contador {x}</p>
        <button onClick={change_in_js}>Increment in js</button>
      </div>
      <div className="reativo">
        <p>Contador {y}</p>
        <button onClick={change_in_react}>Increment in react</button>
      </div> */
      }

      <Routes />

    </div>
  );
}

export default App;
