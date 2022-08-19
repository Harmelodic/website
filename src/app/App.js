import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { ErrorBoundary } from './ErrorBoundary';
import { fetchSocialMedia } from './main/home/middleware';

const Menu = lazy(() => import('./menu/Menu'));
const Home = lazy(() => import('./main/home/Home'));
const Blog = lazy(() => import('./main/blog/Blog'));
const PostView = lazy(() => import('./main/blog/post-view/PostView'));
const FilmsSeen = lazy(() => import('./main/blog/lists/FilmsSeen'));
const TvShowsSeen = lazy(() => import('./main/blog/lists/TvShowsSeen'));
const Projects = lazy(() => import('./main/projects/Projects'));
const OpenSource = lazy(() => import('./main/open-source/OpenSource'));
const WorkHistory = lazy(() => import('./main/work-history/WorkHistory'));
const Running = lazy(() => import('./main/running/Running'));

const StyledAbstractApp = styled.div`
	display: flex;
	justify-content: flex-start;
	width: 100%;
	
	font-family: ${props => props.theme.font.family};
	font-weight: ${props => props.theme.font.weight};
	color: ${props => props.theme.text.normal};
`;

const StyledDesktopApp = styled(StyledAbstractApp)`
	flex-flow: row nowrap;
`;

const StyledMobileApp = styled(StyledAbstractApp)`
	flex-flow: column nowrap;
`;

export function App() {
	const viewMode = useSelector(store => store.viewMode);

	let StyledApp;
	if (viewMode === 'desktop') {
		StyledApp = StyledDesktopApp;
	} else {
		StyledApp = StyledMobileApp;
	}

	return (
		<BrowserRouter>
			<StyledApp>

				<ErrorBoundary>
					<Suspense fallback={<div />}>
						<Routes>
							<Route path="*" element={<Menu />} />
						</Routes>
					</Suspense>
				</ErrorBoundary>

				<ErrorBoundary>
					<Suspense fallback={<div />}>
						<Routes>
							<Route exact path="/" element={<Home />} />
							<Route exact path="/blog" element={<Blog />} />
							<Route exact path="/blog/post/:id" element={<PostView />} />
							<Route exact path="/blog/list/1532228220000" element={<FilmsSeen />} />
							<Route exact path="/blog/list/1532228640000" element={<TvShowsSeen />} />
							<Route exact path="/projects" element={<Projects />} />
							<Route exact path="/open-source" element={<OpenSource />} />
							<Route exact path="/work-history" element={<WorkHistory />} />
							<Route exact path="/running" element={<Running />} />
						</Routes>
					</Suspense>
				</ErrorBoundary>

			</StyledApp>
		</BrowserRouter>
	);
}
