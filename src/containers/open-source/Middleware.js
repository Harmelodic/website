import FetchHandler from '../../FetchHandler';
import Actions from './Actions';

export default class Middleware {
  static fetchOpenSourceProjects() {
    return (dispatch) => {
      FetchHandler.request('GET', '/resources/open-source.json')
          .then((response) => response.json().then((data) => {
            dispatch(Actions.setOpenSourceProjects(data));
          }));
    };
  }
};
