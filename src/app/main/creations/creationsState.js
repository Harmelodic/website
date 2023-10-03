import { createSlice } from '@reduxjs/toolkit';
import { request } from '../../fetchHandler';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export function useCreations() {
	const dispatch = useDispatch();
	const creations = useSelector(creationsSelector);

	useEffect(() => {
		dispatch(fetchCreations());
	}, []);

	return creations;
}

export const creations = createSlice({
	name: 'creations',
	initialState: {
		value: [],
	},
	reducers: {
		setCreations: (state, action) => {
			state.value = action.payload;
		},
	},
});

export function fetchCreations() {
	return async dispatch => {
		const response = await request('GET', '/resources/creations.json');
		const data = await response.json();
		dispatch(creations.actions.setCreations(data));
	};
}

export function creationsSelector(state) {
	return state.creations.value;
}
