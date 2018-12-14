import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import CreatePost from "../CreatePost";

import Images from '../Photos';
import FriendsList from "../FreindsList";
import PostsList from "../PostsList";
import ActionBar from '../ActionBar';

class Timeline extends Component {

    state = {
        user_id: 3,
        posts: [],
        friends: []
    }

    componentDidMount() {
        console.log('componentDidMount');

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

    selectTab = (tab) => {
        this.setState({ selected: tab })
    }

    getPosY(tab) {
        const selected = this.state.selected;
        const current = this.state[tab];
        return selected === tab ? current.pickedY : current.normalY;
    }

    render() {
        return (
            <App className={this.props.className}>
                <HeroImg>
                    <ProfileImg />
                    <NameImg>Shani Arnon</NameImg>
                </HeroImg>
                <TabBar>
                    <TimelineTab>Timeline</TimelineTab>
                    <AboutTab>About</AboutTab>
                    <FriendsTab>Friends</FriendsTab>
                    <PhotosTab>Photos</PhotosTab>
                    <ArchiveTab>Archive</ArchiveTab>
                    <MoreTab>More</MoreTab>
                </TabBar>
                <Box>
                    <CreatePost />
                    <Images />
                    <FriendsList friends={this.state.friends} />
                    <PostsList posts={this.state.posts} />
                </Box>
            </App >
        )

    };

}
export default Timeline;

const App = styled.div`
    display: none;
    flex: 1;
    flex-direction: column;
    background: rgb(233, 235, 238);
`
const Box = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    border-bottom: 1px solid lightgray;
`
const ProfileImg = styled.div`
    display: flex;
    position: absolute;
    width:20rem;
    height: 20rem;
    background: #d8dce6 url('me.jpg') no-repeat center;
    background-size: 100% 100%;
    border-radius: 0.5rem;
    border: 4px solid #fff;
    top: 15rem;
    left:3rem;
`
const HeroImg = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 33rem;
    background: #d8dce6 url('IMG_0662.JPG') no-repeat center;
    background-size: cover;
`
const NameImg = styled.div`
    width: 100%;
    text-align: center;
    font-weight:700;
    font-size: 3rem;
    color: #fff;
    font-family: Helvetica, Arial, sans-serif;
    letter-spacing: -0.25px;
    line-height: 1;
    padding: 1rem;
`
const TabBar = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height:4rem;
    background-color: #fff;
    font-weight: 600;
    font-size: 1.4rem;
    cursor: pointer;
`
const TimelineTab = styled.div`
    color: #365899;
    border-right: 1px solid #e9eaed;
    padding-left: 2rem;
    padding-right: 2rem;
    &:hover{
        background-color: whitesmoke;
    }
`
const AboutTab = styled.div`
    color: #365899;
    border-right: 1px solid #e9eaed;
    padding-left: 2rem;
    padding-right: 2rem;
    &:hover{
        background-color: whitesmoke;
    }
`
const FriendsTab = styled.div`
    color: #365899;
    border-right: 1px solid #e9eaed;
    padding-left: 2rem;
    padding-right: 2rem;
    &:hover{
        background-color: whitesmoke;
    }
`
const PhotosTab = styled.div`
    color: #365899;
    border-right: 1px solid #e9eaed;
    padding-left: 2rem;
    padding-right: 2rem;
    &:hover{
        background-color: whitesmoke;
    }
`
const ArchiveTab = styled.div`
    color: #365899;
    border-right: 1px solid #e9eaed;
    padding-left: 2rem;
    padding-right: 2rem;
    &:hover{
        background-color: whitesmoke;
    }
`
const MoreTab = styled.div`
    color: #365899;
    border-right: 1px solid #e9eaed;
    padding-left: 2rem;
    padding-right: 2rem;
    &:hover{
        background-color: whitesmoke;
    }
`











