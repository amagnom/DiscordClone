import styled from "styled-components";



//SL - Server List 
//SN - Server Name 
//CI - Channel Info 
//CL - Channel List 
//CD - Channel Data 
//UL - User List

export const Grid = styled.div`
  display: grid;

  //Fica em ordem la da declaração os  tamanhos das colunas
  grid-template-columns: 71px 240px auto 240px;

  grid-template-rows: 46px auto 52px;

//Aqui vai a declaração dos grid, dividimos em 3 linhas e 4 colunas
//os grids

  grid-template-area : 
  'SL SN CI CI'
  'SL CL CD UL'
  'SL UI CD UL';

  height: 100%
`;
