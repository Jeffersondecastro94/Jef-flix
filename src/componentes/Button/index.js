import styled from 'styled-components';
/* aqui estamos usando outra forma de fazer um botao , instalamos o styled-components no projeto com
npm i styled-components. entao aq no index do componente Button importamos o styled criamos a constante Button abaixo
que recebe styled e o a que é para ser um link dentro do styled ja temos o href e outras coisas entao pegamos o
css que tbm ta sendo usado no buttonlink e colamos aq onde faz o button ter todas essas propriedades de css

em hover e focus tinha ButtonLink :hover e ButtonLink focus, oq faz referenciar o buttonlink , nesse caso queremos referenciar o proprio 
button entao colocamos o &:focus e &:hover.

pronto agr é so substituir o buttonlink por button q vai funcionar igual. no caso to usando ele agr no menu
*/
const Button = styled.button`

color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
   
   &:hover, 
   &:focus {
    opacity: .5;
   }
`;

export default Button