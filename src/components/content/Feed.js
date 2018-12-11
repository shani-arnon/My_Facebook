import React, { Component } from 'react';
import styled from "styled-components";

import CreatePost from "../CreatePost";
import PostsList from '../PostsList';

export default class Feed extends Component {
    state = {
        user_id: 2,
        posts: []
    }
    componentDidMount() {
        console.log('componentDidMount')
        const URL = `/api/posts/${this.state.user_id}`
        console.log('URL', URL)
        fetch(URL)
            .then(res => {
                return res.json()
            })
            .then(json => {
                console.log('json', json)
                this.setState({
                    posts: json
                })
            })
            .catch(ex => {
                console.log('parsing faild', ex)
            })
    }
    render() {
        return (
            <App>
                {/* <Sidebar /> */}
                <Main>
                    <CreatePost />
                    <PostsList posts={this.state.posts} />
                </Main>


            </App>
        );
    }
}


const App = styled.div`
    display: flex;
    flex: 1;
    background: #e8e8e8;
    /* ${Sidebar}{
        display:none;
        @media (min-width: 700px) {
            display: block;
        }
    } */
`

const Main = styled.div`
    border: 1px solid #f6f7f8;
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    flex: 1;
`
