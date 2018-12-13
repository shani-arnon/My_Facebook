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
                    <Memories>
                        <MemoriesIcon />
                        Memories
                    </Memories>
                    <Jobs>
                        <JobsIcon />
                        Jobs
                    </Jobs>
                    <Saved>
                        <SavedIcon />
                        Saved
                    </Saved>
                    <Weather>
                        <WeatherIcon />
                        Weather
                    </Weather>
                    <Games>
                        <GamesIcon />
                        Games
                    </Games>
                    <Offers>
                        <OffersIcon />
                        Offers
                    </Offers>
                    <Recommendations>
                        <RecommendationsIcon />
                        Recommendations
                    </Recommendations>
                    <Fundraisers>
                        <FundraiserIcon />
                        Fundraisers
                    </Fundraisers>
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
    width: 20rem;
    margin-top: 5rem;
    /* position: fixed;
    left: 0; */
    background-color: rgb(233, 235, 238);
`
const User = styled.div`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    margin-left: 3rem;
`
const Img = styled.div`
    background: #d8dce6 url('dog2.jpg') no-repeat center;
    background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
    width: 2.5rem;
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
    background: url('sidebar_messenger.png') no-repeat;
    background-size: 2rem 2rem;
    height: 2rem;
    width: 2rem;
    margin-right: .5rem;
`

const Watch = styled.div`
    display: flex;
`
const WatchIcon = styled.div`
    background: url('sidebar_watch.png') no-repeat;
    background-size: 2rem 2rem;
    height: 2rem;
    width: 2rem;
    margin-right: .5rem;
`

const Marketplace = styled.div`
    display: flex;
`
const MarketplaceIcon = styled.div`
    background: url('sidebar_marketplace.png') no-repeat;
    background-size: 2rem 2rem;
    height: 2rem;
    width: 2rem;
    margin-right: .5rem;
`
const Explore = styled.div`
    display: flex;
    height:40rem;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
    font-size: 1.3rem;
    font-weight: 500;
    padding: 1rem;
    margin-left: 2rem;
`
const Title = styled.div`
    font-weight: 300;

`

const Events = styled.div`
    display: flex;
    align-items: center;
`
const EventIcon = styled.div`
    background: url('sidebar_event.png') no-repeat;
    background-size: 2rem 2rem;
    height: 2rem;
    width: 2rem;
    margin-right: .5rem;
`
const Pages = styled.div`
    display: flex;
    align-items: center;
`
const PageIcon = styled.div`
    background: url('sidebar_pages.png') no-repeat;
    background-size: 2rem 2rem;
    height: 2rem;
    width: 2rem;
    margin-right: .5rem;
`
const Groups = styled.div`
    display: flex;
    align-items: center;
`
const GroupIcon = styled.div`
    background: url('sidebar_group.png') no-repeat;
    background-size: 2rem 2rem;
    height: 2rem;
    width: 2rem;
    margin-right: .5rem;
`
const LiveDemo = styled.div`
    display: flex;
    align-items: center;
`
const LiveDemoIcon = styled.div`
    background: url('sidebar_live.png') no-repeat;
    background-size: 2rem 2rem;
    height: 2rem;
    width: 2rem;
    margin-right: .5rem;
`
const Memories = styled.div`
    display: flex;
    align-items: center;
`
const MemoriesIcon = styled.div`
    background: url('sidebar_clock.png') no-repeat;
    background-size: 2rem 2rem;
    height: 2rem;
    width: 2rem;
    margin-right: .5rem;
`
const Jobs = styled.div`
    display: flex;
    align-items: center;
`
const JobsIcon = styled.div`
    background: url('sidebar_suitcase.png') no-repeat;
    background-size: 2rem 2rem;
    height: 2rem;
    width: 2rem;
    margin-right: .5rem;
`
const Saved = styled.div`
    display: flex;
    align-items: center;
`
const SavedIcon = styled.div`
    background: url('sidebar_saved.png') no-repeat;
    background-size: 2rem 2rem;
    height: 2rem;
    width: 2rem;
    margin-right: .5rem;
`
const Weather = styled.div`
    display: flex;
    align-items: center;
`
const WeatherIcon = styled.div`
    background: url('sidebar_weather.png') no-repeat;
    background-size: 2rem 2rem;
    height: 2rem;
    width: 2rem;
    margin-right: .5rem;
`
const Fundraisers = styled.div`
    display: flex;
    align-items: center;
`
const FundraiserIcon = styled.div`
    background: url('sidebar_profit.png') no-repeat;
    background-size: 2rem 2rem;
    height: 2rem;
    width: 2rem;
    margin-right: .5rem;
`
const Games = styled.div`
    display: flex;
    align-items: center;
`
const GamesIcon = styled.div`
    background: url('sidebar_games.png') no-repeat;
    background-size: 2rem 2rem;
    height: 2rem;
    width: 2rem;
    margin-right: .5rem;
`
const Offers = styled.div`
    display: flex;
    align-items: center;
`
const OffersIcon = styled.div`
    background: url('sidebar_offers.png') no-repeat;
    background-size: 2rem 2rem;
    height: 2rem;
    width: 2rem;
    margin-right: .5rem;
`
const Recommendations = styled.div`
    display: flex;
    align-items: center;
`
const RecommendationsIcon = styled.div`
    background: url('sidebar_recommendation.png') no-repeat;
    background-size: 2rem 2rem;
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










