import React from 'react'; //criou esse componente do zero, vai ficar como uma tag para o logo do menu
import Logo from '../../assets/img/Logo.png'; //import do logo
import './Menu.css'; //import do css do menu. que ta dentro desta pasta (menu)
import Button from '../Button';

import{Link} from'react-router-dom';

//import ButtonLink from '../componentes/ButtonLink';  //isso é pra caso eu queira usar o buttonlink e nao o button e vice versa


    //vai ser uma funcao que retorna o logo em um componente chamado menu ou sera q retorna pro menu atraves desse logo
    //nav é algo pra navegaçao, className recebe o .Menu que esta no Menu.css, entao o nav la na tela vai receber o css com cores etc
    //o img tbm tem um className que recebe o css do logo que no caso é so o tamanho do logo q ta la 
    //o src={Logo} ou ta recebendo a imagem do logo ou estava aplicando o css no logo la na pasta src
    
    /*abaixo temos: nav sendo o header(cabeçalho da tela) recebendo o css "Menu"
    dentro do nav temos o logo sendo um link pra pagina inicial,onde, <a href> serve pra linkar , transformando 
    assim o logo em um link clicavel.
    
    < a classeName="ButtonLink"> essee butonlink foi criado no css depois vem o href que linka algo ao clicar
    o a virou uma tag ButtonLink q vai poder ser usada em outros lugares
    
    <a> serve para criar uma area clicavel para links, o href vai dentro dele, nesse caso criamos uma tag button 
    que vai funcionar como o <a>
    
    o buttonlink no caso é um componente
    */

  /* ----se quiser usar o buttonlink no lugar do button é so importar o buttonlink dnv e colar isso aq no lugar do button
  
  <ButtonLink className="ButtonLink" href="/"> 
   Novo Video
</ButtonLink>   */

// o a foi substituido pelo link, o href pelo to trocou do html pro react

        function Menu(){ 
            return (
            
   <nav className="Menu">  
            
            <Link to="/">
                <img clLinkssName= "Logo" src={Logo} alt="Jefflix logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video"> 
                    Novo Video
            </Button>
   </nav>
    );
}

    export default Menu; 