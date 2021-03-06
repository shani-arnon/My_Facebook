import React, { Component } from "react";
import styled from "styled-components";

class CreatePost extends Component {
    state = {
        user_id: 2,
        new_post: "",
        posts: []
    }
    createPost = () => {
        const NEW_POST_URL = '/api/posts'
        console.log('NEW_POST_URL', NEW_POST_URL)
        console.log(this.state.new_post)

        let post = {
            user_id: this.state.user_id,
            content: this.state.new_post
        }

        fetch(NEW_POST_URL, {
            method: 'post',
            body: JSON.stringify(post)
        })
            .then(res => {
                return res.json({
                    user_id: this.state.user_id,
                    content: this.state.new_post
                })
            })
            .catch(ex => {
                console.log('parsing faild', ex)
            })
    }


    handleChange = (e) => {
        this.setState({
            new_post: e.target.value
        });
    }

    handleKeyPress = (e) => {
        if (e.charCode === 13) {
            this.createPost();
        }
    }

    render() {

        return (
            <Box>
                <PostBox>
                    <Img></Img>
                    <Input
                        onKeyPress={this.handleKeyPress}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="What's on your mind?" >
                    </Input>
                </PostBox>
                <ExtraBox>
                    <Photo>
                        <PhotoIcon />
                        Photo
                    </Photo>
                    <CheckIn>
                        <CheckInIcon />
                        Check In
                    </CheckIn>
                    <Activity>
                        <ActivityIcon />
                        Life Event
                    </Activity>
                </ExtraBox>
            </Box>
        );
    }
};

export default CreatePost;

const Box = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    flex: 1;
    border: 1px solid rgb(204, 208, 213);
    border-radius: .5rem;
    font-family: Roboto, 'Droid Sans', Helvetica, sans-serif;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    /* border: 2px solid red; */
`
const PostBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
    padding-left: 1rem;
    /* border: 2px solid red; */
`
const Img = styled.div`
    /* background: #d8dce6 url('me.jpg') no-repeat center; */
    background: #d8dce6 url('dog2.jpg') no-repeat center;
    background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4.5rem;
    width: 4.5rem;
    border-radius: 50%; 
    /* border: 1px solid #ccd0d5; */
`
const Input = styled.input`
    border: 1px solid #ccd0d5;
    border-radius: 20px;
    line-height: inherit;
    padding: 8px 12px;
    white-space: pre-line;
    font-size: 1.4rem;
    width:100%;
    flex: 1;
    padding: .8rem;
    margin: 1rem;
    border: 1px solid #ccd0d5;
    line-height: inherit;
    color: #8d949e;
    cursor: pointer;
    font-family: Roboto, 'Droid Sans', Helvetica, sans-serif;
`
const ExtraBox = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-evenly;
    cursor: pointer;
    font-family: Roboto, 'Droid Sans', Helvetica, sans-serif;
    /* border: 2px solid red; */
`
const CheckIn = styled.div`
    border-right: 1px solid #ccd0d5;
    border-left: 1px solid #ccd0d5;
    color: #576b95;
    font-size: 14px;
    line-height: 24px;
    margin: 8px 0;
    text-align: center;
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items:center;
    justify-content: center;
`
const CheckInIcon = styled.div`
    background: url('checkin.png') no-repeat;
    background-size: 1.5rem 1.7rem;
    height: 1.7rem;
    width: 1.5rem;
    padding-right: 1.7rem;
`
const Activity = styled.div`
    color: #576b95;
    font-size: 14px;
    line-height: 24px;
    margin: 8px 0;
    text-align: center;
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items:center;
    justify-content: center;
`
const ActivityIcon = styled.div`
    background: url('flag.png') no-repeat;
    background-size: 1.5rem 1.7rem;
    height: 1.7rem;
    width: 1.5rem;
    padding-right: 2rem;
`
const Photo = styled.div`
    color: #576b95;
    font-size: 14px;
    line-height: 24px;
    margin: 8px 0;
    text-align: center;
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items:center;
    justify-content: center;
`
const PhotoIcon = styled.div`
    background: url('picture.png') no-repeat;
    background-size: 1.5rem 1.7rem;
    height: 1.7rem;
    width: 1.5rem;
    padding-right: 2rem;
    /* border: 1px solid; */
`

