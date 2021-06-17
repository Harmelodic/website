import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { projectsReducer } from './app/main/projects/reducer';
import { openSourceProjectsReducer } from './app/main/open-source/reducer';
import { socialMediaReducer } from './app/main/home/reducer';
import { blogReducer } from './app/main/blog/reducer';

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
	projects: [],
	openSourceProjects: [],
	socialMedia: [],
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
		projects: projectsReducer(state.projects, action),
		openSourceProjects:
			openSourceProjectsReducer(state.openSourceProjects, action),
		socialMedia: socialMediaReducer(state.socialMedia, action),
		blog: blogReducer(state.blog, action),
	};
}
