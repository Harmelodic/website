import {
	SET_SELECTED_POST,
	SET_MARKDOWN_TEXT,
} from './actions';

export function postViewReducer(state, action) {
	return {
		selectedPost: selectedPostReducer(state.selectedPost, action),
		markdownText: markdownTextReducer(state.markdownText, action),
	};
};

function selectedPostReducer(selectedPostState, action) {
	let selectedPost = Object.assign({}, selectedPostState);

	switch (action.type) {
		case SET_SELECTED_POST:
			selectedPost = action.selectedPost;
			break;
	}

	return selectedPost;
};

function markdownTextReducer(markdownTextState, action) {
	let markdownText = markdownTextState;

	switch (action.type) {
		case SET_MARKDOWN_TEXT:
			markdownText = action.markdownText;
			break;
	}

	return markdownText;
}
