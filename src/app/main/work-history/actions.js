export const SET_WORK_HISTORY = 'SET_WORK_HISTORY';

export class Actions {
	static setWorkHistory(workHistory) {
		return {
			type: SET_WORK_HISTORY,
			workHistory: workHistory,
		};
	}
}
