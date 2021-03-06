import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import CreatePost from "../CreatePost";

import Images from '../PhotosTimelineMobile';
import FreindsList from "../FreindsListMobile";
import PostsList from "../PostsList";
import ActionBar from '../ActionBar';

class TimelineMobile extends Component {

    state = {
        // user_id: 3,
        // posts: [],
        // friends: [],
        selected: 'feed',
        backIcon: {
            pickedY: -282,
            normalY: -261
        }
    }

    // componentDidMount() {
    //     console.log('componentDidMount');

    //     const POSTS_URL = `/api/posts/${this.state.user_id}`
    //     console.log('POSTS_URL', POSTS_URL)
    //     const FRIENDS_URL = `/api/friends/${this.state.user_id}`
    //     console.log('FRIENDS_URL', FRIENDS_URL)

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

    selectTab = (tab) => {
        this.setState({ selected: tab })
    }

    getPosY(tab) {
        const selected = this.state.selected;
        const current = this.state[tab];
        return selected === tab ? current.pickedY : current.normalY;
    }

    render() {
        const { posts, friends } = this.props;
        return (
            <App>
                <Header>
                    <Item key="backIcon" onClick={() => this.selectTab('backIcon')}>
                        <Link to="/feed"><Back posY={() => this.getPosY('backIcon')} /></Link>
                        <Name>{`Shani Arnon `}</Name>
                    </Item>
                </Header>

                <ProfileSection>
                    <PaneText>
                        <HeroImg>
                            <ProfileImg />
                        </HeroImg>
                        <NameImg>Shani Arnon</NameImg>
                        <P>This is my Facebook profile page!</P>
                        <ActionBar />
                        <Description>
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
                        </Description>
                        <ExtraBox>
                            <About>About</About>
                            <Photos>Photos</Photos>
                            <Friends>Friends</Friends>
                        </ExtraBox>
                    </PaneText>
                </ProfileSection>

                <Box>
                    <CreatePost />
                    <Images />
                    <FreindsList friends={friends} />
                    <PostsList posts={posts} />
                </Box>
            </App >
        )

    };

}
export default TimelineMobile;

const App = styled.div`
    display: flex;
    flex-direction: column;
    background: rgb(233, 235, 238);
    @media (min-width: 700px) {
            display: none;
        }
    /* border: 6px solid red; */

`
const WorkIcon = styled.div`
    background: url('work.png') no-repeat;
    background-size: 2rem 2rem;
    height: 2rem;
    width: 2rem;
    margin-right: .5rem;
`
const StudyIcon = styled.div`
    background: url('study.png') no-repeat;
    background-size: 2rem 2rem;
    height: 2rem;
    width: 2rem;
    margin-right: .5rem;
`
const FromIcon = styled.div`
    background: url('home.png') no-repeat;
    background-size: 2rem 2rem;
    height: 2rem;
    width: 2rem;
    margin-right: .5rem;
`
const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 17em;
    font-size: 1.4rem;
    color: #576b95;
    padding: 1.5rem;
`
const MetaAction = styled.div`
    margin-left: 3rem;
    font-weight: 400;
`
const MetaData = styled.div`
    display: flex;
    color: black;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.8rem;
    font-family: Arial, Helvetica, sans-serif;
`
const MetaBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #576b95;
    border-radius: .5rem;
    width: 100%;
    height: 1.8rem;
    padding: 1.8rem;
    font-size: 1.4rem;
    color: black;
`
const Box = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    border-bottom: 1px solid lightgray;
`
const Header = styled.div`
    position: absolute;
    display:flex;
    width: 100%;
    height: 4.5rem;
    color: white;
    text-align: center;
    font-size: 1.6rem;
    text-overflow: ellipsis;
    font-family: Roboto, 'Droid Sans', Helvetica, sans-serif;
    background-color:#3b5998;  
    z-index: 500;
`
const Item = styled.li`
    list-style: none;
    flex:1;
    display:flex;
    justify-content:space-between;
    align-items: center;
`

const Back = styled.div`
    background-image: url('./icons.png');
    background-repeat: no-repeat;
    background-size: 31px 1342px;
    background-position: 0 ${p => p.posY}px;
    height: 2rem;
    width: 2rem;
    cursor: pointer;
    padding:  1rem;
    margin-left: 1rem;
`
const Name = styled.div`
    width: 100%;
`
const NameImg = styled.div`
    width: 100%;
    text-align: center;
    font-weight: 300;
    font-size: 2.6rem;
    color: #1d2129;
    font-family: Helvetica, Arial, sans-serif;
    letter-spacing: -0.25px;
    line-height: 1;
    margin-top: 7rem;
`
const P = styled.p`
    color: #4b4f56;
    text-align: center;
    font-size: 1.4rem;
    font-family: Roboto, 'Droid Sans', Helvetica, sans-serif;
    padding: 1rem;
`
const HeroImg = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 20rem;
    background: #d8dce6 url('IMG_0662.JPG') no-repeat center;
    background-size: cover;
    /* border: 2px solid; */
`
const ProfileSection = styled.div`
    width: 100%;
    height: 70rem;
    margin-top: 4.5rem;
    display: flex;
    justify-content: space-evenly;
    /* border: 3px solid red; */
`
const ProfileImg = styled.div`
    display: block;
    position: absolute;
    width: 13rem;
    height: 13rem;
    background: #d8dce6 url('me.jpg') no-repeat center;
    background-size: 100% 100%;
    border-radius: 0.5rem;
    border: .4px solid rgb(216, 220, 230);
    top: 18rem;
    @media (min-width: 750px) {
        display: none;
    } 
`
const PaneText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width:100%;
    height:100%;
    background: #fff;
    /* border: 4px solid green; */
`
const ExtraBox = styled.ul`
    display: flex;
    width: 100%;
    list-style: none;
    justify-content: space-evenly;
    align-items: center;
    background: whitesmoke;
    padding: 10px 0 11px;
    text-shadow: 0 1px 0 #fff;
    border-top: 1px solid #ccd0d5;
    border-bottom: 1px solid #ccd0d5;
    color: #4b4f56;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
`
const About = styled.div`
    border-right: 1px solid #ccd0d5;
    font-size: 1.4rem;
    text-align: center;
    font-weight: bolder;
    cursor: pointer;
    flex: 1;
`
const Photos = styled.div`
    border-right: 1px solid #ccd0d5;
    font-size: 1.4rem;
    text-align: center;
    cursor: pointer;
    flex: 1;
    font-weight: bold;
`
const Friends = styled.div`
    font-size: 1.4rem;
    text-align: center;
    cursor: pointer;
    flex: 1;
    font-weight: bold;
`












