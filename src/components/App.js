import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
import GlobalStyles from "../common/GlobalStyles";

import Feed from "./content/Feed";
import Friends from "./content/Friends";
import Messenger from "./content/Messenger";
import Notifications from "./content/Notifications";
import Search from "./content/Search";
import Timeline from "./content/Timeline";
import Bookmark from './content/Bookmark';

import TopBar from './TopBarMobile'
import TopBarDesktop from './TopBarDesktop'

class App extends Component {
  render() {
    // console.log('App')
    // console.log('history', this.props.history)
    return (
      <div>
        <TopBarDesktop />
        <TopBar />

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
        <Feed />
      </div>

    )
  }
}
export default App;


