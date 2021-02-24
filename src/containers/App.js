import { Suspense, lazy, useState } from 'react';
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

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  function updatePath() {
    setPath(window.location.pathname)
  }

  return (
    <StyledApp>

      <ErrorBoundary>
        <Suspense fallback={<div />}>
          <Header />
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Suspense fallback={<div />}>
          <Nav path={path}/>
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<div />}>
          <Switch>
            <Route exact path="/" render={(props) => (
              <Home {...props} updatePath={updatePath} />
            )} />
            <Route exact path="/blog" render={(props) => (
              <Blog {...props} updatePath={updatePath} />
            )} />
            <Route exact path="/projects" render={(props) => (
              <Projects {...props} updatePath={updatePath} />
            )} />
            <Route exact path="/open-source" render={(props) => (
              <OpenSource {...props} updatePath={updatePath} />
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
