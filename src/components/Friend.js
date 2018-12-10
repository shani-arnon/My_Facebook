import React from 'react';
import styled from "styled-components";

const Friend = ({ id, first_name, last_name, avatar, new_posts }) => {
    return (
        <Box>
            <Img src={avatar} />
            <FriendName>{first_name} {last_name}</FriendName>
            <NewPosts>{new_posts} new posts</NewPosts>
        </Box>
    );
};

export default Friend;

const Box = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    flex: 3;
    padding: .1rem;
`
const Img = styled.img`
    background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    background-size: cover;
    background-color:#ffbb99;
    height: 12rem;
    border: 1px solid rgb(204, 208, 213);
`
const FriendName = styled.div`
    padding: .3rem;
    font-weight: bold;
    font-size: 1.2rem;
    text-align: left;
`
const NewPosts = styled.div`
    font-size: 1.2rem;
    color: grey;
    margin-bottom: 1.5rem;
    text-align: left;
    padding-left: .3rem;
`