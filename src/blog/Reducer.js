import { SET_POSTS, SET_CATEGORIES } from './Actions';

export const blogReducer = (state, action) => {
  return {
    posts: postsReducer(state.posts, action),
    categories: categoriesReducer(state.categories, action),
  };
};

const postsReducer = (state, action) => {
  let posts = Object.assign([], state);

  switch (action.type) {
    case SET_POSTS:
      posts = action.posts;
      break;
  }

  return posts;
};

const categoriesReducer = (state, action) => {
  let categories = Object.assign([], state);

  switch (action.type) {
    case SET_CATEGORIES:
      categories = action.categories;
      break;
  }

  return categories;
};
