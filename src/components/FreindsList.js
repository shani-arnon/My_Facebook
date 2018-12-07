import React, { Component } from 'react';
import styled from "styled-components";

export default class FriendsList extends Component {
    render() {
        return (
            <Box>
                <Head>
                    <Friends>Friends</Friends>
                    <FindFriends>Find Friends</FindFriends>
                </Head>
                <Gallery>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
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
    padding: 2rem;
    /* border: 2px solid blue; */
`

const Gallery = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 100%;
    border: 2px solid red;
    padding: 0

`
const Item = styled.div`
    background: #d8dce6 url('dog.jpg') no-repeat center;
    background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    background-size: cover;
    height: 12rem;
    width: 12rem; 
    border: .5px solid rgb(204, 208, 213);
    /* margin-bottom: 3rem; */
    /* max-width: 100%; */
`

const Bottom = styled.div`
    color: rgb(87, 107, 149);
    margin-top: 1rem;
    margin-bottom: 1rem;

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