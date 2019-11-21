import React from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';
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
          <Redirect exact from="/" to="/projects" />
          <Route path="/projects" component={Projects} />
          <Route path="/open-source" component={OpenSource} />
          <Route path="/me" component={Me} />
        </Switch>
      </StyledApp>
    );
  }
}
