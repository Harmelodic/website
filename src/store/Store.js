import { configureStore } from '@reduxjs/toolkit';
import { categories } from './categories';
import { filmsSeen } from './filmsSeenState';
import { tvShowsSeen } from './tvShowsSeenState';
import { selectedPost } from './postViewState';
import { posts } from './posts';
import { creations } from './creationsState';
import { openSourceProjects } from './openSourceProjects';
import { library } from './libraryState';
import { themeMode } from './themeMode';

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
