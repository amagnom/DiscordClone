import React from 'react';

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

//Criando as props que cada botao receberá
export interface Props {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({ channelName, selected }) => {
  return (
   
   <Container className={selected ? 'active' : ''}>
      <div>
        {/* 
Coloca o icone de # e recebe o nome do canal nas props
*/}
        <HashtagIcon />
        <span>{channelName}</span>
      </div>

      <div>

        {/* 
Coloca o icone de invite e o das settings no final do button
*/}
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>

    
  );
};

export default ChannelButton;