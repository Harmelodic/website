import { Suspense, lazy, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ErrorBoundary } from './ErrorBoundary';

const Nav = lazy(() => import('./menu/Menu'));
const Home = lazy(() => import('./main/home/Home'));
const Blog = lazy(() => import('./main/blog/Blog'));
const PostView = lazy(() => import('./main/blog/post-view/PostView'));
const FilmsSeen = lazy(() => import('./main/blog/lists/FilmsSeen'));
const TvShowsSeen = lazy(() => import('./main/blog/lists/TvShowsSeen'));
const Projects = lazy(() => import('./main/projects/Projects'));
const OpenSource = lazy(() => import('./main/open-source/OpenSource'));

const StyledApp = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-start;
	width: 100%;
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
					<Nav path={path} />
				</Suspense>
			</ErrorBoundary>

			<ErrorBoundary>
				<Suspense fallback={<div />}>
					<Switch>
						<RouteWithPathUpdate exact path="/" component={Home} />
						<RouteWithPathUpdate exact path="/blog" component={Blog} />
						<RouteWithPathUpdate exact path="/blog/post/:id" component={PostView} />
						<RouteWithPathUpdate exact path="/blog/list/1532228220000" component={FilmsSeen} />
						<RouteWithPathUpdate exact path="/blog/list/1532228640000" component={TvShowsSeen} />
						<RouteWithPathUpdate exact path="/projects" component={Projects} />
						<RouteWithPathUpdate exact path="/open-source" component={OpenSource} />
					</Switch>
				</Suspense>
			</ErrorBoundary>

		</StyledApp>
	);
}
