import { request } from '../../fetchHandler';
import { Actions } from './actions';

export function fetchOpenSourceProjects() {
	return async (dispatch) => {
		const response = await request('GET', '/resources/open-source.json');
		const data = await response.json();
		dispatch(Actions.setOpenSourceProjects(data));
	};
}
