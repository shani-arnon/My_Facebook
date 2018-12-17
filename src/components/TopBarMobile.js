import c from '../common/constants'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

class Links extends Component {
    state = {
        selected: 'feed',
        feed: {
            pickedY: -589,
            normalY: -568,
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
        },
        bookmark: {
            pickedY: -547,
            normalY: -526
        }
    }

    selectTab = (tab) => {
        this.setState({
            selected: tab
        })
    }

    getPosY(tab) {
        const selected = this.state.selected;
        const current = this.state[tab];
        return selected === tab ? current.pickedY : current.normalY;
    }

    render() {
        return (
            <Nav>
                <Box>
                    <Item key="feed" onClick={() => this.selectTab('feed')}>
                        <Link to="/feed"><NavIcon posY={() => this.getPosY('feed')} /></Link>
                    </Item>
                    <Item key="friends" onClick={() => this.selectTab('friends')}>
                        <Link to="/friends"><NavIcon posY={() => this.getPosY('friends')} /></Link>
                    </Item>
                    <Item key="messenger" onClick={() => this.selectTab('messenger')}>
                        <Link to="/messenger"><Messenger posY={() => this.getPosY('messenger')} /></Link>
                    </Item>
                    <Item key="notifications" onClick={() => this.selectTab('notifications')}>
                        <Link to="/notifications"><NavIcon posY={() => this.getPosY('notifications')} /></Link>
                    </Item>
                    <Item key="search" onClick={() => this.selectTab('search')}>
                        <Link to="/search"><NavIcon posY={() => this.getPosY('search')} /></Link>
                    </Item>
                    <Item key="bookmark" onClick={() => this.selectTab('bookmark')}>
                        <Link to="/bookmark"><NavIcon posY={() => this.getPosY('bookmark')} /></Link>
                    </Item>
                </Box>

            </Nav>
        )
    }

}
export default Links

const Nav = styled.div`
    background-color:${c.fb_blue};  
    position: fixed;
    width: 100%;
    z-index: 500;
    @media (min-width: 700px) {
        display: none;
    }
`
const Box = styled.ul`
    display: flex;
    height:4rem;
`
const Item = styled.li`
    list-style: none;
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
    /* background-color: #576b95; */
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
const Messenger = styled.div`
    background-image: url('./icons.png');
    background-repeat: no-repeat;
    background-size: 31px 1274px;
    background-position: 0 ${p => p.posY}px; 
    height: 20px;
    width: 20px;
    cursor: pointer;
`

