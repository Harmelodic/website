import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import TrackMobileView from './mobile-view/TrackMobileView';
import ErrorBoundary from './ErrorBoundary';
import Loading from './components/Loading';

const Home = lazy(() => import('./home'));
const Blog = lazy(() => import('./blog'));
const Projects = lazy(() => import('./projects'));
const OpenSource = lazy(() => import('./open-source'));

const StyledApp = styled.div`
    margin-bottom: 50vh;
    white-space: normal;
`;

export default class App extends React.Component {
  render() {
    return (
      <StyledApp>
        <Header />
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
        <TrackMobileView />
      </StyledApp>
    );
  }
}
