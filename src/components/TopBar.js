import React from "react";
import styled from "styled-components";
import c from '../common/constants'

const TopBar = ({ children }) => {
    return (
        <Nav>
            <h5>{children}</h5>
        </Nav>
    )
}
export default TopBar;


const Nav = styled.div`
    background-color:${c.fb_blue};  
    position: fixed;
    top: 0;
    width: 100%;
`
