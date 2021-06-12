import { SET_FILMS_SEEN, SET_TV_SHOWS_SEEN } from './actions';

export function listsReducer(state, action) {
  return {
    filmsSeen: filmsSeenReducer(state.filmsSeen, action),
    tvShowsSeen: tvShowsSeenReducer(state.tvShowsSeen, action),
  };
};


function filmsSeenReducer(filmsSeenState, action) {
  let filmsSeen = Object.assign([], filmsSeenState);

  switch (action.type) {
    case SET_FILMS_SEEN:
      filmsSeen = action.films;
      break;
  }

  return filmsSeen;
};

function tvShowsSeenReducer(tvShowsSeenState, action) {
  let tvShowsSeen = Object.assign([], tvShowsSeenState);

  switch (action.type) {
    case SET_TV_SHOWS_SEEN:
      tvShowsSeen = action.tvShows;
      break;
  }

  return tvShowsSeen;
};

