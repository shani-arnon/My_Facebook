import React from "react";
import styled from "styled-components";

const Comment = ({ user_id, timestamp, content, reactions }) => {

    return (
        <Box>
            <P>{content}</P>

        </Box>
    )
}
export default Comment

const Box = styled.div`
    background-color: white;
    margin-top: .5rem;
    display: flex;
    flex: 1;
    padding: 1rem;
    flex-direction: column;
    /* border: 2px solid green; */
`
const P = styled.div`
    font-size: 1.2rem;
    margin-left: 6rem;
    margin-top: 1rem;

`
