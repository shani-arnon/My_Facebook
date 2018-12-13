import React from 'react';
import styled from "styled-components";

const FriendDesktop = ({ id, first_name, last_name, avatar, new_posts }) => {
    return (
        <Box>
            <Img src={avatar} />
            <FriendName>{first_name} {last_name}</FriendName>
            <NewPosts>
                <Icon />
                {/* {new_posts} new posts */}
            </NewPosts>
        </Box>
    );
};

export default FriendDesktop;

const Box = styled.div`
    display: flex; 
    width: 100%;
    justify-content: space-between;
    margin-bottom: 1rem;
`
const Img = styled.img`
    background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    background-size: cover;
    background-color: #ffcccc;
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    justify-content: flex-start;
    /* border: 1px solid rgb(204, 208, 213); */
`

const FriendName = styled.div`
    padding: .3rem;
    font-weight: 300;
    font-size: 1rem;
    text-align: left;
`
const NewPosts = styled.div`
    display:flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.2rem;
    color: grey;
    /* border: 1px solid red; */
`
const Icon = styled.div`
    background: #33cc33;
    border-radius: 50%;
    width: .5rem;
    height: .5rem;
`