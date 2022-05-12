import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Button } from '../../../lib/Button';
import { InputTextBox } from '../../../lib/InputTextBox';
import { Post } from '../../../lib/Post';
import { ReadingSpace } from '../../../lib/ReadingSpace';
import { SelectBox } from '../../../lib/SelectBox';
import { Title } from '../../../lib/Title';
import { Main } from '../Main';
import { fetchCategories, fetchPosts } from './middleware';

const StyledFilters = styled.div`
  display: flex;
  flex-flow: row wrap;
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

	useEffect(() => {
		dispatch(fetchPosts());
		dispatch(fetchCategories());
	}, []);

	const [filterBySearch, setFilterBySearch] = useState('');
	const [filterByCategory, setFilterByCategory] = useState('');

	const posts = useSelector(store => store.blog.posts);
	const loadingPostsStatus = useSelector(store => store.blog.loadingPostsStatus);
	const categories = useSelector(store => store.blog.categories);
	const loadingCategoriesStatus = useSelector(store => store.blog.loadingCategoriesStatus);

	const dateFormatOptions = {
		year: 'numeric',
		month: 'short',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
	};

	// Render Categories - with Loading fallback
	let categoryBox;
	if (loadingCategoriesStatus && categories.length === 0) {
		categoryBox = (
			<SelectBox
				onChange={event => setFilterByCategory(event.target.value)}
				value={filterByCategory}
			>
				<option value="">---------------------------</option>
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
								key={category}
								value={category}>
								{category}
							</option>
						);
					})
				}
			</SelectBox>
		);
	}

	// Render Posts - with Loading fallback
	let postsToRender;
	if (loadingPostsStatus && posts.length === 0) {
		postsToRender = Array(9).fill('').map((_, index) => {
			return (
				<Post
					key={index}
					loading={true}/>
			);
		});
	} else {
		postsToRender = posts
			.sort((a, b) => b.datePosted - a.datePosted)
			.filter(post => post.title
				.toUpperCase()
				.includes(filterBySearch.toUpperCase()))
			.filter((post) => {
				if (filterByCategory === '' ||
					post.category === filterByCategory) {
					return post;
				} else {
					return null;
				}
			})
			.map((post) => {
				return (
					<Post
						key={post.datePosted}
						link={`/blog/${post.route}/${post.datePosted}`}
						title={post.title}
						category={post.category}
						datePosted={
							new Date(post.datePosted)
								.toLocaleString('en-GB', dateFormatOptions)
						}
						lastUpdated={
							new Date(post.lastUpdated)
								.toLocaleString('en-GB', dateFormatOptions)
						}/>
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
