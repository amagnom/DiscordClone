import React from 'react';

import { Container } from './styles';

const ServerList: React.FC = () => {
    return (
        <Container>

            <ServerButton isHome/>
            <Separator />

            <ServerButton />
            <ServerButton />
            <ServerButton hasNotifications/>
            <ServerButton mentions={3}/>
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotifications/>
            <ServerButton />
            <ServerButton />
            <ServerButton />

            <Container />
    );
};

export default ServerList;