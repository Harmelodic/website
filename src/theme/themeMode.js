import { createSlice } from '@reduxjs/toolkit';

export const themeMode = createSlice({
	name: 'themeMode',
	initialState: {
		value: 'system-preference',
	},
	reducers: {
		setToSystemPreference: (state) => {
			state.value = 'system-preference';
		},
		setToLight: (state) => {
			state.value = 'light';
		},
		setToDark: (state) => {
			state.value = 'dark';
		},
	},
});

export const themeModeSelector = state => state.themeMode.value;

export default themeMode.reducer;
