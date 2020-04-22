import React from 'react'; // App.js linha 4
import ReactDOM from 'react-dom';
// ReactDOM é uma virtualização do DOM do HTML, criado para agilizar as renderizações do JSX (index.html linha 5) em HTML.

//Gente isso é dificil de explicar então desculpa se ficar confuso. 

// O ReactJS cria e abre no seu navegador padrão um servidor com o seu código, para executar esse processo basta em seu terminal do VS Code na pasta frontend escrever o comando "npm start", lembrando que se essa for sua primeira vez executando este comando o mesmo ira demorar um pouco.

// O ReactJS tem o que chamamos de fast reload, isso é, a habilidade de que cada vez que alteramos um de nossos arquivos e salvamos, o React se encarrega de observar essas alterações e recarregar nossa página, e ele faz isso de maneira muito rápida, isto se da por causa do ReactDom que nada mais é do que uma cópia da arvore de elementos do HTMl o DOM, que fica observando uma modificação do estado de algum elemento, ou salve do programador, nesse momento nós chegamos a um dos conceitos mais importantes do React que são os estados, o javascript normal é movido a funções ou seja cada vez que um evento acontece uma função é disparada e a página é recarregada, já no React o mesmo é movido a estados ou seja ele é reativo, isso quer dizer que a página só atualiza se o estado for alterado, por exemplo: nas linhas 10 a 22 e 29 a 37 você pode descomentar e abrir o console no seu navegador e ver as diferenças antes mencionadas.

import App from './App'; 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);