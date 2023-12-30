import { configureStore } from '@reduxjs/toolkit';
import { categories } from '../ui/main/blog/categories';
import { filmsSeen } from '../ui/main/blog/lists/filmsSeenState';
import { tvShowsSeen } from '../ui/main/blog/lists/tvShowsSeenState';
import { selectedPost } from '../ui/main/blog/post-view/postViewState';
import { posts } from '../ui/main/blog/posts';
import { creations } from '../ui/main/creations/creationsState';
import { openSourceProjects } from '../ui/main/open-source/openSourceProjects';
import { library } from '../ui/main/library/libraryState';
import { themeMode } from '../ui/theme/themeMode';

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
