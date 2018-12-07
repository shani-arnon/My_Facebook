import React from 'react';
import styled from "styled-components";
import TopBar from '../TopBar';
import Links from '../Links';

const Friends = () => {
    return (
        <App>
            <TopBar>
                <Links />
            </TopBar>
        </App>
    );
};

export default Friends;

const App = styled.div`
`