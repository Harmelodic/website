import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './RootReducer';

export let Store;

export const initialiseStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  Store = createStore(
      rootReducer,
      initialState,
      composeEnhancers(
          applyMiddleware(thunk),
      ),
  );
};

const initialState = {
  mobileView: true,
  projects: [],
  openSourceProjects: [],
  socialMedia: [],
  blog: {
    posts: [],
    categories: [],
  },
};
