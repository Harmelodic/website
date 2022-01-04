import { Suspense, lazy, useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ErrorBoundary } from './ErrorBoundary';

const Menu = lazy(() => import('./menu/Menu'));
const Home = lazy(() => import('./main/home/Home'));
const Blog = lazy(() => import('./main/blog/Blog'));
const PostView = lazy(() => import('./main/blog/post-view/PostView'));
const FilmsSeen = lazy(() => import('./main/blog/lists/FilmsSeen'));
const TvShowsSeen = lazy(() => import('./main/blog/lists/TvShowsSeen'));
const Projects = lazy(() => import('./main/projects/Projects'));
const OpenSource = lazy(() => import('./main/open-source/OpenSource'));
const WorkHistory = lazy(() => import('./main/work-history/WorkHistory'));

const StyledApp = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-start;
	width: 100%;
`;

export function App() {
	return (
		<StyledApp>

			<ErrorBoundary>
				<Suspense fallback={<div />}>
					<Route component={Menu} />
				</Suspense>
			</ErrorBoundary>

			<ErrorBoundary>
				<Suspense fallback={<div />}>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/blog" component={Blog} />
						<Route exact path="/blog/post/:id" component={PostView} />
						<Route exact path="/blog/list/1532228220000" component={FilmsSeen} />
						<Route exact path="/blog/list/1532228640000" component={TvShowsSeen} />
						<Route exact path="/projects" component={Projects} />
						<Route exact path="/open-source" component={OpenSource} />
						<Route exact path="/work-history" component={WorkHistory} />
					</Switch>
				</Suspense>
			</ErrorBoundary>

		</StyledApp>
	);
}
