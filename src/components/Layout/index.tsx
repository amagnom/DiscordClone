import React from 'react';

import { Grid } from './styles';

import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';


//Exportando com TS
const Layout: React.FC = () => {
    return (
        <div>
            <Grid>
                <ServerList />
                <ServerName />
                <ChannelInfo />
                <ChannelList />
            </Grid>
        </div>
    );
}



export default Layout;


/*
Exportando com JS exemplo
export default function(){
    return(<div>Ola</div>)
}
*/



