import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Button } from '../../../lib/Button';
import { InputTextBox } from '../../../lib/InputTextBox';
import { Post } from '../../../lib/Post';
import { ReadingSpace } from '../../../lib/ReadingSpace';
import { SelectBox } from '../../../lib/SelectBox';
import { Title } from '../../../lib/Title';
import { RowInfoBox } from '../../../lib/InfoBox';
import { Main } from '../Main';
import { categoriesSelector, fetchCategories } from './categories';
import { postsSelector, fetchPosts } from './posts';

const StyledFilters = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 20px;
  white-space: normal;
`;

const Posts = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 900px;
`;

export default function Blog() {
	const dispatch = useDispatch();
	const posts = useSelector(postsSelector);
	const categories = useSelector(categoriesSelector);

	const [isLoadingPosts, setLoadingPosts] = useState(true);
	const [isLoadingCategories, setLoadingCategories] = useState(true);

	useEffect(() => {
		setLoadingPosts(true);
		setLoadingCategories(true);
		dispatch(fetchPosts(() => setLoadingPosts(false)));
		dispatch(fetchCategories(() => setLoadingCategories(false)));
	}, []);

	const [filterBySearch, setFilterBySearch] = useState('');
	const [filterByCategory, setFilterByCategory] = useState('');

	// Render Categories - with Loading fallback
	let categoryBox;
	if (isLoadingCategories) {
		categoryBox = (
			<SelectBox
				onChange={event => setFilterByCategory(event.target.value)}
				value={filterByCategory}
			>
				<option value="">Loading...</option>
			</SelectBox>
		);
	} else {
		categoryBox = (
			<SelectBox
				onChange={event => setFilterByCategory(event.target.value)}
				value={filterByCategory}
			>
				<option value="">All Categories</option>
				{
					categories.map((category) => {
						return (
							<option
								key={category.id}
								value={category.id}>
								{category.name}
							</option>
						);
					})
				}
			</SelectBox>
		);
	}

	// Render Posts - with Loading fallback
	let postsToRender;
	if (isLoadingPosts) {
		postsToRender = Array(9).fill('').map((_, index) => {
			return (
				<Post
					key={index}
					loading={true}/>
			);
		});
	} else if (posts.length === 0) {
		postsToRender = <RowInfoBox>No posts found at this time.</RowInfoBox>;
	} else {
		postsToRender = posts
			.filter(post => post.title.toUpperCase().includes(filterBySearch.toUpperCase()))
			.filter((post) => {
				if (filterByCategory === '' || post.categories.includes(filterByCategory)) {
					return post;
				} else {
					return null;
				}
			})
			.map((post) => {
				return (
					<Post
						key={post.id}
						link={`/blog/${post.id}`}
						title={post.title}
						categories={post.categories}
						categoryMappingList={categories} />
				);
			});
	}

	return (
		<Main>
			<Title>Blog</Title>
			<StyledFilters>
				{
					categoryBox
				}
				<InputTextBox
					placeholder="Filter..."
					onChange={event => setFilterBySearch(event.target.value)}
					value={filterBySearch}
				/>
				<Button
					visible={(filterBySearch || filterByCategory)}
					onClick={() => {
						setFilterBySearch('');
						setFilterByCategory('');
					}}
				>
					Reset
				</Button>
			</StyledFilters>
			<Posts>
				{postsToRender}
			</Posts>
			<ReadingSpace/>
		</Main>
	);
};
