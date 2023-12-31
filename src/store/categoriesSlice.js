import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
	name: 'categories',
	initialState: [],
	reducers: {
		setCategories(state, action) {
			return action.payload;
		},
	},
});

export function categoriesSelector(state) {
	return state.categories;
}
