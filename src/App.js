import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Projects from './projects/Projects';
import OpenSource from './open-source/OpenSource';
import Home from './home/Home';
import Blog from './blog/Blog';
import TrackMobileView from './mobile-view/TrackMobileView';

const StyledApp = styled.div`
    margin-bottom: 50vh;
    white-space: normal;
`;

export default class App extends React.Component {
  render() {
    return (
      <StyledApp>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/open-source" component={OpenSource} />
        </Switch>
        <TrackMobileView />
      </StyledApp>
    );
  }
}
