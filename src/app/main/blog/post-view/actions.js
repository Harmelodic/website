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
