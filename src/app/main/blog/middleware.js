import { request } from '../../fetchHandler';
import { Actions } from './actions';

const blogAPI = process.env.BLOG_API || '';

export function fetchPosts() {
  return async (dispatch) => {
    dispatch(Actions.startedLoadingPosts());

    const response = await request('GET', `${blogAPI}/post`);
    const data = await response.json();

    dispatch(Actions.setPosts(data));
    dispatch(Actions.finishedLoadingPosts());
  };
}

export function fetchCategories() {
  return async (dispatch) => {
    dispatch(Actions.startedLoadingCategories());

    const response = await request('GET', `${blogAPI}/category`);
    const data = await response.json();

    dispatch(Actions.setCategories(data));
    dispatch(Actions.finishedLoadingCategories());
  };
}
