import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
import { Redirect } from 'react-router';
import { createBrowserHistory } from 'history';
import history from '../history';
import GlobalStyles from "../common/GlobalStyles";

import Feed from "./content/Feed";
import Friends from "./content/Friends";
import Messenger from "./content/Messenger";
import Notifications from "./content/Notifications";
import Search from "./content/Search";
import Timeline from "./content/Timeline";
import Bookmark from './content/Bookmark';

class App extends Component {
  render() {
    return (
      <HashRouter hashType="slash">
        <div className="app">
          <Switch>
            <Route exact={true} path="/" component={Feed} />
            <Route path="/friends" component={Friends} />
            <Route path="/messenger" component={Messenger} />
            <Route path="/notifications" component={Notifications} />
            <Route path="/search" component={Search} />
            <Route path="/bookmark" component={Bookmark} />
            <Route path="/timeline" component={Timeline} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
          <GlobalStyles />
        </div>
      </HashRouter>
    );
  }
}
export default App;
