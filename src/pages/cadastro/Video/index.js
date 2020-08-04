import React from 'react';
import Basedaspaginas from '../../../componentes/Basedaspaginas';
import { Link } from 'react-router-dom';




function CadastroVideo(){
    return(

      
        <Basedaspaginas>  
          <h1>CADASTRO DE VIDEO</h1>
    
        <Link to="/cadastro/categoria">
        Pagina de cadastro
        </Link>

        </Basedaspaginas>
      

     
    )
  
  };

  export default CadastroVideo;