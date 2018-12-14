import React from "react";
import styled from "styled-components";

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
    background: url('post.png') no-repeat;
    background-size: 4rem 4rem;
    height: 4rem;
    width: 4rem;
`
const UpdateIcon = styled.div`
   background: url('info.png') no-repeat;
    background-size: 4rem 4rem;
    height: 4rem;
    width: 4rem;
`
const ActivityIcon = styled.div`
    background: url('log.png') no-repeat;
    background-size: 4rem 4rem;
    height: 4rem;
    width: 4rem;
`
const MoreIcon = styled.div`
   background: url('more.png') no-repeat;
    background-size: 4rem 4rem;
    height: 4rem;
    width: 4rem;
`
const Nav = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
`
const Item = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-evenly;
    text-shadow: rgba(255, 255, 255, 0.75) 0px 1px;
    font-size: 1.2rem;
    color: rgb(75, 79, 86);
`
const Post = styled.div`
    display: flex;
    flex-direction: column-reverse; 
    justify-content: center;
    align-items: center; 
`
const UpdateInfo = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
    align-items: center;
`
const ActivityLog = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
    align-items: center;
`
const More = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
    align-items: center;
`
