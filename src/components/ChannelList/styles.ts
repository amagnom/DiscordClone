import styled from 'styled-components';
import { Add } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: CL;
  display: flex;


  //Flex direction define o eixo principal e a direção (coluna ou linha por ex)
  flex-direction: column;
  padding: 24px 9.5px 0 16px;
  background-color: var(--secondary);
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;


  > span {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);
  }
`;

//Passa como funcao porque é um icone que vem da biblioteca lá
export const AddCategoryIcon = styled(Add)`
  width: 21px;
  height: 21px;
  color: var(--symbol);
  cursor: pointer;
`;