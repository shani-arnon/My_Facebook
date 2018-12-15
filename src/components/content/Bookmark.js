import React, { Component } from 'react';
import styled from "styled-components";
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom"

import TopBar from '../TopBar';
import Links from '../Links';
import Timeline from './TimelineMobile';

class Bookmark extends Component {
    state = {
        select: "bookmark",
        timeline_page: {
            new_path: '/timeline',
            component: Timeline
        }
    }
    selectTab = (page) => {
        this.setState({
            select: page
        })
        this.props.history.push('/timeline')
        // window.location.href = `http://localhost:3000/#/timeline`;
    }

    render() {
        return (
            <App>
                <TopBar>
                    <Links />
                </TopBar>
                <Box>

                    <Router>
                        <User key="timeline_page" onClick={() => this.selectTab('timeline_page')}><Link to='/timeline' ></Link>
                            <Img />
                            <UserName>Shani Arnon</UserName>
                        </User>
                    </Router>

                </Box>
                <Favorites>
                    <Title>FAVORITES</Title>
                    <Item>
                        <MostRecent />
                        Most Recent
                    </Item>
                    <Item>
                        <DiscoverPeople />
                        Discover People
                    </Item>
                    <Item>
                        <Jobs />
                        Jobs
                    </Item>
                    <Item>
                        <Saved />
                        Saved
                    </Item>
                    <Item>
                        <Crisis />
                        Crisis Response
                    </Item>
                    <Item>
                        <Local />
                        Local
                    </Item>
                    <Item>
                        <Messenger />
                        Messenger
                    </Item>
                    <Item>
                        <Friends />
                        Friends
                    </Item>
                </Favorites>
                <Groups>
                    <Title>GROUPS</Title>
                    <Item>Most Recent</Item>
                    <Item>Facebook People</Item>
                    <Item>Career Pathfinder</Item>
                    <Item>Secret Tel-Aviv</Item>
                    <Item>See More</Item>
                </Groups>
                <Apps>
                    <Title>APPS</Title>
                    <Item>Events</Item>
                    <Item>Find People</Item>
                    <Item>Gaming</Item>
                    <Item>Notifications</Item>
                    <Item>Photos</Item>
                    <Item>See All Apps</Item>
                </Apps>
                <Settings>
                    <Title>HELP & SETTINGS</Title>
                    <Item>Language</Item>
                    <Item>Help center</Item>
                    <Item>Settings</Item>
                    <Item>Privacy Shortcuts</Item>
                    <Item>Terms & Policies</Item>
                    <Item>Log Out</Item>
                </Settings>
                <CopyRight>
                    <Lang>English (US)</Lang>
                    <FB>Facebook &copy 2018</FB>
                </CopyRight>
            </App >
        );
    }
}

export default Bookmark;

const App = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`
const Box = styled.div`
    display: flex;
    margin-top: 4rem;
`
const User = styled.div`
    background-color: white;
    display: flex;
    padding: .5rem;
    cursor: pointer;
`
const Img = styled.div`
    height: 3.5rem;
    width: 3.5rem;
    background: #d8dce6 url('dog2.jpg') no-repeat center;
    background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
`
const UserName = styled.div`
        font-weight: normal;
        font-size: 1.7rem;
        margin-left: 1rem;
        margin-top: .5rem;
`
const Favorites = styled.div`
`
const Title = styled.div`
    padding-left:1rem;
    font-size: 1.2rem;
    background-color: rgb(246, 247, 248);
    border-bottom-color: rgb(233, 234, 237);
    color: #141823;
    line-height: 2.4rem;
    text-shadow: none;
    display:flex;
    align-items: center;
    font-weight:400;
    font-family: Roboto, "Droid Sans", Helvetica, sans-serif;
`
const Item = styled.div`
    display: flex;
    flex: 1 1 auto;
    background-color: #ffff;
    color: #141823;
    font-size: 1.6rem;
    border-bottom: 1px solid #e9eaed; 
    line-height: 4.2rem;
    text-overflow: ellipsis;
    font-family: Helvetica, Arial, sans-serif;
    cursor: pointer;
`
const Groups = styled.div`
`
const Apps = styled.div`
`
const Settings = styled.div`
`
const CopyRight = styled.div`
    height: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 1rem;
`
const Lang = styled.div`
    color:rgb(20, 24, 35);
    cursor:pointer;
    font-family:Roboto, "Droid Sans", Helvetica, sans-serif;
    font-size:1.4rem;
`
const FB = styled.div`
    color:rgb(20, 24, 35);
    cursor:pointer;
    font-family:Roboto, "Droid Sans", Helvetica, sans-serif;
    font-size:1.4rem;
    font-weight: bold;
    padding-top: 0.25rem;
`
const MostRecent = styled.div`
    background: url('./most_recent.png') no-repeat center;
    background-size: 100% 100%;
    width: 3.4rem;
    height: 3.4rem; 
    margin-top: .3rem;
    margin-left: 0.7rem;
    margin-right: 0.7rem;
    line-height: 1.8rem;
`
const DiscoverPeople = styled.div`
    background: url('./discover_people.png') no-repeat center;
    background-size: 100% 100%;
    width: 3.4rem;
    height: 3.4rem; 
    margin-top: .3rem;
    margin-left: 0.7rem;
    margin-right: 0.7rem;
`
const Jobs = styled.div`
    background: url('./discover_people.png') no-repeat center;
    background-size: 100% 100%;
    width: 3.4rem;
    height: 3.4rem; 
    margin-top: .3rem;
    margin-left: 0.7rem;
    margin-right: 0.7rem;
`
const Saved = styled.div`
    background: url('./discover_people.png') no-repeat center;
    background-size: 100% 100%;
    width: 3.4rem;
    height: 3.4rem; 
    margin-top: .3rem;
    margin-left: 0.7rem;
    margin-right: 0.7rem;
`
const Crisis = styled.div`
    background: url('./discover_people.png') no-repeat center;
    background-size: 100% 100%;
    width: 3.4rem;
    height: 3.4rem; 
    margin-top: .3rem;
    margin-left: 0.7rem;
    margin-right: 0.7rem;
`
const Local = styled.div`
    background: url('./discover_people.png') no-repeat center;
    background-size: 100% 100%;
    width: 3.4rem;
    height: 3.4rem; 
    margin-top: .3rem;
    margin-left: 0.7rem;
    margin-right: 0.7rem;
`
const Messenger = styled.div`
    background: url('./discover_people.png') no-repeat center;
    background-size: 100% 100%;
    width: 3.4rem;
    height: 3.4rem; 
    margin-top: .3rem;
    margin-left: 0.7rem;
    margin-right: 0.7rem;
`
const Friends = styled.div`
    background: url('./discover_people.png') no-repeat center;
    background-size: 100% 100%;
    width: 3.4rem;
    height: 3.4rem; 
    margin-top: .3rem;
    margin-left: 0.7rem;
    margin-right: 0.7rem;
`










