import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 5px 3px;
  border-radius: 5px;
  background-color: transparent;
  transition: background-color 0.2s;
 
 
  //TA INDO DENTRO DO CONTAINER LÁ DO INDEX, E SELECIONANDO A DIV, ESSE STYLE VAI P ELA
  > div {
    display: flex;
    align-items: center;
  }
 
  //TA INDO DENTRO DO CONTAINER LÁ DO INDEX, E SELECIONANDO A DIV E ENTAO O SPAN DENTRO DELA E
  //COLOCANDO O STYLE NELA
  > div span {
    margin-left: 5px;
    color: var(--senary);
  }
 
 
 //EVENTOS DE HOVER OU CLICAR NO CANAL, MUDA A COR DO FUNDO, E DO SPAN
  &:hover,&.active {
    background-color: var(--quinary);
    > div span {
      color: var(--white);
    }
  }
  
`;

//Passa o icone como parametro p funcao
export const HashtagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;
  color: var(--symbol);
`;


//Passa o icone como parametro p funcao
export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;
  color: var(--symbol);
  cursor: pointer;
  transition: color 0.2s;

  //Evento de hover vai mudar a cor
  &:hover {
    color: var(--white);
  }
`;


//Passa o icone como parametro p funcao
export const SettingsIcon = styled(Settings)`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  color: var(--symbol);
  cursor: pointer;
  transition: color 0.2s;

   //Evento de hover vai mudar a cor
  &:hover {
    color: var(--white);
  }
`;