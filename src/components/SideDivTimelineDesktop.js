import React, { Component } from 'react'
import styled from "styled-components"

import PhotosTimeline from './PhotosTimelineDesktop'
import FriendTimelineDesktop from './FriendTimelineDesktop'

export default class SideDivTimelineDesktop extends Component {
    // state = {
    //     user_id: 3,
    //     posts: [],
    //     friends: [],
    // }
    // componentDidMount() {
    //     const POSTS_URL = `/api/posts/${this.state.user_id}`
    //     const FRIENDS_URL = `/api/friends/${this.state.user_id}`
    //     Promise.all([
    //         fetch(POSTS_URL)
    //             .then(res => {
    //                 return res.json()
    //             })
    //         ,
    //         fetch(FRIENDS_URL)
    //             .then(res => {
    //                 return res.json()
    //             })
    //     ])
    //         .then(([posts, friends]) => {
    //             console.log('friend', friends.length)
    //             console.log('posts', posts.length)

    //             this.setState({
    //                 posts,
    //                 friends
    //             })
    //         })
    //         .catch(ex => {
    //             console.log('parsing faild', ex)
    //         })
    // }
    render() {
        const { posts, friends } = this.props;

        return (
            <Side className={this.props.className}>
                <Intro>
                    <Header>
                        <Title>
                            <IntroIcon />
                            Intro
                    </Title>
                        <Tagline>This is my Facebook profile page!</Tagline>
                    </Header>
                    <MetaData>
                        <WorkIcon />
                        Works at Facebook
                </MetaData>
                    <MetaData>
                        <StudyIcon />
                        Studies at The Open University
                </MetaData>
                    <MetaData>
                        <FromIcon />
                        From Tel-Aviv, Israel
                </MetaData>
                    <MetaAction>Edit Details</MetaAction>
                    <MetaBtn> + Add to Featured</MetaBtn>
                </Intro>
                <PhotosTimeline />
                <FriendTimelineDesktop friends={friends} />
            </Side>
        )
    }
}

const Side = styled.div`
    display: flex; 
    flex-direction: column;
    margin-top: 1.5rem;
    left: 0; 
    margin-bottom: 15rem;
`
const Intro = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 23rem;
    border-radius: 0.3rem;
    border: 1px solid lightgray;
    padding: 1rem;
    cursor: pointer;
    color: #1c1e21;
    font-size: 1.4rem;
    font-weight: 500;
`
const Title = styled.div`
    display: flex;
`
const Header = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    font-size: 1.4rem;
    font-weight: 500;
    border-bottom: 1px solid lightgray;
`
const IntroIcon = styled.div`
    background: url('intro.png') no-repeat;
    background-size:2rem 2rem;
    height:2rem;
    width:2rem;
    margin-right: .5rem;
`
const Tagline = styled.p`
    color: #1c1e21;
    background-color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
    margin-left: 2rem;
    padding-bottom: 1rem;
    padding-top: 1rem;
`
const MetaAction = styled.div`
    color: #365899;
    margin-left: 3rem;
    margin-top: .5rem;
    margin-bottom: .5rem;
    font-size: 1.3rem;
    font-weight: 400;
`
const MetaData = styled.div`
    display: flex;
    align-items: center;
    color: black;
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 1.3rem;
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
`
const MetaBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #576b95;
    color: #576b95;
    border-radius: .5rem;
    width: 100%;
    height: 1.2rem;
    padding: 1.2rem;
    font-size: 1.3rem;
    padding-top: 1.2rem;
`
const WorkIcon = styled.div`
    background: url('work.png') no-repeat;
    background-size: 1.5rem 1.5rem;
    height: 1.5rem;
    width: 1.5rem;
    margin-right: .5rem;
`
const StudyIcon = styled.div`
    background: url('study.png') no-repeat;
    background-size: 1.5rem 1.5rem;
    height: 1.5rem;
    width: 1.5rem;
    margin-right: .5rem;
`
const FromIcon = styled.div`
    background: url('home.png') no-repeat;
    background-size: 1.5rem 1.5rem;
    height: 1.5rem;
    width: 1.5rem;
    margin-right: .5rem;
`
