import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  //cria-se uma referencia de mensagem
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;
//se pegar a div
    if (div) {
      //o scroll recebe o tamanho do scroll, para ela ir direto para
      //a ultima mensagem
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(3).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Arildo Magno"
            date="07/01/2021"
            content="Sextou!"
          />
        ))}

        <ChannelMessage
          author="Niko"
          date="07/01/2021"
          content={
            <>
              <Mention>@Arildo Magno</Mention>, me carrega no Dota de novo
              por favor?
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversarem #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;