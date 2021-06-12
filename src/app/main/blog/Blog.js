import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, fetchCategories } from './middleware';
import { FilterByBox } from './components/FilterByBox';
import { Post } from './components/Post';
import { InputTextBox } from './components/InputTextBox';
import { Button } from './components/Button';
import { LoadingSign } from './components/LoadingSign';
import { Main } from '../Main';

const BlogMain = styled(Main)`
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 0;
`;

const StyledFilters = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin: 20px;
    white-space: normal;
`;

export default function Blog(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    props.updatePath();
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
  if (loadingCategoriesStatus && categories.length == 0) {
    categoryBox = (
      <FilterByBox
        onChange={() => setFilterByCategory(event.target.value)}
        value={filterByCategory}
      >
        <option value="">-</option>
      </FilterByBox>
    );
  } else {
    categoryBox = (
      <FilterByBox
        onChange={() => setFilterByCategory(event.target.value)}
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
      </FilterByBox>
    );
  }

  // Render Posts - with Loading fallback
  let postsToRender;
  if (loadingPostsStatus && posts.length == 0) {
    postsToRender = <LoadingSign />;
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
              } />
          );
        });
  }

  return (
    <BlogMain>
      <StyledFilters>
        {
          categoryBox
        }
        <InputTextBox
          placeholder="Filter..."
          onChange={() => setFilterBySearch(event.target.value)}
          value={filterBySearch}
        />
        <Button
          visible={(filterBySearch || filterByCategory)}
          onClick={() => {
            setFilterBySearch('');
            setFilterByCategory('');
          }}
        >
          Clear filters
        </Button>
      </StyledFilters>
      {
        postsToRender
      }
    </BlogMain>
  );
};
