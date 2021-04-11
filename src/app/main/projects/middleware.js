import { request } from '../../fetchHandler';
import { Actions } from './actions';

export function fetchProjects() {
  return async (dispatch) => {
    const response = await request('GET', '/resources/projects.json');
    const data = await response.json();
    dispatch(Actions.setProjects(data));
  };
}
