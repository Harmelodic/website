import { Suspense, lazy } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { ErrorBoundary } from './ErrorBoundary';

const HeaderBar = lazy(() => import('./header/Bar'));
const Home = lazy(() => import('./main/home/Home'));
const Blog = lazy(() => import('./main/blog/Blog'));
const PostView = lazy(() => import('./main/blog/post-view/PostView'));
const FilmsSeen = lazy(() => import('./main/blog/lists/FilmsSeen'));
const TvShowsSeen = lazy(() => import('./main/blog/lists/TvShowsSeen'));
const Creations = lazy(() => import('./main/creations/Creations'));
const OpenSource = lazy(() => import('./main/open-source/OpenSource'));
const WorkHistory = lazy(() => import('./main/work-history/WorkHistory'));
const Running = lazy(() => import('./main/running/Running'));
const NoPageFound = lazy(() => import('./main/no-page-found/NoPageFound'));

const StyledApp = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-flow: column nowrap;
	width: 100%;
	min-height: 100vh;
	
	font-family: ${props => props.theme.font.family};
	font-weight: ${props => props.theme.font.weight};
`;

const HEADER_HEIGHT = '60px';

const Header = styled.header`
	width: 100%;
	height: ${HEADER_HEIGHT};
	background: ${props => props.theme.colors.darkBackground};
	position: sticky;
	top: 0;
`;

export function App() {
	return (
		<BrowserRouter>
			<StyledApp>
				<Header>
					<ErrorBoundary>
						<Suspense fallback={<div />}>
							<Routes>
								<Route path="*" element={<HeaderBar />} />
							</Routes>
						</Suspense>
					</ErrorBoundary>
				</Header>
				<ErrorBoundary>
					<Suspense fallback={<div />}>
						<Routes>
							<Route exact path="/" element={<Home />} />
							<Route exact path="/blog" element={<Blog />} />
							<Route exact path="/blog/post/:id" element={<PostView />} />
							<Route exact path="/blog/list/1532228220000" element={<FilmsSeen />} />
							<Route exact path="/blog/list/1532228640000" element={<TvShowsSeen />} />
							<Route exact path="/creations" element={<Creations />} />
							<Route exact path="/open-source" element={<OpenSource />} />
							<Route exact path="/work-history" element={<WorkHistory />} />
							<Route exact path="/running" element={<Running />} />
							<Route path="*" element={<NoPageFound />} />
						</Routes>
					</Suspense>
				</ErrorBoundary>
			</StyledApp>
		</BrowserRouter>
	);
}
