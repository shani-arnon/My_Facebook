import React, { Component } from 'react'
import styled from "styled-components"
import Friend from './Friend'

export default class FriendsList extends Component {
    render() {
        const { friends } = this.props
        return (
            <Box>
                <Head>
                    <Friends>Friends</Friends>
                    <FindFriends>Find Friends</FindFriends>
                </Head>
                <Gallery>
                    {friends.map((friend, i) => <Friend key={i} {...friend} />)}
                </Gallery>
                <Bottom>See All Friends</Bottom>
            </Box>
        )
    }
}
const Box = styled.div`
    display: flex;
    width:100%;
    flex-direction: column;
    justify-content: space-evenly;
    background: #fff;
    border-bottom: 1px solid rgb(204, 208, 213); 
    border-top: 1px solid rgb(204, 208, 213); 
    height: 100%;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1.4rem;
    text-align: center;
`

const Gallery = styled.div`
    display: flex;
    flex: 1;
    flex-wrap: wrap;
`

const Bottom = styled.div`
    color: rgb(87, 107, 149);
    margin-top: 1rem;
    margin-bottom: 2rem;
`
const Friends = styled.div``
const FindFriends = styled.div``
const Head = styled.div`
    display: flex;
    justify-content: space-between;
    color: rgb(87, 107, 149);
    cursor: pointer;
    font-weight: 500;
    padding: 1rem;
`