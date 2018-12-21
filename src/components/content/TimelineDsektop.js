import React, { Component } from 'react'
import styled from "styled-components"

import CreatePost from "../CreatePost"

import Freind from "../Friend"
import PostsList from "../PostsList"
import SideCol from '../SideDivTimelineDesktop'

class TimelineDesktop extends Component {
    state = {
        show_menu: false,
        // user_id: 3,
        // posts: [],
        // friends: [],
    }
    showMenu = (event) => {
        this.setState({ show_menu: true })
    }
    closeMenu = () => {
        this.setState({ show_menu: false })
    }
    componentDidMount() {
        // const POSTS_URL = `/api/posts/${this.state.user_id}`
        // const FRIENDS_URL = `/api/friends/${this.state.user_id}`
        // Promise.all([
        //     fetch(POSTS_URL)
        //         .then(res => {
        //             return res.json()
        //         })
        //     ,
        //     fetch(FRIENDS_URL)
        //         .then(res => {
        //             return res.json()
        //         })
        // ])
        //     .then(([posts, friends]) => {
        //         console.log('friend', friends.length)
        //         console.log('posts', posts.length)

        //         this.setState({
        //             posts,
        //             friends
        //         })
        //     })
        //     .catch(ex => {
        //         console.log('parsing faild', ex)
        //     })
    }
    selectTab = (tab) => {
        this.setState({ selected: tab })
    }
    getPosY(tab) {
        const selected = this.state.selected;
        const current = this.state[tab];
        return selected === tab ? current.pickedY : current.normalY
    }
    render() {
        window.addEventListener('scroll', () => {
            let pageY = window.scrollY
            console.log(pageY)
        })
        const { posts, friends } = this.props;
        return (
            <App className={this.props.className}>
                <HeroImg>
                    <ProfileImg />
                    <NameImg>Shani Arnon</NameImg>
                </HeroImg>
                <TabBar>
                    <TimelineBtnTab
                        onMouseEnter={this.showMenu}
                        onMouseLeave={this.closeMenu}>
                        Timeline
                        <ArrowIcon />
                        {
                            this.state.show_menu &&
                            <DropdownContent>
                                <Item1>
                                    <ListdIcon />
                                    List View
                                </Item1>
                                <Item2>
                                    <GridIcon />
                                    Grid View
                                </Item2>
                            </DropdownContent>
                        }
                    </TimelineBtnTab>
                    <AboutTab>About</AboutTab>
                    <FriendsTab>Friends</FriendsTab>
                    <PhotosTab>Photos</PhotosTab>
                    <ArchiveTab>Archive</ArchiveTab>
                    <MoreTab>More</MoreTab>
                </TabBar>
                <Box>
                    <SideBarWrap>
                        <StyledSideBar friends={friends} />
                    </SideBarWrap>
                    <Main>
                        <CreatePost />
                        <PostsList posts={posts} />
                    </Main>
                </Box>

            </App >
        )

    }

}
export default TimelineDesktop;

const StyledSideBar = styled(SideCol)``
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
const App = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgb(233, 235, 238);
    @media (max-width: 700px) {
        display: none;
    }
`
const Box = styled.div`
    display: grid;
    grid-template-columns:43% 57%;
    border-bottom: 1px solid lightgray;
    margin-right: 2rem;
`
const Main = styled.div`
    display: flex; 
    flex-direction: column;
    margin-left: 1rem;
`

const GridIcon = styled.div`
    background: url('grid.png') no-repeat;
    background-size: 1rem 1rem;
    height: 1rem;
    width: 1rem;
    margin-right: .5rem;
`
const ListdIcon = styled.div`
    background: url('list.png') no-repeat;
    background-size: 1.5rem 1.5rem;
    height: 1.5rem;
    width: 1.5rem;
    margin-right: .5rem;
`
const ArrowIcon = styled.div`
    background: url('down_arrow.png') no-repeat;
    background-size: 1.3rem 1.3rem;
    height: 1.3rem;
    width: 1.3rem;
    margin-left: .5rem;
`
const Item1 = styled.li`
    display: flex;
    align-items: center;
    color: black;
    padding: 1rem;
    text-decoration: none;
    color: #3b5998;
    &:hover{
      background-color:whitesmoke;
    }
`
const Item2 = styled.li`
    display: flex;
    align-items: center;
    color: #3b5998;
    padding:1rem;
    text-decoration: none;
  &:hover{
      background-color:whitesmoke;
  }
`
const TabBar = styled.div`
    position:relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height:100%;
    background-color: #fff;
    font-weight: 600;
    font-size: 1.4rem;
    cursor: pointer;
`
const TimelineBtnTab = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    color: #365899;
    border-right: 1px solid #e9eaed;
    padding: 2rem;
    &:hover{
        background-color: whitesmoke;
    }
`
const DropdownContent = styled.div`
    display:block;
    position: absolute;
    align-items: center;
    top:6rem;
    left:0;
    background-color: #fff;
    color: #3b5998;
    min-width: 11.5rem;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    font-size: 1.1rem;
    line-height: 2.3rem;
    font-weight: normal;
    border: 1px solid rgb(233, 235, 238);
`
const ProfileImg = styled.div`
    display: flex;
    position: absolute;
    width:18rem;
    height: 18rem;
    background: #d8dce6 url('me.jpg') no-repeat center;
    background-size: 100% 100%;
    border-radius: 0.5rem;
    border: 3px solid #fff;
    top: 20rem;
    left:3rem;
    z-index:2;
`
const HeroImg = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 35rem;
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
    margin-right: 5rem;
`

const AboutTab = styled.div`
    color: #365899;
    border-right: 1px solid #e9eaed;
    padding: 2rem;
    &:hover{
        background-color: whitesmoke;
    }
`
const FriendsTab = styled.div`
    color: #365899;
    border-right: 1px solid #e9eaed;
    padding: 2rem;
    &:hover{
        background-color: whitesmoke;
    }
`
const PhotosTab = styled.div`
    color: #365899;
    border-right: 1px solid #e9eaed;
    padding: 2rem;
    &:hover{
        background-color: whitesmoke;
    }
`
const ArchiveTab = styled.div`
    color: #365899;
    border-right: 1px solid #e9eaed;
    padding: 2rem;
    &:hover{
        background-color: whitesmoke;
    }
`
const MoreTab = styled.div`
    color: #365899;
    padding: 2rem;
    &:hover{
        background-color: whitesmoke;
    }
`











