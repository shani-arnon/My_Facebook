import React from 'react';
import styled from "styled-components";

const Friend = ({ first_name, last_name, avatar, new_posts }) => {
    return (
        <Box>
            <Img src={avatar} />
            <FriendName>{first_name} {last_name}</FriendName>
            <NewPosts>
                <Icon />
                {new_posts} new posts
            </NewPosts>
        </Box>
    );
};

export default Friend;

const Box = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    margin: .3rem;
`
const Img = styled.img`
    background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    background-size: cover;
    background-color: royalblue;
    height: 10rem;
    flex: 3;
    border: 1px solid white;
`
const FriendName = styled.div`
    padding: .3rem;
    font-weight: bold;
    font-size: 1.1rem;
    /* text-align: left; */
`
const NewPosts = styled.div`
    display:flex;
    align-items: center;
    font-size: 1.1rem;
    color: grey;
    margin-bottom: 1.5rem;
    text-align: left;
    padding: .2rem;
`
const Icon = styled.div`
    background:url('dot.png') no-repeat;
    background-size: 1.5rem 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
    padding-right: 1.7rem;
`