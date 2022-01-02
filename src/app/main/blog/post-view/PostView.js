import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Markdown } from '@harmelodic/react-ui-lib';
import { Main } from '../../Main';
import { clearSelectedPost, clearMarkdownText } from './actions';
import { fetchPost, fetchMarkdown } from './middleware';
import { LoadingTextBlock } from '../../../../lib/LoadingTextBlock';
import { HorizontalRule } from '../../../../lib/HorizontalRule';
import { ReadingSpace } from '../../../../lib/ReadingSpace';

const PostViewMain = styled(Main)`
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: center;
`;

const PostViewWrapper = styled.div`
	display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    max-width: 900px;

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

	& > div {
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
		<PostViewMain>
			<PostViewWrapper>
				<PostHeading>{title}</PostHeading>
				<Markdown
					markdown={markdownText}
					aTagAttributes='target="_blank" rel="nofollow"' />
				<Category>
					{markdownText && selectedPost.category}
				</Category>
			</PostViewWrapper>
			<ReadingSpace />
		</PostViewMain>
	) : (
		<PostViewMain>
			<PostViewWrapper>
				<PostHeading>
					<LoadingTextBlock width={500} color='#888' />
				</PostHeading>
				<div>
					<LoadingTextBlock margin={15} width={300} />
					<LoadingTextBlock margin={15} width={200} />
					<LoadingTextBlock margin={15} width={50} />
					<LoadingTextBlock margin={15} width={250} />
					<LoadingTextBlock margin={15} width={50} />
					<LoadingTextBlock margin={15} width={150} />
					<LoadingTextBlock margin={15} width={80} />
					<br />
					<br />
					<LoadingTextBlock margin={15} width={200} color='#aaa' />
					<HorizontalRule />
					<LoadingTextBlock margin={15} width={250} />
					<LoadingTextBlock margin={15} width={100} />
					<LoadingTextBlock margin={15} width={500} />
					<LoadingTextBlock margin={15} width={550} />
					<LoadingTextBlock margin={15} width={80} />
					<br />
					<br />
					<LoadingTextBlock margin={15} width={800} />
					<LoadingTextBlock margin={15} width={500} />
					<LoadingTextBlock margin={15} width={600} />
					<LoadingTextBlock margin={15} width={400} />
					<LoadingTextBlock margin={15} width={500} />
					<br />
					<br />
					<LoadingTextBlock margin={15} width={80} color='#aaa' />
					<LoadingTextBlock margin={15} width={500} />
					<LoadingTextBlock margin={15} width={150} />
					<LoadingTextBlock margin={15} width={80} />
					<LoadingTextBlock margin={15} width={450} />
					<br />
					<br />
					<LoadingTextBlock margin={15} width={300} color='#aaa' />
					<HorizontalRule />
					<LoadingTextBlock margin={15} width={50} />
					<LoadingTextBlock margin={15} width={250} />
					<LoadingTextBlock margin={15} width={50} />
					<LoadingTextBlock margin={15} width={150} />
					<LoadingTextBlock margin={15} width={80} />
					<LoadingTextBlock margin={15} width={350} />
				</div>
				<Category>
					<LoadingTextBlock width={200} color='#ddd' />
				</Category>
			</PostViewWrapper>
			<ReadingSpace />
		</PostViewMain>
	);
}
