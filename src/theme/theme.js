import { createSlice } from '@reduxjs/toolkit';

export const theme = createSlice({
	name: 'theme',
	initialState: {
		value: 'light',
	},
	reducers: {
		setToLight: (state) => {
			state.value = 'light';
		},
		setToDark: (state) => {
			state.value = 'dark';
		},
	},
});

export const themeSelector = state => state.theme.value;

export default theme.reducer;
