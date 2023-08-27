import { createSlice } from '@reduxjs/toolkit';

export const themeMode = createSlice({
	name: 'themeMode',
	initialState: {
		value: localStorage.getItem('themeMode') || 'system-preference',
	},
	reducers: {
		setToSystemPreference: (state) => {
			state.value = 'system-preference';
			localStorage.setItem('themeMode', 'system-preference');
		},
		setToLight: (state) => {
			state.value = 'light';
			localStorage.setItem('themeMode', 'light');
		},
		setToDark: (state) => {
			state.value = 'dark';
			localStorage.setItem('themeMode', 'dark');
		},
	},
});

export function themeModeSelector(state) {
	return state.themeMode.value;
}
