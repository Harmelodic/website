import FetchHandler from '../../FetchHandler';
import Actions from './Actions';

export default class Middleware {
  static fetchProjects() {
    return (dispatch) => {
      FetchHandler.request('GET', '/resources/projects.json')
          .then((response) => response.json().then((data) => {
            dispatch(Actions.setProjects(data));
          }));
    };
  }
};
