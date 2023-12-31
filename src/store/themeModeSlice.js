import { createSlice } from '@reduxjs/toolkit';

export const themeModeSlice = createSlice({
	name: 'themeMode',
	initialState: localStorage.getItem('themeMode') || 'system-preference',
	reducers: {
		setToSystemPreference: () => {
			localStorage.setItem('themeMode', 'system-preference');
			return 'system-preference';
		},
		setToLight: () => {
			localStorage.setItem('themeMode', 'light');
			return 'light';
		},
		setToDark: () => {
			localStorage.setItem('themeMode', 'dark');
			return 'dark';
		},
	},
});

export function themeModeSelector(state) {
	return state.themeMode;
}
