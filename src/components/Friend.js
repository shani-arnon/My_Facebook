import React from 'react';
import styled from "styled-components";

const Friend = ({ id, first_name, last_name, avatar, new_posts }) => {
    return (
        <Box>
            <Img src={avatar} />
            <FriendName>{first_name} {last_name}</FriendName>
            <NewPosts>{new_posts}</NewPosts>
        </Box>
    );
};

export default Friend;

const Box = styled.div`
    border: 2px solid red;
    display: flex; 
    flex-direction: column;
    height: 15rem;
    width: 100%;
`
const Img = styled.img`
    /* background: #d8dce6 url('dog.jpg') no-repeat center; */
    background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    background-size: cover;
    height: 13rem;
    width: 33.333%;; 
    border: .5px solid rgb(204, 208, 213);
    margin-bottom: 2rem;
`
const FriendName = styled.div`
    font-weight: bold;
    font-size: 1.4rem;
    margin-left: 1rem;
`
const NewPosts = styled.div`
    font-size: 1.4rem;
    font-weight: bold;
`