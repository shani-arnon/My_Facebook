import React, { Component } from 'react';
import styled from "styled-components"
import Friend from './FriendDesktop'

export default class FriendsListSide extends Component {
    render() {
        const { friends = [] } = this.props
        return (
            <Box className={this.props.className}>
                <Friends>CONTACTS</Friends>
                <Gallery>
                    {friends.map((friend, i) => <Friend key={i} {...friend} />)}
                </Gallery>
                <Bottom>See All Friends</Bottom>
            </Box>
        )
    }
}
const Box = styled.div`
    display:none;
    /* display: flex; */
    flex-direction: column;
    width:100%;
    align-items: center;
    background: #e9ebee;
    border-left: 1px solid rgb(204, 208, 213); 
    height: 100%;
    width: 100%;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: #1d2129;
    margin-top: 4rem; 
    padding: 1.5rem;
`
const Gallery = styled.div`
    display: flex;
    flex-direction: column;
`
const Bottom = styled.div`
    color: rgb(87, 107, 149);
    margin-top: 1rem;
    margin-bottom: 2rem;
`
const Friends = styled.div`
    color: rgb(87, 107, 149);
    cursor: pointer;
    font-weight: 500;
    padding: 1rem;
`
const FindFriends = styled.div``
