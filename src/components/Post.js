import React from "react";
import styled from "styled-components";
import Comment from './Comment'

const Post = ({ user_id, last_name, first_name, avatar, timestamp, content, comments, reactions }) => {

    return (
        <Box>
            <Header>
                <Img src={avatar} />
                <Meta>
                    <UserName>{first_name} {last_name}</UserName>
                    <Time>Published {timestamp} mins ago</Time>
                </Meta>
            </Header>
            <P>{content}</P>
            <Actions>
                <Like>Like</Like>
                <CommentAction>Comment</CommentAction>
                <Share>Share</Share>
            </Actions>
            <Reactions>
                <Icon />
                <Number>5</Number>
            </Reactions>
            <CommentList>
                {comments.map((comment, i) => <Comment key={i} {...comment} />)}
            </CommentList>
        </Box>
    )
}
export default Post;

const Box = styled.div`
    background-color: white;
    margin-top: .5rem;
    display: flex;
    padding: 1rem;
    margin-bottom: 1rem;
    flex-direction: column;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgrey;
`
const Header = styled.div`
    display: flex;
    align-items: center;
`
const Img = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    height: 4.5rem;
    width: 4.5rem;
    border-radius: 50%; 
    border: 1px solid #ccd0d5;
`

const UserName = styled.div`
    font-weight: bold;
    font-size: 1.4rem;
    padding-left: .5rem;
`
const Time = styled.div`
    font-size: 1.1rem;
    color: lightgrey;
    padding-left: .5rem;
`
const P = styled.div`
    font-size: 1.4rem;
    line-height: 1.8rem;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 500;
    padding-bottom: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-left: 4rem;
    padding-right: 2rem;
`
const CommentList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%; 
`
const Actions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    border-top: 1px solid lightgrey;
    padding-top: 1rem;
`
const Like = styled.div`
     /* background-image: url('./icons.png'); */
     /* background-repeat: no-repeat;
     background-size: 103px 371px;
     background-position: -21px -211px;
     background-position:-33px -80px; */
     display: flex;
     flex: 1;
     cursor: pointer;
     font-size: 1.4rem;
     justify-content: center;
    align-items: center;
`
const CommentAction = styled.div`
     cursor: pointer;
     display: flex;
     flex: 1;
     font-size: 1.4rem;
     justify-content: center;
    align-items: center;
`
const Share = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    cursor: pointer;
    font-size: 1.4rem;
`
const Reactions = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
    padding: 1rem;
    margin-top: 1rem;
`
const Icon = styled.div`
    /* background-image: url('./icons.png');
    background-position: 0 -300px;
    background-size: 103px 371px;
    background-repeat: no-repeat; */
    background: lightgrey;
    height: 1.6rem;;
    width: 1.6rem;;
`
const Number = styled.div`
    margin-left: 0.4rem;
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: bold;
`
const Meta = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
`

