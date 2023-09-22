import { configureStore } from '@reduxjs/toolkit';
import { categories } from './app/main/blog/categories';
import { filmsSeen } from './app/main/blog/lists/filmsSeenState';
import { tvShowsSeen } from './app/main/blog/lists/tvShowsSeenState';
import { selectedPost } from './app/main/blog/post-view/postViewState';
import { posts } from './app/main/blog/posts';
import { creations } from './app/main/creations/creationsState';
import { openSourceProjects } from './app/main/open-source/openSourceProjects';
import { library } from './app/main/library/libraryState';
import { themeMode } from './theme/themeMode';

export function initialiseStore() {
	return configureStore({
		reducer: {
			themeMode: themeMode.reducer,

			posts: posts.reducer,
			categories: categories.reducer,
			selectedPost: selectedPost.reducer,

			creations: creations.reducer,
			openSourceProjects: openSourceProjects.reducer,

			library: library.reducer,

			filmsSeen: filmsSeen.reducer,
			tvShowsSeen: tvShowsSeen.reducer,
		},
	});
}
