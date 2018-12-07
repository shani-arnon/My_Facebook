import React from "react";
import styled from "styled-components";
import c from '../common/constants'
// import logo from "./logo.svg"
// #363b5d

const ActionBar = ({ children }) => {
    return (
        <Nav>
            <Item>{children}
                <Post>
                    Post
                    <PostIcon />
                </Post>
                <UpdateInfo>
                    Update Info
                    <UpdateIcon />
                </UpdateInfo>
                <ActivityLog>
                    Activity log
                    <ActivityIcon />
                </ActivityLog>
                <More>
                    More
                    <MoreIcon />
                </More>
            </Item>
        </Nav>
    )
}
export default ActionBar;


const PostIcon = styled.div`
    background:  #f0f0f0;
    width: 3rem;
    height: 3rem;
`
const UpdateIcon = styled.div`
    background:  #f0f0f0;
    width: 2.5rem;
    height: 2.5rem;
`
const ActivityIcon = styled.div`
    background: #f0f0f0;
    width: 2.5rem;
    height:2.5rem;
`
const MoreIcon = styled.div`
    background:  #f0f0f0;
    width: 2.5rem;
    height: 2.5rem;
`

const Nav = styled.div`
    /* display: flex; */
    /* border: 2px solid red; */
    justify-content: space-between;
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    background-color: #fff;  
    width: 100%;
    height: 6rem;
    /* padding: 1.5rem; */

`
const Item = styled.div`
    display: flex;
    justify-content: space-evenly;
    text-shadow: rgba(255, 255, 255, 0.75) 0px 1px;
    font-size: 1.2rem;
    color: rgb(75, 79, 86);
    height: 100%;
    /* border: 2px solid red; */
`
const Post = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    /* background-image: url('./icons.png');
    background-repeat: no-repeat;
    background-size: 31px 1309px;
    background-position: 0 ${p => p.posY}px;
    height: 20px;
    width: 20px;
    cursor: pointer; */
`
const UpdateInfo = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
    align-items: center;
    flex: 1;
`
const ActivityLog = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    flex-direction: column-reverse;
    align-items: center;
`
const More = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    flex-direction: column-reverse;
    align-items: center;
`
