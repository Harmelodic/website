import FetchHandler from '../../FetchHandler';
import Actions from './Actions';

const blogAPI = process.env.BLOG_API || '';

export default class Middleware {
  static fetchPosts() {
    return (dispatch) => {
      dispatch(Actions.startedLoadingPosts());
      FetchHandler.request('GET', `${blogAPI}/post`)
          .then((response) => response.json().then((data) => {
            dispatch(Actions.setPosts(data));
            dispatch(Actions.finishedLoadingPosts());
          }));
    };
  }

  static fetchCategories() {
    return (dispatch) => {
      dispatch(Actions.startedLoadingCategories());
      FetchHandler.request('GET', `${blogAPI}/category`)
          .then((response) => response.json().then((data) => {
            dispatch(Actions.setCategories(data));
            dispatch(Actions.finishedLoadingCategories());
          }));
    };
  }
};
