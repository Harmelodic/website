import { configureStore } from '@reduxjs/toolkit';
import { categories, loadingCategoriesStatus } from './app/main/blog/categories';
import filmsSeenReducer from './app/main/blog/lists/filmsSeenState';
import tvShowsSeenReducer from './app/main/blog/lists/tvShowsSeenState';
import { markdownText, selectedPost } from './app/main/blog/post-view/postViewState';
import { loadingPostsStatus, posts } from './app/main/blog/posts';
import projectsReducer from './app/main/projects/projectsState';
import openSourceProjectsReducer from './app/main/open-source/openSourceProjects';
import themeReducer from './theme/theme';
import viewModeReducer from './viewMode/viewMode';

export function initialiseStore() {
	return configureStore({
		reducer: {
			theme: themeReducer,
			viewMode: viewModeReducer,
			projects: projectsReducer,
			openSourceProjects: openSourceProjectsReducer,

			posts: posts.reducer,
			loadingPostsStatus: loadingPostsStatus.reducer,
			categories: categories.reducer,
			loadingCategoriesStatus: loadingCategoriesStatus.reducer,

			selectedPost: selectedPost.reducer,
			markdownText: markdownText.reducer,

			filmsSeen: filmsSeenReducer,
			tvShowsSeen: tvShowsSeenReducer,
		},
	});
}
