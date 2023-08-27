import { createSlice } from '@reduxjs/toolkit';
import { request } from '../../fetchHandler';

export const categories = createSlice({
	name: 'categories',
	initialState: {
		value: [],
	},
	reducers: {
		setCategories: (state, action) => {
			state.value = action.payload;
		},
	},
});

export function categoriesSelector(state) {
	return state.categories.value;
}

const blogAPI = process.env.BLOG_API || '';

export function fetchCategories(done) {
	return async (dispatch) => {
		const response = await request('GET', `${blogAPI}/category`);
		const data = await response.json();
		dispatch(categories.actions.setCategories(data));
		done();
	};
}
