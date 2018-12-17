import React, { Component } from 'react';
import styled from "styled-components";

export default class PhotosTimelineDesktop extends Component {
    render() {
        return (
            <Box>
                <Head>
                    <ImagesIcon />
                    Photos
                    <AddPhoto>Add Photo</AddPhoto>
                </Head>
                <Gallery>
                    <Item />
                    <Item />
                    <Item />

                    <Item />
                    <Item />
                    <Item />

                    <Item />
                    <Item />
                    <Item />
                </Gallery>
            </Box>
        )
    }
}
const Box = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1.4rem;
    height: 42rem;
    border: 1px solid rgb(204, 208, 213); 
    margin-bottom: 1rem;
    border-radius: .3rem;
`
const Head = styled.div`
    display: flex;
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
const ImagesIcon = styled.div`
   background: url('images.png') no-repeat;
    background-size:2.5rem 2.5rem;
    height:2.5rem;
    width:2.5rem;
    margin-right: .5rem;
    padding: 1rem;
`
const Gallery = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 2rem;
`
const Item = styled.div`
    background: #d8dce6 url('dog3.jpg') no-repeat center;
    background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    background-size: cover;
    border: 1px solid white;
    height: 10rem;
    width:30%;
    margin: .4rem;
`
const AddPhoto = styled.div`
    font-size: 1.2rem;
    color: #3578e5;
    margin-left: 18rem;
    &:hover{
        text-decoration: underline;
    }

`
