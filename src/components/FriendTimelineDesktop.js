import React from 'react'
import styled from "styled-components"
import FriendTimeline from './FriendTimeline'

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
                {friends.map((friend, i) => <FriendTimeline key={i} {...friend} />)}
            </Gallery>
        </Box>
    )
}

export default FriendTimelineDesktop;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    background: #fff;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1.4rem;
    height: 42rem;

    border-bottom: 1px solid rgb(204, 208, 213); 
    border-top: 1px solid rgb(204, 208, 213); 
    margin-bottom: 1rem;
    /* border: 8px solid blue; */
`
const Head = styled.div`
    display: flex;
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
    margin: .4rem;
    margin-bottom: 2rem;
    /* border: 1px solid white; */
`
const FriendsIcon = styled.div`
   background: url('images.png') no-repeat;
    background-size:2.5rem 2.5rem;
    height:2.5rem;
    width:2.5rem;
    margin-right: .5rem;
    padding: 1rem;
`
const FindFriends = styled.div`
    font-size: 1.2rem;
    color: #3578e5;
    margin-left: 17rem;
    &:hover{
        text-decoration: underline;
    }
`

