import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { useTheme } from 'styled-components';
import { Markdown } from '@harmelodic/react-ui-lib';
import { Main } from '../../Main';
import { clearSelectedPost, clearMarkdownText } from './actions';
import { fetchPost, fetchMarkdown } from './middleware';
import { LoadingTextBlock } from '../../../../lib/LoadingTextBlock';
import { HorizontalRule } from '../../../../lib/HorizontalRule';
import { ReadingSpace } from '../../../../lib/ReadingSpace';
import { useParams } from 'react-router-dom';

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
	--link-color: ${props => props.theme.text.link};
	--link-active-color: ${props => props.theme.text.linkActive};
	--code-block-background: ${props => props.theme.text.code.background};
	--code-block-color: ${props => props.theme.text.code.color};
	--blockquote-colour: ${props => props.theme.text.blockquote};
	--keyboard-text-color: ${props => props.theme.text.keyboard.color};
	--keyboard-border-color: ${props => props.theme.text.keyboard.border};
	--keyboard-outer-boxshadow: ${props => props.theme.text.keyboard.boxShadow.outer};
	--keyboard-inner-boxshadow: ${props => props.theme.text.keyboard.boxShadow.inner};

	& > div {
		font-family: Helvetica, sans-serif;
	}

	& > div > h1 {
		padding-bottom: 15px;
		border-bottom: solid ${props => props.theme.separator} 2px;
	    color: ${props => props.theme.text.title};
	}
	& > div > h2 {
		padding-top: 20px;
		padding-bottom: 10px;
		border-bottom: solid ${props => props.theme.separator} 1px;
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
	border-bottom: solid ${props => props.theme.separator} 2px;
	white-space: normal;
    color: ${props => props.theme.text.title};
`;

const Category = styled.div`
	margin-top: 5px;
	font-size: 18px;
	color: ${props => props.theme.text.subtitle};
	font-style: italic;
`;

export default function PostView() {
	const selectedPost = useSelector(store => store.blog.postView.selectedPost);
	const markdownText = useSelector(store => store.blog.postView.markdownText);

	const params = useParams();

	const dispatch = useDispatch();
	useEffect(() => {
		if (selectedPost.datePosted) {
			dispatch(fetchMarkdown(selectedPost.fileName));
		}
	}, [selectedPost.datePosted]);

	useEffect(() => {
		dispatch(fetchPost(parseInt(params.id)));
		window.scroll(0, 0);

		return function cleanup() {
			dispatch(clearSelectedPost());
			dispatch(clearMarkdownText());
		};
	}, []);

	const title = selectedPost.title || '';

	const theme = useTheme();

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
					<LoadingTextBlock width={500} color={theme.text.loading.title} />
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
					<LoadingTextBlock margin={15} width={200} color={theme.text.loading.title} />
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
					<LoadingTextBlock margin={15} width={100} color={theme.text.loading.title} />
					<LoadingTextBlock margin={15} width={500} />
					<LoadingTextBlock margin={15} width={150} />
					<LoadingTextBlock margin={15} width={80} />
					<LoadingTextBlock margin={15} width={450} />
					<br />
					<br />
					<LoadingTextBlock margin={15} width={300} color={theme.text.loading.title} />
					<HorizontalRule />
					<LoadingTextBlock margin={15} width={50} />
					<LoadingTextBlock margin={15} width={250} />
					<LoadingTextBlock margin={15} width={50} />
					<LoadingTextBlock margin={15} width={150} />
					<LoadingTextBlock margin={15} width={80} />
					<LoadingTextBlock margin={15} width={350} />
				</div>
				<Category>
					<LoadingTextBlock width={200} color={theme.text.loading.subtitle} />
				</Category>
			</PostViewWrapper>
			<ReadingSpace />
		</PostViewMain>
	);
}
