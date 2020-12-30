export const SET_POSTS = 'SET_POSTS';
export const SET_CATEGORIES = 'SET_CATEGORIES';

export default class Actions {
  static setPosts(posts) {
    return {
      type: SET_POSTS,
      posts,
    };
  }

  static setCategories(categories) {
    return {
      type: SET_CATEGORIES,
      categories,
    };
  }
};
