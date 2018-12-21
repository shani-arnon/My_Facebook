import React, { Component } from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'

import TimelineMobile from './TimelineMobile'
import TimelineDesktop from './TimelineDsektop'
import { fetch_timeline_data } from './Timeline.actions'

class Timeline extends Component {
    componentDidMount() {
        this.props.get_timeline_data();
    }
    render() {
        const { posts, friends } = this.props
        return (
            <Wrap>
                <TimelineDesktopWrap>
                    <Desktop posts={posts} friends={friends} />
                </TimelineDesktopWrap>
                <TimelineMobileWrap>
                    <Mobile posts={posts} friends={friends} />
                </TimelineMobileWrap>
            </Wrap>
        );
    }
}

mapStateToProps = (state) => {
    const { posts, friends, user_id } = state.timeline;
    return {
        user_id,
        posts,
        friends
    }
}

mapDispatchToProps = (dispatch, ownProps) => {
    return {
        get_timeline_data: () => dispatch(fetch_timeline_data(ownProps.user_id))
    }
}

export default connect(mapStateToProps, mapDispatchToPros)(Timeline)

const Wrap = styled.div``

const Desktop = styled(TimelineDesktop)``
const TimelineDesktopWrap = styled.div`
    ${Desktop}{
        @media (min-width: 700px) {
            display: flex;
        }
    }
`
const Mobile = styled(TimelineMobile)``
const TimelineMobileWrap = styled.div`
    ${Mobile}{
        @media (min-width: 700px) {
            display: none;
        }
    }
`