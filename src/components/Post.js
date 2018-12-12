import React from "react";
import styled from "styled-components";
import Comment from './Comment'

const Post = ({ user_id, last_name, first_name, avatar, timestamp, content, comments, reactions }) => {
    let start = new Date().getTime();
    return (
        <Box>
            <Header>
                <Img src={avatar} />
                <Meta>
                    <UserName>{first_name} {last_name}</UserName>
                    <Time>Published {new Date().getTime() - start + 10} mins ago</Time>
                </Meta>
            </Header>
            <P>{content}</P>
            <Reactions>
                <Icons>
                    <LikeReaction />
                    <HeartReaction />
                    {reactions.length}
                </Icons>
                <Number>{comments.length} Comments</Number>
            </Reactions>
            <Actions>
                <Like>
                    <LikeIcon />
                    Like
                </Like>
                <CommentAction>
                    <CommentIcon />
                    Comment
                </CommentAction>
                <Share>
                    <ShareIcon />
                    Share
                </Share>
            </Actions>
            <CommentList>
                {comments.map((comment, i) => <Comment key={i} {...comment} />)}
            </CommentList>
        </Box>
    )
}
export default Post;

const Box = styled.div`
    background-color: white;
    margin-top: .5rem;
    display: flex;
    padding: 1rem;
    margin-bottom: 1rem;
    flex-direction: column;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgrey;
`
const Header = styled.div`
    display: flex;
    align-items: center;
`
const Img = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    height: 4.5rem;
    width: 4.5rem;
    border-radius: 50%; 
    border: 1px solid #ccd0d5;
`

const UserName = styled.div`
    font-weight: bold;
    font-size: 1.4rem;
    padding-left: .5rem;
`
const Time = styled.div`
    font-size: 1.1rem;
    color: lightgrey;
    padding-left: .5rem;
`
const P = styled.div`
    font-size: 1.4rem;
    line-height: 1.8rem;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 500;
    padding-bottom: 2rem;
    margin-top: 1rem;
    padding-left: 4rem;
    padding-right: 2rem;
`
const CommentList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%; 
`
const Actions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid gainsboro;
    border-top: 1px solid gainsboro;
`
const Like = styled.div`
    display: flex;
    flex: 1;
    cursor: pointer;
    font-size: 1.2rem;
    justify-content: center;
    align-items: center;
    color: #616770;
    font-family: Roboto, 'Droid Sans', Helvetica, sans-serif;
    font-weight: bold;
`
const LikeIcon = styled.div`
    background: url('like_white.png') no-repeat;
    background-size: 2.5rem 2.5rem;
    height: 2.5rem;
    width: 2.5rem;
    /* padding-right: 1.5rem; */
`
const CommentAction = styled.div`
    cursor: pointer;
    display: flex;
    flex: 1;
    font-size: 1.2rem;
    justify-content: center;
    align-items: center;
    color: #616770;
    font-family: Roboto, 'Droid Sans', Helvetica, sans-serif;
    font-weight: bold;
`
const CommentIcon = styled.div`
    background: url('comment_white.png') no-repeat;
    background-size: 2.5rem 2.5rem;
    height: 2.5rem;
    width: 2.5rem;
`

const Share = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    cursor: pointer;
    font-size: 1.2rem;
    color: #616770;
    font-family: Roboto, 'Droid Sans', Helvetica, sans-serif;
    font-weight: bold;
`
const ShareIcon = styled.div`
    background: url('share_white.png') no-repeat;
    background-size: 3rem 3rem;
    height: 3rem;
    width: 3rem;
`

const Reactions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`
const Icons = styled.div`
    display: flex;
    cursor: pointer;
    font-size: 1.4rem;
    line-height: 1.6rem;
    color: #616770;
`
const LikeReaction = styled.div`
    background-image: url('./like_reaction.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 1.6rem;
    width: 1.6rem;
`
const HeartReaction = styled.div`
    background-image: url('./heart_reaction.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 1.6rem;;
    width: 1.6rem;;
`
const Number = styled.div`
    cursor: pointer;
    font-size: 1.4rem;
    line-height: 1.6rem;
    text-align: right;
    color: #616770;
`
const Meta = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
`

