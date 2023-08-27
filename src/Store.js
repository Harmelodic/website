import { configureStore } from '@reduxjs/toolkit';
import { categories, loadingCategoriesStatus } from './app/main/blog/categories';
import { filmsSeen } from './app/main/blog/lists/filmsSeenState';
import { tvShowsSeen } from './app/main/blog/lists/tvShowsSeenState';
import { selectedPost } from './app/main/blog/post-view/postViewState';
import { loadingPostsStatus, posts } from './app/main/blog/posts';
import { creations } from './app/main/creations/creationsState';
import { openSourceProjects } from './app/main/open-source/openSourceProjects';
import { themeMode } from './theme/themeMode';

export function initialiseStore() {
	return configureStore({
		reducer: {
			themeMode: themeMode.reducer,

			creations: creations.reducer,
			openSourceProjects: openSourceProjects.reducer,

			posts: posts.reducer,
			loadingPostsStatus: loadingPostsStatus.reducer,
			categories: categories.reducer,
			loadingCategoriesStatus: loadingCategoriesStatus.reducer,

			selectedPost: selectedPost.reducer,

			filmsSeen: filmsSeen.reducer,
			tvShowsSeen: tvShowsSeen.reducer,
		},
	});
}
