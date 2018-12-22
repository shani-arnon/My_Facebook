import React, { Component } from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'

import TimelineMobile from './TimelineMobile'
import TimelineDesktop from './TimelineDsektop'
import { fetch_timeline_data } from './Timeline.actions'

class Timeline extends Component {
    componentDidMount() {
        this.props.get_timeline_data(this.props.user_id);
    }
    render() {
        const { posts, friends, is_loading, error_message } = this.props;
        if (is_loading) {
            return <h1>Please wait...</h1>
        }
        if (error_message !== '') {
            return <h1>We regret to announce the operation failede</h1>
        }
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

function mapStateToProps(state) {
    const { posts, friends, user_id, is_loading, error_message } = state.timeline;
    return {
        user_id,
        posts,
        friends,
        is_loading,
        error_message
    }
}

function mapDispatchToProps(dispatch) {
    return {
        get_timeline_data: (user_id) => dispatch(fetch_timeline_data(user_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timeline)

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