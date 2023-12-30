import { Suspense, lazy } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { ErrorBoundary } from './ErrorBoundary';
import { Themed } from './theme/Themed';

const HeaderBar = lazy(() => import('./header/HeaderBar'));
const Home = lazy(() => import('./main/home/Home'));
const Blog = lazy(() => import('./main/blog/Blog'));
const PostView = lazy(() => import('./main/blog/PostView'));
const FilmsSeen = lazy(() => import('./main/blog/lists/FilmsSeen'));
const TvShowsSeen = lazy(() => import('./main/blog/lists/TvShowsSeen'));
const Creations = lazy(() => import('./main/creations/Creations'));
const OpenSource = lazy(() => import('./main/open-source/OpenSource'));
const Library = lazy(() => import('./main/library/Library'));
const WorkHistory = lazy(() => import('./main/work-history/WorkHistory'));
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

export function App() {
	return (
		<BrowserRouter>
			<Themed>
				<StyledApp>
					<ErrorBoundary>
						<Suspense fallback={<div />}>
							<Routes>
								<Route path="*" element={<HeaderBar />} />
							</Routes>
						</Suspense>
					</ErrorBoundary>
					<ErrorBoundary>
						<Suspense fallback={<div />}>
							<Routes>
								<Route exact path="/" element={<Home />} />
								<Route exact path="/blog" element={<Blog />} />
								<Route exact path="/blog/:id" element={<PostView />} />
								<Route exact path="/blog/list/1532228220000" element={<FilmsSeen />} />
								<Route exact path="/blog/list/1532228640000" element={<TvShowsSeen />} />
								<Route exact path="/creations" element={<Creations />} />
								<Route exact path="/open-source" element={<OpenSource />} />
								<Route exact path="/library" element={<Library />} />
								<Route exact path="/work-history" element={<WorkHistory />} />
								<Route path="*" element={<NoPageFound />} />
							</Routes>
						</Suspense>
					</ErrorBoundary>
				</StyledApp>
			</Themed>
		</BrowserRouter>
	);
}
