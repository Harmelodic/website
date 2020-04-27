import React from 'react';
import {Switch, Route} from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Projects from './Projects';
import OpenSource from './OpenSource';
import Me from './Me';

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
          <Route exact path="/" component={Me} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/open-source" component={OpenSource} />
        </Switch>
      </StyledApp>
    );
  }
}
