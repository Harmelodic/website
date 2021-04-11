import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';

export const initialiseStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
      rootReducer,
      initialState,
      composeEnhancers(
          applyMiddleware(thunk),
      ),
  );
};

const initialState = {
  projects: [],
  openSourceProjects: [],
  socialMedia: [],
  blog: {
    posts: [],
    categories: [],
  },
};
