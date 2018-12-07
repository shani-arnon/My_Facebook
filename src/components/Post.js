import React from "react";
import styled from "styled-components";
import Comment from './Comment'

const Post = ({ author, timestamp, content, comments, reactions }) => {

    return (
        <Box>
            <Header>
                <Img></Img>
                <UserName>{author.first_name} {author.last_name}</UserName>
            </Header>
            <Time>{timestamp}</Time>
            <P>{content}</P>
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
    flex: 1;
    padding: 1rem;
    flex-direction: column;
    /* border: 2px solid green; */
`
const Header = styled.div`
    display: flex;
    align-items: center;
`
const Img = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid lightgrey;
    border-radius: 50%;
    background: #d8dce6 url('me.jpg') no-repeat center;
    /* background: #d8dce6 url('dog2.jpg') no-repeat center; */
    background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    height: 4.5rem;
    width: 4.5rem;
    border-radius: 50%; 
    /* border: 1px solid #ccd0d5; */
`

const UserName = styled.div`
    font-weight: bold;
    font-size: 1.4rem;
    margin-left: 1rem;
`
const Time = styled.div`
    font-size: 1rem;
    color: lightgrey;
    margin-left: 6rem;
    margin-top: -1.5rem;
`
const P = styled.div`
    font-size: 1.2rem;
    margin-left: 6rem;
    margin-top: 1rem;

`
const CommentList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%; 
    border: 1px solid
`
const ActionsBox = styled.div`
    border-top: 1px solid lightgrey;
    margin-top: 1rem;
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;

`

// const Like = styled.div`
//     background-image: url('./icons.png');
//     background-repeat: no-repeat;
//     background-size: 103px 371px;
//     /* background-position: -21px -211px; */
//     background-position:-33px -80px;
//     border: 1px solid lightgrey;
//     cursor: pointer;

//     width:20px;
//     height:20px;
//     display: flex;
//     justify-content: flex-end;
// `
// const Comment = styled.div`
//     background-image: url('./icons.png');
//     background-repeat: no-repeat;
//     background-size: 104px 371px;
//     background-position: 0 -211px;
//     border: 1px solid lightgrey;
//     cursor: pointer;
//     font-size: 1.2rem;
//     padding: 1rem;
//     width: 10rem;

//     display: flex;
//     justify-content: flex-end;
// `

