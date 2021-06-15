import { request } from '../../../fetchHandler';
import { setSelectedPost, setMarkdownText } from './actions';

const blogAPI = process.env.BLOG_API || '';
const blogContentServer = process.env.BLOG_CONTENT_SERVER || '';

export function fetchPost(id) {
	return async (dispatch) => {
		const response = await request('GET', `${blogAPI}/post/${id}`);
		const data = await response.json();
		dispatch(setSelectedPost(data));
	};
}

export function fetchMarkdown(fileName) {
	return async (dispatch) => {
		dispatch(setMarkdownText(''));
		const response = await request('GET', `${blogContentServer}/posts/${fileName}`);
		const data = await response.text();
		dispatch(setMarkdownText(data));
	};
}
