import { Suspense, lazy } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { ErrorBoundary } from './ErrorBoundary';
import { Themed } from './theme/Themed';
import Lists from "./main/lists/Lists";

const HeaderBar = lazy(() => import('./header/HeaderBar'));
const Home = lazy(() => import('./main/Home'));
const Blog = lazy(() => import('./main/blog/Blog'));
const PostView = lazy(() => import('./main/blog/PostView'));
const FilmsSeen = lazy(() => import('./main/lists/FilmsSeen'));
const TvShowsSeen = lazy(() => import('./main/lists/TvShowsSeen'));
const Creations = lazy(() => import('./main/Creations'));
const OpenSource = lazy(() => import('./main/OpenSource'));
const Library = lazy(() => import('./main/library/Library'));
const WorkHistory = lazy(() => import('./main/WorkHistory'));
const NoPageFound = lazy(() => import('./main/NoPageFound'));

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
								<Route exact path="/lists" element={<Lists />} />
								<Route exact path="/lists/films-seen" element={<FilmsSeen />} />
								<Route exact path="/lists/tv-shows-seen" element={<TvShowsSeen />} />
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
