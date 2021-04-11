import { request } from '../../../fetchHandler';
import { Actions } from './actions';

export class Middleware {
  static fetchProjects() {
    return (dispatch) => {
      request('GET', '/resources/projects.json')
          .then(response => response.json().then((data) => {
            dispatch(Actions.setProjects(data));
          }));
    };
  }
};
