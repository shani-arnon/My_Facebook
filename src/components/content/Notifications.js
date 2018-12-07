import React from 'react';
import styled from "styled-components";
import TopBar from '../TopBar';
import Links from '../Links';

const Notifications = () => {
    return (
        <App>
            <TopBar>
                <Links />
            </TopBar>
        </App>
    );
};

export default Notifications;

const App = styled.div`
`