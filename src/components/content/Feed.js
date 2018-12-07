import React, { Component } from 'react';
import styled from "styled-components";

import TopBar from '../TopBar';
import Links from '../Links';
import CreatePost from "../CreatePost";
import PostsList from '../PostsList';
import Post from '../Post';

// import posts from '../posts_data.json'

export default class Feed extends Component {
    render() {
        return (
            <App>
                <TopBar>
                    <Links />
                </TopBar>
                <Box>
                    <CreatePost />
                    <PostsList />
                </Box>
                <Post />

            </App>
        );
    }
}


const App = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    background: #e8e8e8;
`

const Box = styled.div`
    border: 1px solid #f6f7f8;
    display: flex;
    flex: 1;
    margin-top: 5rem;
`
    // const PostBox = styled.ul`
    //     list-style: none;
    // `
    // const Post = styled.li`
    // font-family: Roboto, 'Droid Sans', Helvetica, sans-serif;
    // cursor: pointer;
    // color: #1d2129;


