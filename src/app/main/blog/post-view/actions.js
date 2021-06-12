export const SET_POSTS = 'SET_POSTS';
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const STARTED_LOADING_POSTS = 'STARTED_LOADING_POSTS';
export const FINISHED_LOADING_POSTS = 'FINISHED_LOADING_POSTS';
export const STARTED_LOADING_CATEGORIES = 'STARTED_LOADING_CATEGORIES';
export const FINISHED_LOADING_CATEGORIES = 'FINISHED_LOADING_CATEGORIES';
export const SET_SELECTED_POST = 'SET_SELECTED_POST';
export const SET_MARKDOWN_TEXT = 'SET_MARKDOWN_TEXT';

export function setSelectedPost(selectedPost) {
  return {
    type: SET_SELECTED_POST,
    selectedPost,
  };
}

export function clearSelectedPost() {
  return {
    type: SET_SELECTED_POST,
    selectedPost: {},
  };
}

export function setMarkdownText(markdownText) {
  return {
    type: SET_MARKDOWN_TEXT,
    markdownText,
  };
}

export function clearMarkdownText() {
  return {
    type: SET_MARKDOWN_TEXT,
    markdownText: '',
  };
}
