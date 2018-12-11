import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
import GlobalStyles from "../common/GlobalStyles";
import styled from "styled-components";


import Feed from "./content/Feed";
import Friends from "./content/Friends";
import Messenger from "./content/Messenger";
import Notifications from "./content/Notifications";
import Search from "./content/Search";
import Timeline from "./content/Timeline";
import Bookmark from './content/Bookmark';

import TopBar from './TopBar'
import TopBarDesktop from './TopBarDesktop'

// import Links from './Links';
// import LinksDesktop './LinksDesktop';

class App extends Component {
  render() {
    return (
      <HashRouter hashType="slash">
        <div>
          <TopBarDesktop />
          <TopBar />


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
const Text = styled.div`

  position: absolute;
  z-index: 900;
  font-size: 3rem;
  @media (min-width: 700px) {
    display: none;
  }

`
const TextD = styled.div`
  display: none;
  position: absolute;
  z-index: 900;
  top: 3rem;
  font-size: 3rem;
  @media (min-width: 700px) {
    display: block;
  }
`
