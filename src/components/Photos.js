import React, { Component } from 'react';
import styled from "styled-components";

export default class Photos extends Component {
    render() {
        return (
            <Box>
                <Head>
                    <Imgs>Photos</Imgs>
                    <AddPhoto>Add Photo</AddPhoto>
                </Head>
                <Gallery>
                    <GridB>
                        <GItem1 />
                        <GItem2 />
                    </GridB>
                    <GridA>
                        <Item1 />
                        <Item2 />
                        <Item3 />
                    </GridA>
                </Gallery>
                <Bottom>See All Photos</Bottom>
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
    padding: 3rem;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1.4rem;
    text-align: center;
`
const GridA = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-right: .15rem;
    /* border: 1px solid red; */

    margin-top: .3rem;
    margin-bottom: .3rem;
`
const GridB = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-top: .3rem;
    margin-bottom: .3rem;
    margin-left: .15rem;
    /* border: 1px solid; */
`
const GItem1 = styled.div`
    background: #d8dce6 url('dog3.jpg') no-repeat center;
    background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    background-size: cover;
    border: .5px solid rgb(204, 208, 213);
    height: 15rem;
    width: 15rem;
    max-width: 100%;
    margin-right: .3rem;
    margin-left: .3rem;
    margin-bottom: .3rem;
    /* width: 100%;
    height: 100%; */
`
const GItem2 = styled.div`
    background: #d8dce6 url('IMG_0662.JPG') no-repeat center;
    background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    background-size: cover;
    border: .5px solid rgb(204, 208, 213);
    height: 15rem;
    width: 15rem;
    max-width: 100%;
    margin-right: .3rem;
    margin-left: .3rem;
    margin-bottom: .3rem;
    /* width: 100%;
    height: 100%; */
`
const Item1 = styled.div`
    background: #d8dce6 url('dog4.jpg') no-repeat center;
    background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    background-size: cover;
    border: .5px solid rgb(204, 208, 213);
    height: 10rem;
    width: 15rem; 
    max-width: 100%;
    margin-bottom: .3rem;
    /* width: 100%;
    height: 100%; */
`
const Item2 = styled.div`
    background: #d8dce6 url('dog2.jpg') no-repeat center;
    background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    background-size: cover;
    border: .5px solid rgb(204, 208, 213);
    height: 10rem;
    width: 15rem; 
    max-width: 100%;
    margin-bottom: .3rem;
    /* width: 100%;
    height: 100%; */
`
const Item3 = styled.div`
    background: #d8dce6 url('dog.jpg') no-repeat center;
    background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    background-size: cover;
    border: .5px solid rgb(204, 208, 213);
    height: 10rem;
    width: 15rem; 
    max-width: 100%;
    margin-bottom: .3rem;
    /* width: 100%;
    height: 100%; */
`
const Gallery = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis:100%;
    max-width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    `
const Bottom = styled.div`
    color: rgb(87, 107, 149);
    margin-top: 1rem;
`
const Imgs = styled.div``
const AddPhoto = styled.div``
const Head = styled.div`
    display: flex;
    justify-content: space-between;
    color: rgb(87, 107, 149);
    cursor: pointer;
    font-weight: 500;
`