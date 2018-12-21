import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Timeline from './content/TimelineMobile';
import Feed from '../components/content/Feed';
import { withRouter } from "react-router";
class Links extends Component {
    state = {
        selected: 'feed',
        feed: {
            new_path: '/feed',
            component: Feed
        },
        timeline: {
            new_path: '/timeline',
            component: Timeline
        },
        friends: {
            pickedY: -379,
            normalY: -358
        },
        messenger: {
            pickedY: -226,
            normalY: -205
        },
        notifications: {
            pickedY: -316,
            normalY: -295
        },
        search: {
            pickedY: -463,
            normalY: -442
        }
    }
    selectTab = (tab) => {
        this.setState({
            selected: tab
        })
        this.props.history.push(tab)
    }
    getPosY(tab) {
        const selected = this.state.selected;
        const current = this.state[tab];
        return selected === tab ? current.pickedY : current.normalY;
    }
    render() {
        console.log('TopBarDesktop')
        console.log('history', this.props.history)
        return (
            <Nav>
                <Box>
                    <FBIcon />
                    <Input type="text" placeholder="Search" />

                    <Search>
                        <Icon />
                    </Search>


                    <TabBox>
                        <User key="timeline" onClick={() => this.selectTab('timeline')}><Link to='/timeline' ></Link>
                            <Img />
                            Shani
                        </User>
                        <Home key="feed" onClick={() => this.selectTab('feed')}>
                            Home
                            <Link to="/feed"></Link>
                        </Home>
                        <Create>Create</Create>
                    </TabBox>
                    <IconsBox>
                        <Item key="friends" onClick={() => this.selectTab('friends')}>
                            <Link to="/friends"><NavIcon posY={() => this.getPosY('friends')} /></Link>
                        </Item>
                        <Item key="messenger" onClick={() => this.selectTab('messenger')}>
                            <Link to="/messenger"><Messenger posY={() => this.getPosY('messenger')} /></Link>
                        </Item>
                        <Item key="notifications" onClick={() => this.selectTab('notifications')}>
                            <Link to="/notifications"><NavIcon posY={() => this.getPosY('notifications')} /></Link>
                        </Item>
                    </IconsBox>
                </Box>
            </Nav>
        )
    }

}
export default withRouter(Links)

const Nav = styled.div`
    display: none;
    overflow: hidden; 
    position: fixed;
    top: 0;
    width: 100%;
    background-color:#4267b2;  
    z-index: 900;
    @media (min-width: 750px) {
        display: block;
    }
`
const Box = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height:5rem;
    border-bottom: 1px solid #29487d;
`
const Item = styled.li`
    list-style: none;
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
    &:hover{
        background-color: #fff
    }
`
const TabBox = styled.div`
    display: flex;
    align-items: center;
    width: 30%;
`
const FBIcon = styled.div`
    background-image: url('/facebook_white_64.png');
    background-size: 100% 100%;
    width: 2.7rem;
    height: 2.7rem;
    margin-right: .7rem;
    margin-left: .7rem;
    padding: .5rem;
`
const Search = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    background-color: gainsboro;
    border: 1px solid gainsboro;
    height: 2.7rem;
    width: 5rem;
`
const Icon = styled.div`
    background-image: url('/search_64.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 2rem;
    width: 2rem;
`
const Home = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.2rem;
    font-weight: 500;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    border-right: 1px solid #29487d;
    border-left: 1px solid #29487d;
    padding: .7rem;
    &:hover{
        background-color: #3b5998;
        border-radius: .3rem;
    }
`
const User = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
    font-weight: 500;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    padding: .7rem;
    margin-left: 1rem;
    &:hover{
        background-color: #3b5998;
        border-radius: .3rem;

    }
`
const Img = styled.div`
    background: #d8dce6 url('dog2.jpg') no-repeat center;
    background-size: 100% 100%;
    display: flex;
    height: 2.3rem;
    width: 2.3rem;
    border-radius: 50%; 
    margin-right: .7rem;
`
const Create = styled.div`
    color: white;
    font-size: 1.2rem;
    font-weight: 500;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    border-right: 1px solid #29487d;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: .7rem;
    &:hover{
        background-color:  #3b5998;
        border-radius: .3rem;

    }
`
const NavIcon = styled.div`
    background-image: url('./icons.png');
    background-repeat: no-repeat;
    background-size: 31px 1309px;
    background-position: 0 ${p => p.posY}px;
    height: 20px;
    width: 20px;
    cursor: pointer;   
`
const IconsBox = styled.div`
    display: flex;
    margin-left: 1.5rem;
    width: 15%;
`
const Messenger = styled.div`
    background-image: url('./icons.png');
    background-repeat: no-repeat;
    background-size: 31px 1274px;
    background-position: 0 ${p => p.posY}px; 
    height: 20px;
    width: 20px;
    cursor: pointer;
`
const Input = styled.input`
    border: 2px solid white;
    padding:.5rem;
    height: 2.7rem;
    width: 50%;
`

