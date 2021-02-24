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

  function RouteWithPathUpdate({ component: Component, ...routeProps }) {
    return (
      <Route {...routeProps} render={(props) => (
        <Component {...props} updatePath={updatePath} />
      )} />
    )
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
            <RouteWithPathUpdate exact path="/" component={Home} />
            <RouteWithPathUpdate exact path="/blog" component={Blog} />
            <RouteWithPathUpdate exact path="/projects" component={Projects} />
            <RouteWithPathUpdate exact path="/open-source" component={OpenSource} />
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
