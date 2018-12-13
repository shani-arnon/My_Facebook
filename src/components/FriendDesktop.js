import React from 'react';
import styled from "styled-components";

const FriendDesktop = ({ first_name, last_name, avatar }) => {
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
    background-color: #6666FF;
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    justify-content: flex-start;
    /* border: 1px solid rgb(204, 208, 213); */
`
const Section = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding-right: 1.5rem;
    /* border: 1px solid; */
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
    /* border: 1px solid red; */
`
const Icon = styled.div`
    background: #33cc33;
    border-radius: 50%;
    width: .5rem;
    height: .5rem;
`