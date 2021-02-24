import React from 'react';
import Middleware from './Middleware';
import styled from 'styled-components';
import FilterByBox from './components/FilterByBox';
import Post from './components/Post';
import InputTextBox from './components/InputTextBox';
import Button from './components/Button';
import LoadingSign from './components/LoadingSign';
import { Store } from '../../Store';
import { Main } from '../../components/Main';

const StyledFilters = styled.div`
    text-align: ${(props) => props.mobileView ? 'center' : 'left'};
    white-space: normal;
`;

export default class Scribbles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileView: Store.getState().mobileView,
      posts: Store.getState().blog.posts,
      loadingPostsStatus: Store.getState().blog.loadingPostsStatus,
      categories: Store.getState().blog.categories,
      loadingCategoriesStatus: Store.getState().blog.loadingCategoriesStatus,
      filterBySearch: '',
      filterByCategory: '',
    };

    this.onFilterBySearch = this.onFilterBySearch.bind(this);
    this.onFilterByCategory = this.onFilterByCategory.bind(this);
    this.onClearFilters = this.onClearFilters.bind(this);
  }

  onFilterBySearch(event) {
    this.setState({
      filterBySearch: event.target.value,
    });
  }

  onFilterByCategory(event) {
    this.setState({
      filterByCategory: event.target.value,
    });
  }

  onClearFilters() {
    this.setState({
      filterByCategory: '',
      filterBySearch: '',
    });
  }

  componentDidMount() {
    this.props.updatePath();
    this.unsubscribe = Store.subscribe(() => {
      this.setState({
        mobileView: Store.getState().mobileView,
        posts: Store.getState().blog.posts,
        loadingPostsStatus: Store.getState().blog.loadingPostsStatus,
        categories: Store.getState().blog.categories,
        loadingCategoriesStatus: Store.getState().blog.loadingCategoriesStatus,
      });
    });

    Store.dispatch(Middleware.fetchPosts());
    Store.dispatch(Middleware.fetchCategories());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const dateFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    };

    // Render Categories - with Loading fallback
    let categoryBox;
    if (this.state.loadingCategoriesStatus &&
        this.state.categories.length == 0) {
      categoryBox = (
        <FilterByBox
          onChange={this.onFilterByCategory}
          value={this.state.filterByCategory}
        >
          <option value="">-</option>
        </FilterByBox>
      );
    } else {
      categoryBox = (
        <FilterByBox
          onChange={this.onFilterByCategory}
          value={this.state.filterByCategory}
        >
          <option value="">All Categories</option>
          {
            this.state.categories
                .map((category) => {
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
    if (this.state.loadingPostsStatus && this.state.posts.length == 0) {
      postsToRender = <LoadingSign />;
    } else {
      postsToRender = this.state.posts
          .sort((a, b) => b.datePosted - a.datePosted)
          .filter((post) => post.title
              .toUpperCase()
              .includes(this.state.filterBySearch.toUpperCase()))
          .filter((post) => {
            if (this.state.filterByCategory === '' ||
              post.category === this.state.filterByCategory) {
              return post;
            } else {
              return null;
            }
          })
          .map((post) => {
            return (
              <Post
                key={post.datePosted}
                link={`https://scribbles.harmelodic.com/${post.route}/${post.datePosted}`}
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
      <Main>
        <StyledFilters mobileView={this.state.mobileView}>
          {
            categoryBox
          }
          <InputTextBox
            placeholder="Filter..."
            onChange={this.onFilterBySearch}
            value={this.state.filterBySearch}
          />
          <Button
            mobileView={this.state.mobileView}
            // eslint-disable-next-line max-len
            visible={(this.state.filterBySearch || this.state.filterByCategory)}
            onClick={this.onClearFilters}
          >
            Clear filters
          </Button>
        </StyledFilters>
        {
          postsToRender
        }
      </Main>
    );
  }
};
