import React from "react";
import styled from "styled-components";
import c from '../common/constants'
// import logo from "./logo.svg"
// #363b5d

const TopBar = ({ children }) => {
    return (
        <Nav>
            <h5>{children}</h5>
            {/* <img src="./logo.svg" /> */}
        </Nav>
    )
}
export default TopBar;

const Nav = styled.div`
    /* display: flex; */
    /* justify-content: space-evenly; */
    /* border: 2px solid yellow; */
    background-color:${c.fb_blue};  
    position: fixed;
    top: 0;
    width: 100%;
`
