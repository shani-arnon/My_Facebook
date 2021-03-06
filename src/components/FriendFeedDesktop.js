import React, { Component } from 'react';
import styled from "styled-components"
import Friend from './FriendFeedListDesktop'

export default class FriendFeedDesktop extends Component {
    render() {
        const { friends = [] } = this.props
        return (
            <Box className={this.props.className}>
                <Gallery>
                    <Friends>CONTACTS</Friends>
                    {friends.map((friend, i) => <Friend key={i} {...friend} />)}
                    <Bottom>See All Friends</Bottom>
                </Gallery>
            </Box>
        )
    }
}
const Box = styled.div`
    display:none;
    flex-direction: column;
    justify-content: flex-start;
    width:100%;
    right: 0;
    background: #e9ebee;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: #1d2129;
    margin-top: 5rem; 
`
const Gallery = styled.div`
    display: flex;
    flex-direction: column;
    height: 90vh;
    padding: 1rem;
    margin-left: 2rem;
    border-left: 1px solid rgb(204, 208, 213); 
    /* border: 2px solid; */
`
const Bottom = styled.div`
    color: rgb(87, 107, 149);
    margin-top: 1rem;
    margin-bottom: 2rem;
`
const Friends = styled.div`
    color: #4a4a4a;
    font-size: 1.1rem;
    height: 1.6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    font-weight: bold;
    margin-bottom: 1rem;
`
