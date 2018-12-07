import React from 'react';
import styled from "styled-components";
import TopBar from '../TopBar';
import Links from '../Links';

const Messenger = () => {
    return (
        <App>
            <TopBar>
                <Links />
            </TopBar>
        </App>
    );
};

export default Messenger;

const App = styled.div`
`