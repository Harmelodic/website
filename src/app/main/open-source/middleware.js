import { request } from '../../../fetchHandler';
import { Actions } from './actions';

export class Middleware {
  static fetchOpenSourceProjects() {
    return (dispatch) => {
      request('GET', '/resources/open-source.json')
          .then(response => response.json().then((data) => {
            dispatch(Actions.setOpenSourceProjects(data));
          }));
    };
  }
};
