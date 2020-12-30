import FetchHandler from '../FetchHandler';
import Actions from './Actions';

const blogAPI = process.env.BLOG_API || '';

export default class Middleware {
  static fetchPosts() {
    return (dispatch) => {
      FetchHandler.request('GET', `${blogAPI}/post`)
          .then((response) => response.json().then((data) => {
            dispatch(Actions.setPosts(data));
          }));
    };
  }

  static fetchCategories() {
    return (dispatch) => {
      FetchHandler.request('GET', `${blogAPI}/category`)
          .then((response) => response.json().then((data) => {
            dispatch(Actions.setCategories(data));
          }));
    };
  }
};
