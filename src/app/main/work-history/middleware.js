import { request } from '../../fetchHandler';
import { Actions } from './actions';

export function fetchWorkHistory() {
	return async (dispatch) => {
		const response = await request('GET', '/resources/work-history.json');
		const data = await response.json();
		dispatch(Actions.setWorkHistory(data));
	};
}
