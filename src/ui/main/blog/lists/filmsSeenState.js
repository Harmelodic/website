import { createSlice } from '@reduxjs/toolkit';
import { request } from '../../../fetchHandler';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export function useFilmsSeen() {
	const filmsSeen = useSelector(filmsSeenSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchFilmsSeen());
	}, []);

	return filmsSeen;
}

export const filmsSeen = createSlice({
	name: 'filmsSeen',
	initialState: {
		value: [],
	},
	reducers: {
		setFilmsSeen: (state, action) => {
			state.value = action.payload;
		},
	},
});

export function filmsSeenSelector(state) {
	return state.filmsSeen.value;
}

const blogContentServer = process.env.BLOG_CONTENT_SERVER || '';

export function fetchFilmsSeen() {
	return async dispatch => {
		const response = await request('GET', `${blogContentServer}/posts/filmsSeen.json`);
		const data = await response.json();
		dispatch(filmsSeen.actions.setFilmsSeen(data));
	};
}
