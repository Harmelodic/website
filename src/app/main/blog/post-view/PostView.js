import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { useTheme } from 'styled-components';
import { Markdown } from '@harmelodic/web-ui';
import { Main } from '../../Main';
import { fetchPost, selectedPostSelector, selectedPost } from './postViewState';
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
	--link-color: ${props => props.theme.font.linkColor};
	--link-active-color: ${props => props.theme.font.linkActiveColor};
	--code-block-background: ${props => props.theme.font.code.background};
	--code-block-color: ${props => props.theme.font.code.color};
	--blockquote-colour: ${props => props.theme.font.blockquote};
	--keyboard-text-color: ${props => props.theme.font.keyboard.color};
	--keyboard-border-color: ${props => props.theme.font.keyboard.border};
	--keyboard-outer-boxshadow: ${props => props.theme.font.keyboard.boxShadow.outer};
	--keyboard-inner-boxshadow: ${props => props.theme.font.keyboard.boxShadow.inner};

	& > div {
		font-family: Helvetica, sans-serif;
		color: ${props => props.theme.font.normalColor};
	}

	& > div > h1 {
		padding-bottom: 15px;
		border-bottom: solid ${props => props.theme.separator} 2px;
	    color: ${props => props.theme.colors.accents.green};
	}
	& > div > h2 {
		padding-top: 20px;
		padding-bottom: 10px;
		border-bottom: solid ${props => props.theme.separator} 1px;
		color: ${props => props.theme.colors.accents.green};
	}
	& > .heading, h3, h4, h5, h6 {
		padding-top: 15px;
		color: ${props => props.theme.colors.accents.green};
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
    color: ${props => props.theme.font.titleColor};
`;

const Category = styled.div`
	margin-top: 5px;
	font-size: 1rem;
	color: ${props => props.theme.font.subtitleColor};
	font-style: italic;
`;

export default function PostView() {
	const post = useSelector(selectedPostSelector);

	const params = useParams();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPost(params.id));
		window.scroll(0, 0);

		return function cleanup() {
			dispatch(selectedPost.actions.clear());
		};
	}, []);

	const title = post.title || '';

	const theme = useTheme();

	const readyToRender = title && post.content;

	return readyToRender ? (
		<PostViewMain>
			<PostViewWrapper>
				<PostHeading>{title}</PostHeading>
				<Markdown
					markdown={post.content}
					aTagAttributes='target="_blank" rel="nofollow"' />
				<Category>
					{post.content && post.category}
				</Category>
			</PostViewWrapper>
			<ReadingSpace />
		</PostViewMain>
	) : (
		<PostViewMain>
			<PostViewWrapper>
				<PostHeading>
					<LoadingTextBlock width={500} color={theme.font.loading.title} />
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
					<LoadingTextBlock margin={15} width={200} color={theme.font.loading.title} />
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
					<LoadingTextBlock margin={15} width={100} color={theme.font.loading.title} />
					<LoadingTextBlock margin={15} width={500} />
					<LoadingTextBlock margin={15} width={150} />
					<LoadingTextBlock margin={15} width={80} />
					<LoadingTextBlock margin={15} width={450} />
					<br />
					<br />
					<LoadingTextBlock margin={15} width={300} color={theme.font.loading.title} />
					<HorizontalRule />
					<LoadingTextBlock margin={15} width={50} />
					<LoadingTextBlock margin={15} width={250} />
					<LoadingTextBlock margin={15} width={50} />
					<LoadingTextBlock margin={15} width={150} />
					<LoadingTextBlock margin={15} width={80} />
					<LoadingTextBlock margin={15} width={350} />
				</div>
				<Category>
					<LoadingTextBlock width={200} color={theme.font.loading.subtitle} />
				</Category>
			</PostViewWrapper>
			<ReadingSpace />
		</PostViewMain>
	);
}
