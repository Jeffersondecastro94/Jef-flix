import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

import {BrowserRouter,Switch,Route}from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import Home from './pages/Home';
import CadastroCategoria from './pages/cadastro/Categoria';

//---------------AQUI É O INDEX QUE RENDERIZA AS TELAS


//FEZ AQUI PRA TESTAR, MAS FOI CRIADO UM COMPONENT EM PAGES E DEPOIS IMPORTADO ELE AQ ACIMA
/*function CadastroVideo(){
  return(
    <divi>
      pagina de CadastroVideo
    </divi>
  )

};*/

//todo componente é uma funcao , aq fez uma rapida para a pag 404, mas pode criar um component para ela
const Pagina404 = () =>(<div>error 404</div>)

ReactDOM.render(
// o react-router-dom estamos usando parar navegar entre as paginas
//Brouserrouter- serve para criar um root entre as paginas . 
//Switch -funciona como um if , o que esta no path é o que estará no url no caso a barra, vai encaminhar para o componente app, que é a tela inicial
//Route -faz o encaminhamento da rota. Qual componente sera rederizado na tela. route procura a rota que voce quer o mais rapido possivel
//route serve para navegar nas paginas usando o url ex: http://localhost:3000/Cadastro/Video , vai para a pagina de cadastrar videos
// exact- é importante para assegurar qual rota estamos querendo exatamente se digitar /uahs ele nao vai encontrar exatamente a rota / e vai encaminhar para a de erro 404.
//PATH SEM USAR, ELE ENCAMINHA PARA O QUE ESTIVER SEM PATH, NESSE CASO O COMPONENTE PAGINA404

//SE TIVER SO / VAI PARA TELA INICIAL, /<COMPONENT QUE NAO EXISTE> VAI PARA 404, /E COMPONENT CORRETO VAI PARA A TELA DESEJADA

<BrowserRouter>
  <Switch>
    <Route path="/" component={ Home} exact />
    <Route path="/cadastro/video" component={CadastroVideo}/>
    <Route path="/cadastro/categoria" component={CadastroCategoria}/>
    <Route component={Pagina404} />


  </Switch>
</BrowserRouter>  , 

  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
