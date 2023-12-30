import { useEffect } from 'react';
import styled, { useTheme } from 'styled-components';
import { useParams } from 'react-router-dom';
import { Main } from '../Main';
import { LoadingTextBlock } from '../../lib/LoadingTextBlock';
import { HorizontalRule } from '../../lib/HorizontalRule';
import { ReadingSpace } from '../../lib/ReadingSpace';
import { Markdown } from '../../lib/Markdown';
import { usePost } from '../../../hooks/usePost';

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
`;

const PostHeading = styled.h1`
	width: 100%;
	padding-bottom: 15px;
	border-bottom: solid ${props => props.theme.colors.hardBorder} 2px;
	white-space: normal;
	font-weight:  ${props => props.theme.font.weight};
    color: ${props => props.theme.font.titleColor};
`;

const Category = styled.div`
	margin-top: 5px;
	font-size: 1rem;
	color: ${props => props.theme.font.subtitleColor};
	font-style: italic;
`;

export default function PostView() {
	const params = useParams();
	const { post, isPostLoading } = usePost(params.id);
	const theme = useTheme();

	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	return isPostLoading ? (
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
	) : (
		<PostViewMain>
			<PostViewWrapper>
				<PostHeading>{post.title}</PostHeading>
				<Markdown markdown={post.content} />
				<Category>
					{post.content && post.category}
				</Category>
			</PostViewWrapper>
			<ReadingSpace />
		</PostViewMain>
	);
}
