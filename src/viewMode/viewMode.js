import { createSlice } from '@reduxjs/toolkit';

export const viewMode = createSlice({
	name: 'viewMode',
	initialState: {
		value: 'desktop',
	},
	reducers: {
		setToDesktop: (state) => {
			state.value = 'desktop';
		},
		setToMobile: (state) => {
			state.value = 'mobile';
		},
	},
});

export const viewModeSelector = state => state.viewMode.value;

export default viewMode.reducer;
