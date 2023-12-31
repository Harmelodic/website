import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
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

export const categoriesActions = categoriesSlice.actions;
