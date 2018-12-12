import React from 'react'
import styled from "styled-components"

class SideBar extends React.Component {
    render() {
        return (
            <Box className={this.props.className}>
                <User>
                    <Img />
                    <UserName>Shani Arnon</UserName>
                </User>
                <FirstSection>
                    <Messenger>
                        <MessengerIcon />
                        Messenger
                    </Messenger>
                    <Watch>
                        <WatchIcon />
                        Watch
                    </Watch>
                    <Marketplace>
                        <MarketplaceIcon />
                        Marketplace
                    </Marketplace>
                </FirstSection>
                <Explore>
                    <Title>Explore</Title>
                    <Events>
                        <EventIcon />
                        Events
                    </Events>
                    <Pages>
                        <PageIcon />
                        Pages
                    </Pages>
                    <Groups>
                        <GroupIcon />
                        Groups
                    </Groups>
                    <LiveDemo>
                        <LiveDemoIcon />
                        Live Demo
                    </LiveDemo>
                </Explore>
                <SeeMore>See More...</SeeMore>
            </Box>
        )
    }
}
export default SideBar

const Box = styled.div`
    display:none;
    flex-direction: column;
    width: 15rem;
    margin-top: 4.5rem;
    /* border:green 3px solid; */
`
const User = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`
const Img = styled.div`
    background: #d8dce6 url('dog2.jpg') no-repeat center;
    background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 2rem;
    margin-right: .5rem;
    border-radius: 50%;
`
const UserName = styled.div`
    font-size: 1.3rem;
    line-height:2.8rem;
    color: #1d2129;
`
const FirstSection = styled.div`
    display: flex;
    height:10rem;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
    font-size: 1.1rem;
    font-weight: 500;
    padding: 1rem;
    margin-left: 2rem;
`
const Messenger = styled.div`
    display: flex;
`
const MessengerIcon = styled.div`
    background: lightblue;
    height: 2rem;
    width: 2rem;
    margin-right: .5rem;
`

const Watch = styled.div`
    display: flex;
`
const WatchIcon = styled.div`
    background: lightblue;
    height: 2rem;
    width: 2rem;
    margin-right: .5rem;
`

const Marketplace = styled.div`
    display: flex;
`
const MarketplaceIcon = styled.div`
    background: lightblue;
    height: 2rem;
    width: 2rem;
    margin-right: .5rem;
`
const Explore = styled.div`
    display: flex;
    height:15rem;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
    font-size: 1.1rem;
    font-weight: 500;
    padding: 1rem;
    margin-left: 2rem;
`
const Title = styled.div``
const Events = styled.div`
    display: flex;
`
const EventIcon = styled.div`
    background: lightblue;
    height: 2rem;
    width: 2rem;
    margin-right: .5rem;
`
const Pages = styled.div`
    display: flex;
`
const PageIcon = styled.div`
    background: lightblue;
    height: 2rem;
    width: 2rem;
    margin-right: .5rem;
`
const Groups = styled.div`
    display: flex;
`
const GroupIcon = styled.div`
    background: lightblue;
    height: 2rem;
    width: 2rem;
    margin-right: .5rem;
`
const LiveDemo = styled.div`
    display: flex;
`
const LiveDemoIcon = styled.div`
    background: lightblue;
    height: 2rem;
    width: 2rem;
    margin-right: .5rem;
`
const SeeMore = styled.div`
    font-size: 1.1rem;
    margin-left: 3rem;
    margin-top: 1rem;
    &:hover{
        text-decoration: underline;
    }
`










