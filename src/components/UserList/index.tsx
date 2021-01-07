import React from 'react';
import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

//Será usado abaixo esse component
const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 3</Role>
      <UserRow nickname="Arildo Magno" />
      <UserRow nickname="Lulinha" />
      <UserRow nickname="Lelis" />

      <Role>Offline - 14</Role>
      <UserRow nickname="NikoBot" isBot />
     
      <UserRow nickname="Dilma" />
      <UserRow nickname="Bonoro" />
      <UserRow nickname="Zeca" />
      <UserRow nickname="Creyson" />
      <UserRow nickname="Brunao" />
      <UserRow nickname="Everthon" />
      <UserRow nickname="Manel" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
    </Container>
  );
};

export default UserList;
