import { createSlice } from '@reduxjs/toolkit';
import { request } from '../../fetchHandler';

export const workHistory = createSlice({
	name: 'workHistory',
	initialState: {
		value: []
	},
	reducers: {
		setWorkHistory: (state, action) => {
			state.value = action.payload
		},
	}
})

export function fetchWorkHistory() {
	return async (dispatch) => {
		const response = await request('GET', '/resources/work-history.json');
		const data = await response.json();
		dispatch(workHistory.actions.setWorkHistory(data));
	};
}

export const workHistorySelector = (state) => state.workHistory.value;

export default workHistory.reducer;
