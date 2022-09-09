import { createSlice } from '@reduxjs/toolkit';
import { request } from '../../../fetchHandler';

export const selectedPost = createSlice({
	name: 'selectedPost',
	initialState: {
		value: {}
	},
	reducers: {
		setSelectedPost: (state, action) => {
			state.value = action.payload
		},
		clear: (state) => {
			state.value = {}
		}
	}
})

export const selectedPostSelector = (state) => state.selectedPost.value;

export const markdownText = createSlice({
	name: 'markdownText',
	initialState: {
		value: ''
	},
	reducers: {
		setMarkdownText: (state, action) => {
			state.value = action.payload
		},
		clear: (state) => {
			state.value = ''
		}
	}
})

export const markdownTextSelector = (state) => state.markdownText.value;

const blogAPI = process.env.BLOG_API || '';
const blogContentServer = process.env.BLOG_CONTENT_SERVER || '';

export function fetchPost(id) {
	return async (dispatch) => {
		const response = await request('GET', `${blogAPI}/post/${id}`);
		const data = await response.json();
		dispatch(selectedPost.actions.setSelectedPost(data));
	};
}

export function fetchMarkdown(fileName) {
	return async (dispatch) => {
		dispatch(markdownText.actions.clear());
		const response = await request('GET', `${blogContentServer}/posts/${fileName}`);
		const data = await response.text();
		dispatch(markdownText.actions.setMarkdownText(data));
	};
}
