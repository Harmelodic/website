import { request } from '../../../fetchHandler';
import { setFilmsSeen, setTvShowsSeen } from './actions';

const blogContentServer = process.env.BLOG_CONTENT_SERVER || '';

export function fetchFilmsSeen() {
  return async (dispatch) => {
    const response = await request('GET', `${blogContentServer}/posts/filmsSeen.json`);
    const data = await response.json();
    dispatch(setFilmsSeen(data));
  };
}

export function fetchTvShowsSeen() {
  return async (dispatch) => {
    const response = await request('GET', `${blogContentServer}/posts/tvShowsSeen.json`);
    const data = await response.json();
    dispatch(setTvShowsSeen(data));
  };
}
