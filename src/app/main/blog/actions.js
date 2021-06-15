export const SET_POSTS = 'SET_POSTS';
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const STARTED_LOADING_POSTS = 'STARTED_LOADING_POSTS';
export const FINISHED_LOADING_POSTS = 'FINISHED_LOADING_POSTS';
export const STARTED_LOADING_CATEGORIES = 'STARTED_LOADING_CATEGORIES';
export const FINISHED_LOADING_CATEGORIES = 'FINISHED_LOADING_CATEGORIES';

export class Actions {
	static setPosts(posts) {
		return {
			type: SET_POSTS,
			posts,
		};
	}

	static setCategories(categories) {
		return {
			type: SET_CATEGORIES,
			categories,
		};
	}

	static startedLoadingPosts() {
		return {
			type: STARTED_LOADING_POSTS,
		};
	}

	static finishedLoadingPosts() {
		return {
			type: FINISHED_LOADING_POSTS,
		};
	}

	static startedLoadingCategories() {
		return {
			type: STARTED_LOADING_CATEGORIES,
		};
	}

	static finishedLoadingCategories() {
		return {
			type: FINISHED_LOADING_CATEGORIES,
		};
	}
};
