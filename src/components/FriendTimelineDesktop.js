import React from 'react'
import styled from "styled-components"
import Friend from './Friend'

const FriendTimelineDesktop = ({ friends }) => {
    return (
        <Box>
            <Head>
                <FriendsIcon />
                Friends
                <FindFriends>
                    Find Friends
                </FindFriends>
            </Head>
            <Gallery>
                {friends.map((friend, i) => <Friend key={i} {...friend} />)}
            </Gallery>
        </Box>
    )
}

export default FriendTimelineDesktop;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height:50rem;
    background: #fff;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1.2rem;
    border: 1px solid rgb(204, 208, 213); 
    border-radius: .3rem;
    padding: .4rem;
    /* border: 1px solid; */
`
const Head = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    color: rgb(87, 107, 149);
    cursor: pointer;
    font-weight: 500;
    padding: 1rem;
    font-size: 1.4rem;
    color: #1c1e21;
    font-size: 1.4rem;
    font-weight: 500;
`
const Gallery = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-size: cover;
    height: 100%;
    width:100%;
    margin-bottom: 1rem;
`

const FriendsIcon = styled.div`
   background: url('friends.png') no-repeat;
   background-size:2.5rem 2.5rem;
    height:2.5rem;
    width:2.5rem;
    margin-right: .5rem;
    padding: 1rem;
`
const FindFriends = styled.div`
    font-size: 1.2rem;
    color: #3578e5;
    margin-left: 16rem;
    &:hover{
        text-decoration: underline;
    }
`

