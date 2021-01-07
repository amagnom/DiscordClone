import styled from 'styled-components';



export const Container = styled.div`
display: flex;
align-items: center;
//cima direita baixo esquerda
padding: 4px 16px;
margin-right: 4px;
background-color: transparent;

//Se tiver o parametro mention passado
&.mention {
  background-color: var(--mention-message);
  border-left: 2px solid var(--mention-detail);
  padding-left: 14px;
}

//Para que exceto a primeira,as divs tenham um espaçamento de 13px
& + div {
  margin-top: 13px;
}

`;



export const Avatar = styled.div`
width: 40px;
height: 40px;
background-color: var(--secondary);
border-radius: 50%;

//Se passou como parametro que é bot
&.bot {
  background-color: var(--mention-detail);
}
`;



export const Message = styled.div`
min-height: 40px;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-left: 17px;
`;





export const Header = styled.div`
display: flex;
align-items: center;

//Configuracao da tag strong dentro de header
> strong {
  color: var(--white);
  font-size: 16px;
}

//Configuracao da tag span dentro de header
> span {
  margin-left: 6px;
  background-color: var(--discord);
  color: var(--white);
  border-radius: 4px;
  padding: 4px 5px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 11px;
}

//Configuracao da time strong dentro de header
> time {
  margin-left: 6px;
  color: var(--gray);
  font-size: 13px;
}
`;



export const Content = styled.div`
text-align: left;
font-size: 16px;
color: var(--white);
`;



export const Mention = styled.span`
color: var(--link);
cursor: pointer;
//Acao de passar o mouse em cima
&:hover {
  text-decoration: underline;
}

`;