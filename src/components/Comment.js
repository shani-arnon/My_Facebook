import React from "react";
import styled from "styled-components";

const Comment = ({ user_id, timestamp, content, reactions, avatar }) => {

    return (
        <Box>
            <Img src={avatar} />
            <CommentBox>
                <P>{content}</P>
                <MetaBox>
                    <Like>Like</Like>
                    <Reply>Reply</Reply>
                    <Time>{timestamp} ago</Time>
                    {/* <Reactions>{reactions.length}</Reactions> */}
                </MetaBox>
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
`
const CommentBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    color: #606770;
    font-size: 1.2rem;
    /* border: 1px solid; */
`
const Like = styled.div`
    text-decoration: underline;
    color:#365899;
    font-size: 1.2rem;
    margin-right: .5rem;
`
const Reply = styled.div`
    text-decoration: underline;
    color:#365899;
    font-size: 1.2rem;
    margin-right: .5rem;
`
const P = styled.div`
    align-items: flex-start;
    display: flex;
    flex-basis: 90%;
    flex-direction: column;
    overflow: hidden;
    padding: 1rem;;
    font-size: 1.4rem;
    line-height: 1.8rem;
    background: gainsboro;
    color: black;
    font-weight: 500;
    border-radius: 1.8rem;    
`
const MetaBox = styled.div`
    display: flex;
    flex: 1;

`
const Time = styled.div``
const Reactions = styled.div``
const Img = styled.img`
    display: flex;
    object-fit: contain;
    height: 4rem;
    width: 4rem;
    border-radius: 50%; 
    border: .5px solid #ccd0d5;
    margin-right: 1rem;
`
