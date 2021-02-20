import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import ErrorBoundary from './ErrorBoundary';
import Loading from './components/Loading';

const Header = lazy(() => import('./components/Header'));
const Home = lazy(() => import('./home'));
const Blog = lazy(() => import('./blog'));
const Projects = lazy(() => import('./projects'));
const OpenSource = lazy(() => import('./open-source'));
const TrackMobileView = lazy(() => import('./mobile-view/TrackMobileView'));

const StyledApp = styled.div`
    margin-bottom: 50vh;
    white-space: normal;
    text-align: center;
`;

export default class App extends React.Component {
  render() {
    return (
      <StyledApp>
        <ErrorBoundary>
          <Suspense fallback={<div />}>
            <Header />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/open-source" component={OpenSource} />
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
