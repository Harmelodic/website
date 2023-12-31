import { configureStore } from '@reduxjs/toolkit';
import { categoriesSlice } from './categoriesSlice';
import { filmsSeenSlice } from './filmsSeenSlice';
import { tvShowsSeenSlice } from './tvShowsSeenSlice';
import { selectedPostSlice } from './selectedPostSlice';
import { postsSlice } from './postsSlice';
import { creationsSlice } from './creationsSlice';
import { openSourceProjectsSlice } from './openSourceProjectsSlice';
import { librarySlice } from './librarySlice';
import { themeModeSlice } from './themeModeSlice';

export function initialiseStore() {
	return configureStore({
		reducer: {
			themeMode: themeModeSlice.reducer,

			posts: postsSlice.reducer,
			categories: categoriesSlice.reducer,
			selectedPost: selectedPostSlice.reducer,

			creations: creationsSlice.reducer,
			openSourceProjects: openSourceProjectsSlice.reducer,

			library: librarySlice.reducer,

			filmsSeen: filmsSeenSlice.reducer,
			tvShowsSeen: tvShowsSeenSlice.reducer,
		},
	});
}
