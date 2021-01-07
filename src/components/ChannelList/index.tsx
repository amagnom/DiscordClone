import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

{/* 
 Cada botao desse é um canal, que esta dentro do componente da lista de canais
*/}  
      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="dota" />
      <ChannelButton channelName="csgo" />
      <ChannelButton channelName="reclamar-da-vida" />
    </Container>
  );
};

export default ChannelList;