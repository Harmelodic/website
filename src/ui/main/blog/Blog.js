import { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../lib/Button';
import { InputTextBox } from '../../lib/InputTextBox';
import { Post } from '../../lib/Post';
import { ReadingSpace } from '../../lib/ReadingSpace';
import { SelectBox } from '../../lib/SelectBox';
import { Title } from '../../lib/Title';
import { RowInfoBox } from '../../lib/InfoBox';
import { Main } from '../Main';
import { useCategories } from '../../../hooks/useCategories';
import { usePosts } from '../../../hooks/usePosts';

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
	const { categories, isLoadingCategories } = useCategories();
	const { posts, isLoadingPosts } = usePosts();
	const [filterBySearch, setFilterBySearch] = useState('');
	const [filterByCategory, setFilterByCategory] = useState('');

	return (
		<Main>
			<Title>Blog</Title>
			<StyledFilters>
				<SelectBox
					onChange={event => setFilterByCategory(event.target.value)}
					value={filterByCategory}
				>
					{
						isLoadingCategories ? (
							<option value="">Loading...</option>
						) : (
							<>
								<option value="">All Categories</option>
								{
									categories.map(category => {
										return (
											<option
												key={category.id}
												value={category.id}>
												{category.name}
											</option>
										);
									})
								}
							</>
						)
					}
				</SelectBox>
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
				{
					isLoadingPosts ? (
						Array(9).fill('').map((_, index) => (
							<Post
								key={index}
								loading={true}/>
						))
					) : (
						posts.length === 0 ? (
							<RowInfoBox>No posts found at this time.</RowInfoBox>
						) : (
							posts.filter(post => post.title.toUpperCase().includes(filterBySearch.toUpperCase()))
								.filter(post => {
									if (filterByCategory === '' || post.categories.includes(filterByCategory)) {
										return post;
									} else {
										return null;
									}
								})
								.map(post => (
									<Post
										key={post.id}
										link={`/blog/${post.id}`}
										title={post.title}
										categories={post.categories}
										categoryMappingList={categories}/>
								))
						)
					)
				}
			</Posts>
			<ReadingSpace/>
		</Main>
	);
};
