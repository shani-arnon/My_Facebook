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
    padding: 1rem;
    background-color: white;
    width: 100%;
    align-items: center;
    /* border: 2px solid green; */
`
const CommentBox = styled.div`
    display: flex;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    /* border: 3px solid blueviolet; */
`
const P = styled.div`
    align-items: flex-start;
    display: flex;
    flex-basis: 90%;
    flex-direction: column;
    overflow: hidden;
    padding: 1rem;;
    font-size: 1.2rem;
    line-height: 1.4rem;
    background: gainsboro;
    border-radius: 1.8rem;    
`
const Img = styled.img`
    display: flex;
    /* background: #d8dce6 url('me.jpg') no-repeat center; */
    /* background: #d8dce6 url('dog2.jpg') no-repeat center; */
    object-fit: contain;
    /* background-size: 100% 100%;
    -webkit-background-size: 100% 100%; */
    height: 4rem;
    width: 4rem;
    border-radius: 50%; 
    border: 1px solid #ccd0d5;
    margin-right: 1rem;
`
