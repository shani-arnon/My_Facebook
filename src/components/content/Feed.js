import React, { Component } from 'react'
import styled from "styled-components"

import CreatePost from "../CreatePost"
import PostsList from '../PostsList'
import SideBar from '../SideDivFeedDesktop'
import FriendFeedDesktop from '../FriendFeedDesktop'

export default class Feed extends Component {
    state = {
        user_id: 3,
        posts: [],
        friends: []
    }

    componentDidMount() {
        // console.log('Feed')
        // console.log('history', this.props.history)
        // console.log('componentDidMount');
        const POSTS_URL = `/api/posts/${this.state.user_id}`
        console.log('POSTS_URL', POSTS_URL)
        const FRIENDS_URL = `/api/friends/${this.state.user_id}`
        console.log('FRIENDS_URL', FRIENDS_URL)

        Promise.all([
            fetch(POSTS_URL)
                .then(res => {
                    return res.json()
                })
            ,
            fetch(FRIENDS_URL)
                .then(res => {
                    return res.json()
                })
        ])
            .then(([posts, friends]) => {
                console.log('friend', friends.length)
                console.log('posts', posts.length)

                this.setState({
                    posts,
                    friends
                })
            })
            .catch(ex => {
                console.log('parsing faild', ex)
            })
    }
    render() {
        return (
            <App>
                <SideBarWrap>
                    <StyledSideBar />
                </SideBarWrap>
                <Main>
                    <CreatePost />
                    <PostsList posts={this.state.posts} />
                </Main>
                <FriendsWrap>
                    <FriendsList friends={this.state.friends} />
                </FriendsWrap>
            </App>
        );
    }
}

const StyledSideBar = styled(SideBar)``;
const SideBarWrap = styled.div`
    ${StyledSideBar}{
        @media (min-width: 700px) {
            display: flex;
	        width: 100%;
	        position: sticky;
	        top: 6rem;
        } 
    }
`
const FriendsList = styled(FriendFeedDesktop)``;
const FriendsWrap = styled.div`
    right: 0;
    position: sticky;
    ${FriendsList}{
        @media (min-width: 700px) {
            display: flex;
        } 
    }
`
const App = styled.div`
    display: flex;
    background-color: rgb(233, 235, 238);
`
const Main = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    margin-right: 5rem;
    flex: 1;
    overflow: auto;
`

