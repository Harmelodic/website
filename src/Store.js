import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { projectsReducer } from './app/main/projects/reducer';
import { openSourceProjectsReducer } from './app/main/open-source/reducer';
import { socialMediaReducer } from './app/main/home/reducer';
import { blogReducer } from './app/main/blog/reducer';
import { workHistoryReducer } from './app/main/work-history/reducer';
import { themeReducer } from './theme/reducer';
import { viewModeReducer } from './viewMode/reducer';

export function initialiseStore() {
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	return createStore(
		rootReducer,
		initialState,
		composeEnhancers(
			applyMiddleware(thunk),
		),
	);
}

const initialState = {
	theme: 'light',
	viewMode: 'desktop',
	projects: [],
	openSourceProjects: [],
	socialMedia: [],
	workHistory: [],
	blog: {
		posts: [],
		categories: [],
		postView: {
			selectedPost: {},
			markdownText: '',
		},
		lists: {
			filmsSeen: [],
			tvShowsSeen: [],
		},
	},
};

function rootReducer(state, action) {
	return {
		theme: themeReducer(state.theme, action),
		viewMode: viewModeReducer(state.viewMode, action),
		projects: projectsReducer(state.projects, action),
		openSourceProjects:
			openSourceProjectsReducer(state.openSourceProjects, action),
		socialMedia: socialMediaReducer(state.socialMedia, action),
		blog: blogReducer(state.blog, action),
		workHistory: workHistoryReducer(state.workHistory, action),
	};
}
