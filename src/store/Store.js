import { configureStore } from '@reduxjs/toolkit';
import { categories } from './categories';
import { filmsSeen } from './filmsSeen';
import { tvShowsSeen } from './tvShowsSeen';
import { selectedPost } from './postView';
import { posts } from './posts';
import { creations } from './creations';
import { openSourceProjects } from './openSourceProjects';
import { library } from './library';
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
