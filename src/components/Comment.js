import React from "react";
import styled from "styled-components";

const Comment = ({ user_id, timestamp, content, reactions, avatar }) => {

    return (
        <Box>
            <CommentBox>
                <Img src={avatar} />
                <P>{content}</P>
            </CommentBox>
        </Box>
    )
}
export default Comment

const Box = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background-color: white;
    width: 100%;
    border: 2px solid green;
`
const CommentBox = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    border: 3px solid blueviolet;
`
const P = styled.div`
    font-size: 1.4rem;
    background: gainsboro;
    border-radius: 0.8rem;
    padding: 1rem;
`
const Img = styled.img`
    display: flex;
    /* background: #d8dce6 url('me.jpg') no-repeat center; */
    background: #d8dce6 url('dog2.jpg') no-repeat center;
    object-fit: cover;
    /* size: 100% 100%; */
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 50%; 
    border: 1px solid #ccd0d5;
`
