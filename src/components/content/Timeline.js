import React, { Component } from 'react';
import styled from 'styled-components'

import TimelineMobile from './TimelineMobile'
import TimelineDesktop from './TimelineDsektop'

export default class Timeline extends Component {

    render() {
        return (
            <Wrap>
                <TimelineDesktopWrap>
                    <Desktop />
                </TimelineDesktopWrap>
                <TimelineMobileWrap>
                    <Mobile />
                </TimelineMobileWrap>
            </Wrap>
        );
    }
}

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
//     ${DesktopTimeline}{
//         @media (min-width: 750px) {
//             display: flex;
//             /* position: relative; */
//             /* width: 55%; */
//             border: 6px solid yellow;
//         } 
//     }
// `