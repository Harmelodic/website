import { postViewReducer } from './post-view/reducer';
import { listsReducer } from './lists/reducer';
import {
	SET_POSTS,
	SET_CATEGORIES,
	STARTED_LOADING_POSTS,
	FINISHED_LOADING_POSTS,
	STARTED_LOADING_CATEGORIES,
	FINISHED_LOADING_CATEGORIES,
} from './actions';

export function blogReducer(state, action) {
	return {
		posts: postsReducer(state.posts, action),
		loadingPostsStatus:
			loadingPostsStatusReducer(state.loadingPostsStatus, action),
		categories: categoriesReducer(state.categories, action),
		loadingCategoriesStatus:
			loadingCategoriesStatusReducer(state.loadingCategoriesStatus, action),
		postView: postViewReducer(state.postView, action),
		lists: listsReducer(state.lists, action),
	};
}

function postsReducer(state, action) {
	let posts = Object.assign([], state);

	switch (action.type) {
		case SET_POSTS:
			posts = action.posts;
			break;
	}

	return posts;
}

function categoriesReducer(state, action) {
	let categories = Object.assign([], state);

	switch (action.type) {
		case SET_CATEGORIES:
			categories = action.categories;
			break;
	}

	return categories;
}

function loadingPostsStatusReducer(state, action) {
	let loadingPostsStatus = state;

	switch (action.type) {
		case STARTED_LOADING_POSTS:
			loadingPostsStatus = true;
			break;
		case FINISHED_LOADING_POSTS:
			loadingPostsStatus = false;
			break;
		default:
			break;
	}

	return loadingPostsStatus;
}


function loadingCategoriesStatusReducer(state, action) {
	let loadingCategoriesStatus = state;

	switch (action.type) {
		case STARTED_LOADING_CATEGORIES:
			loadingCategoriesStatus = true;
			break;
		case FINISHED_LOADING_CATEGORIES:
			loadingCategoriesStatus = false;
			break;
		default:
			break;
	}

	return loadingCategoriesStatus;
}
