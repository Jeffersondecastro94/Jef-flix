import React, { Children } from 'react';


/*props =>{className:"oque alguem passar", 
href:"/"
}
O PROPS É UM OBJETO

no return de buttonlink o temos o espaço pra por um link <a> e em href podemos qualquer qualquer 
endereço de link, o className esta recebendo as propriedades do buttonlink que esta la no menu, 
atraves do props.className assim fazendo o Butonlink ser um botao onde tem todas as caracteristicas podendo 
se quiser mudar o link q ele direciona e o nome do botao
*/

/*
className={props.className}  --> o classe name desse buttonlink (pai) ta recebendo as propriedades css 
que tem la no button filho no menu, que tambem esta com nome de className. ou seja, pelo parametro prosp
esse botao aq ta recebendo os css da filha em className

{props.childrean} faz com que oq apareça no botao da tela seja oq ta escrito no botao filho la no menu
agora, se eu escrever qualquer coisa nesse botao aq , vai aparecer no botao onde tiver filhos como no botao do menu

*/ 
function ButtonLink(props){
   // console.log(props) //opcional , é so pra ver o props la no console da pagina f12

    return(
        <a href="/" className={props.className}>
            {props.children}
        </a>

    );
}

export default ButtonLink;