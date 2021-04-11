import { request } from '../../../fetchHandler';
import { Actions } from './actions';

export class Middleware {
  static fetchSocialMedia() {
    return (dispatch) => {
      request('GET', '/resources/social-media.json')
          .then(response => response.json().then((data) => {
            dispatch(Actions.setSocialMedia(data));
          }));
    };
  }
};
