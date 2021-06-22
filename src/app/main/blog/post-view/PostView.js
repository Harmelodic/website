import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Markdown } from '@harmelodic/react-ui-lib';
import { Main } from '../../Main';
import { clearSelectedPost, clearMarkdownText } from './actions';
import { fetchPost, fetchMarkdown } from './middleware';

const StyledViewPost = styled(Main)`
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: flex-start;
	padding-left: 10px;

	// Markdown re-styling
	--link-color: #0645ad;
	--link-active-color: #df0000;
	--code-block-background: #000;
	--code-block-color: #fff;
	--blockquote-colour: #2e70b1;
	--keyboard-text-color: #242729;
	--keyboard-border-color: #adb3b9;
	--keyboard-outer-boxshadow: rgba(12, 13, 14, 0.2);
	--keyboard-inner-boxshadow: #fff;

	// Header styling
	& > .heading, h1, h2, h3, h4, h5, h6 {
		font-family: Helvetica, sans-serif;
	}
	& > div > h1 {
		padding-bottom: 15px;
		border-bottom: solid #333 2px;
	}
	& > div > h2 {
		padding-top: 20px;
		padding-bottom: 10px;
		border-bottom: solid #888 1px;
	}
	& > .heading, h3, h4, h5, h6 {
		padding-top: 15px;
	}

	// Creating a gap for clean #anchor linking
	& > div > h1:before, 
	& > div > h2:before, 
	& > div > h3:before {
		content: "";
		display: block;
		padding-top: 70px;
		margin-top: -65px;
	}
`;

const PostHeading = styled.h1`
	width: 100%;
	padding-bottom: 15px;
	border-bottom: solid #333 2px;
	white-space: normal;
`;

const LoadingTextBlock = styled.div`
	height: ${props => props.height ? props.height : '13'}px;
	width: ${props => props.width}px;
	border-radius: ${props => props.height ? props.height : '13'}px;
	background: ${props => props.color ? props.color : '#ccc'};
	margin: 10px;
`;

const Category = styled.div`
	margin-top: 5px;
	font-size: 18px;
	color: #999;
	font-style: italic;
`;

export default function PostView(props) {
	const selectedPost = useSelector(store => store.blog.postView.selectedPost);
	const markdownText = useSelector(store => store.blog.postView.markdownText);

	const dispatch = useDispatch();
	useEffect(() => {
		if (selectedPost.datePosted) {
			dispatch(fetchMarkdown(selectedPost.fileName));
		}
	}, [selectedPost.datePosted]);

	useEffect(() => {
		dispatch(fetchPost(parseInt(props.match.params.id)));
		window.scroll(0, 0);

		return function cleanup() {
			dispatch(clearSelectedPost());
			dispatch(clearMarkdownText());
		};
	}, []);

	const title = selectedPost.title || '';

	const readyToRender = title && markdownText;

	return readyToRender ? (
		<StyledViewPost>
			<PostHeading>{title}</PostHeading>
			<Markdown
				markdown={markdownText}
				aTagAttributes='target="_blank" rel="nofollow"' />
			<Category>
				{markdownText && selectedPost.category}
			</Category>
		</StyledViewPost>
	) : (
		<StyledViewPost>
			<PostHeading>
				<LoadingTextBlock width={500} color='#888' />
			</PostHeading>
			<div>
				<LoadingTextBlock width={200} />
				<LoadingTextBlock width={100} />
				<LoadingTextBlock width={50} />
				<LoadingTextBlock width={200} />
				<LoadingTextBlock width={50} />
				<LoadingTextBlock width={110} />
				<LoadingTextBlock width={80} />
				<br />
				<br />
				<br />
			</div>
			<Category>
				<LoadingTextBlock width={200} color='#ddd' />
			</Category>
		</StyledViewPost>
	);
}
