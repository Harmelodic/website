import { configureStore } from '@reduxjs/toolkit';
import { categories, loadingCategoriesStatus } from './app/main/blog/categories';
import filmsSeenReducer from './app/main/blog/lists/filmsSeenState';
import tvShowsSeenReducer from './app/main/blog/lists/tvShowsSeenState';
import { selectedPost } from './app/main/blog/post-view/postViewState';
import { loadingPostsStatus, posts } from './app/main/blog/posts';
import creationsReducer from './app/main/creations/creationsState';
import openSourceProjectsReducer from './app/main/open-source/openSourceProjects';
import themeModeReducer from './theme/themeMode';

export function initialiseStore() {
	return configureStore({
		reducer: {
			themeMode: themeModeReducer,
			creations: creationsReducer,
			openSourceProjects: openSourceProjectsReducer,

			posts: posts.reducer,
			loadingPostsStatus: loadingPostsStatus.reducer,
			categories: categories.reducer,
			loadingCategoriesStatus: loadingCategoriesStatus.reducer,

			selectedPost: selectedPost.reducer,

			filmsSeen: filmsSeenReducer,
			tvShowsSeen: tvShowsSeenReducer,
		},
	});
}
