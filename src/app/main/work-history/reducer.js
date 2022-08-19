import { SET_WORK_HISTORY } from './actions';

export function workHistoryReducer(workHistoryState, action) {
	let workHistory = Object.assign([], workHistoryState);

	switch (action.type) {
		case SET_WORK_HISTORY:
			workHistory = action.workHistory;
			break;
	}

	return workHistory;
}
