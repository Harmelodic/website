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

export const categoriesSelector = state => state.categories.value;

export const loadingCategoriesStatus = createSlice({
	name: 'loadingCategoriesStatus',
	initialState: {
		value: false,
	},
	reducers: {
		started: (state) => {
			state.value = true;
		},
		finished: (state) => {
			state.value = false;
		},
	},
});

export const loadingCategoriesStatusSelector = state => state.loadingCategoriesStatus.value;

const blogAPI = process.env.BLOG_API || '';

export function fetchCategories() {
	return async (dispatch) => {
		dispatch(loadingCategoriesStatus.actions.started());

		const response = await request('GET', `${blogAPI}/category`);
		const data = await response.json();

		dispatch(categories.actions.setCategories(data));
		dispatch(loadingCategoriesStatus.actions.finished());
	};
}
