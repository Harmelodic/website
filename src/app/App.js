import { Suspense, lazy } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
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
const Bookmarks = lazy(() => import('./main/bookmarks/Bookmarks'));
const WorkHistory = lazy(() => import('./main/work-history/WorkHistory'));

const StyledApp = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-start;
	width: 100%;
  
  	font-family: ${props => props.theme.font.family};
  	font-weight: ${props => props.theme.font.weight};
    color: ${props => props.theme.text.normal};
`;

export function App() {
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
							<Route exact path="/bookmarks" element={<Bookmarks />} />
							<Route exact path="/work-history" element={<WorkHistory />} />
						</Routes>
					</Suspense>
				</ErrorBoundary>

			</StyledApp>
		</BrowserRouter>
	);
}
