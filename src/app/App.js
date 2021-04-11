import { Suspense, lazy, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ErrorBoundary } from './ErrorBoundary';

const Nav = lazy(() => import('./nav/Nav'));
const Home = lazy(() => import('./main/home/Home'));
const Blog = lazy(() => import('./main/blog/Blog'));
const Projects = lazy(() => import('./main/projects/Projects'));
const OpenSource = lazy(() => import('./main/open-source/OpenSource'));

const StyledApp = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
`;

export function App() {
  const [path, setPath] = useState(window.location.pathname);

  function updatePath() {
    setPath(window.location.pathname);
  }

  function RouteWithPathUpdate({ component: Component, ...routeProps }) {
    return (
      <Route {...routeProps} render={props => (
        <Component {...props} updatePath={updatePath} />
      )} />
    );
  }

  return (
    <StyledApp>

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

    </StyledApp>
  );
}
