export const SET_FILMS_SEEN = 'SET_FILMS_SEEN';
export const SET_TV_SHOWS_SEEN = 'SET_TV_SHOWS_SEEN';

export function setFilmsSeen(films) {
	return {
		type: SET_FILMS_SEEN,
		films: films,
	};
}

export function setTvShowsSeen(tvShows) {
	return {
		type: SET_TV_SHOWS_SEEN,
		tvShows: tvShows,
	};
}
