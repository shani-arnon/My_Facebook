import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
import GlobalStyles from "../common/GlobalStyles";
// import styled from "styled-components";

import Feed from "./content/Feed";
import Friends from "./content/Friends";
import Messenger from "./content/Messenger";
import Notifications from "./content/Notifications";
import Search from "./content/Search";
import Timeline from "./content/Timeline";
import Bookmark from './content/Bookmark';

import TopBar from './TopBar'
import TopBarDesktop from './TopBarDesktop'

// import TimelineMobile from './content/TimelineMobile'
// import TimelineDesktop from './content/TimelineDesktop'


class App extends Component {
  render() {
    // console.log('App')
    // console.log('history', this.props.history)
    return (
      <div>
        <TopBarDesktop />
        <TopBar />
        {/* <TimelineMobile />
        <TimelineDesktop /> */}
        <Switch>
          <Route exact={true} path="/feed" component={Feed} />
          <Route path="/friends" component={Friends} />
          <Route path="/messenger" component={Messenger} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/search" component={Search} />
          <Route path="/bookmark" component={Bookmark} />
          <Route path="/timeline" component={Timeline} />
        </Switch>
        <GlobalStyles />
      </div>

    )
  }
}
export default App;


