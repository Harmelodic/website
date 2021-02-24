import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import ErrorBoundary from './ErrorBoundary';

const Header = lazy(() => import('../components/Header'));
const Nav = lazy(() => import('../components/Nav'));
const Home = lazy(() => import('./home'));
const Blog = lazy(() => import('./blog'));
const Projects = lazy(() => import('./projects'));
const OpenSource = lazy(() => import('./open-source'));
const TrackMobileView = lazy(() => import('../mobile-view/TrackMobileView'));

const StyledApp = styled.div`
    margin-bottom: 50vh;
    white-space: normal;
    text-align: center;
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      path: window.location.pathname
    }

    this.updatePath = this.updatePath.bind(this);
  }

  updatePath() {
    this.setState({
      path: window.location.pathname
    })
  }

  render() {
    return (
      <StyledApp>

        <ErrorBoundary>
          <Suspense fallback={<div />}>
            <Header />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={<div />}>
            <Nav path={this.state.path}/>
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<div />}>
            <Switch>
              <Route exact path="/" render={(props) => (
                <Home {...props} updatePath={this.updatePath} />
              )} />
              <Route exact path="/blog" render={(props) => (
                <Blog {...props} updatePath={this.updatePath} />
              )} />
              <Route exact path="/projects" render={(props) => (
                <Projects {...props} updatePath={this.updatePath} />
              )} />
              <Route exact path="/open-source" render={(props) => (
                <OpenSource {...props} updatePath={this.updatePath} />
              )} />
            </Switch>
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<div />}>
            <TrackMobileView />
          </Suspense>
        </ErrorBoundary>
        
      </StyledApp>
    );
  }
}
