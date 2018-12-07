import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import TopBar from '../TopBar';
import Links from '../Links';

const Search = () => {
    return (
        <App>
            <TopBar>
                <Links />
            </TopBar>
        </App>


    );
};

export default Search;

const App = styled.div`
`