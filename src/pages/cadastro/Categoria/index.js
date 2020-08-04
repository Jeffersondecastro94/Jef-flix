import React from 'react';
import Basedaspaginas from '../../../componentes/Basedaspaginas';
import { Link } from 'react-router-dom';




function CadastroCategoria(){
    return(

      
        <Basedaspaginas>  
          <h1>CADASTRO DE Categoria</h1>
    
        <Link to="/">
        ir para home
        </Link>

        </Basedaspaginas>
      

     
    )
  
  };

  export default CadastroCategoria;