import React from 'react';
import styled from "styled-components";

const FriendTimelineMobile = ({ first_name, last_name, avatar, new_posts }) => {
    return (
        <Box>
            <Img src={avatar} />
            <FriendName>{first_name} {last_name}</FriendName>
            <NewPosts>
                <Icon />
                {new_posts} new posts
                </NewPosts>
        </Box >
    )
}
export default FriendTimelineMobile;

const Box = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    height: 10rem;
    margin: .5rem;
`
const Img = styled.img`
    background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    background-size: cover;
    background-color: #ffcccc;
    height: 100%;
    width: 100%;
    border: 1px solid white;
`
const FriendName = styled.div`
    padding-top: .4rem;
    font-weight: bold;
    font-size: 1rem;
    text-align: left;
`
const NewPosts = styled.div`
    display:flex;
    align-items: center;
    font-size: 1.1rem;
    color: grey;
    text-align: left;
    padding-top: .8rem;
`
const Icon = styled.div`
    background:url('dot.png') no-repeat;
    background-size: 1rem 1rem;
    width: 1rem;
    height: 1rem;
    padding-right: 1rem;
`
