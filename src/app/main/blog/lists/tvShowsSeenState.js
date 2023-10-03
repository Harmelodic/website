import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';
import { request } from '../../../fetchHandler';

export function useTvShowsSeen() {
	const tvShowsSeen = useSelector(tvShowsSeenSelector);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchTvShowsSeen());
	}, []);

	return tvShowsSeen;
}

export const tvShowsSeen = createSlice({
	name: 'tvShowsSeen',
	initialState: {
		value: [],
	},
	reducers: {
		setTvShowsSeen: (state, action) => {
			state.value = action.payload;
		},
	},
});

export function tvShowsSeenSelector(state) {
	return state.tvShowsSeen.value;
}

const blogContentServer = process.env.BLOG_CONTENT_SERVER || '';

export function fetchTvShowsSeen() {
	return async dispatch => {
		const response = await request('GET', `${blogContentServer}/posts/tvShowsSeen.json`);
		const data = await response.json();
		dispatch(tvShowsSeen.actions.setTvShowsSeen(data));
	};
}
