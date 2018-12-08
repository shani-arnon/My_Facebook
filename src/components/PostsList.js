import React, { Component } from "react";
import styled from "styled-components";
import Post from "./Post"


export default class PostsList extends Component {
    state = {
        posts: []
    }
    render() {
        return (
            <StyledGallery>
                <GalleryBox>
                    {this.props.posts.map((post, i) => <Post key={i} {...post} />)}
                </GalleryBox>
            </StyledGallery>
        )
    }
}

const StyledGallery = styled.div`
    display: flex;
    width: 100%; 
    /* border: 3px solid red; */
`;
const GalleryBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%; 
`;