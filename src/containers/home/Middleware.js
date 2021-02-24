import FetchHandler from '../../FetchHandler';
import Actions from './Actions';

export default class Middleware {
  static fetchSocialMedia() {
    return (dispatch) => {
      FetchHandler.request('GET', '/resources/social-media.json')
          .then(response => response.json().then((data) => {
            dispatch(Actions.setSocialMedia(data));
          }));
    };
  }
};
