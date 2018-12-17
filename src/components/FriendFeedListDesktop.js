import React from 'react';
import styled from "styled-components";

const FriendFeedListDesktop = ({ first_name, last_name, avatar }) => {
    return (
        <Box>
            <Section>
                <Img src={avatar} />
                <FriendName>{first_name} {last_name}</FriendName>
            </Section>
            <NewPosts>
                <Icon />
            </NewPosts>
        </Box>
    );
};

export default FriendFeedListDesktop;

const Box = styled.div`
    display: flex; 
    width: 100%;
    justify-content: space-between;
    margin-bottom: 1rem;
    /* border: 3px solid rebeccapurple; */
`
const Img = styled.img`
    background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    background-size: cover;
    background-color: #6666FF;
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    justify-content: flex-start;
`
const Section = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding-right: 1.5rem;
`
const FriendName = styled.div`
    padding-left: .3rem;
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
`
const Icon = styled.div`
    background:url('dot.png') no-repeat;
    background-size: 1rem 1rem;
    width: 1rem;
    height: 1rem;
    padding-right: 1rem;
`