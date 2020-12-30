import React from 'react';
import Middleware from './Middleware';
import { Store } from '../Store';
import Menu from '../components/Menu';
import styled from 'styled-components';
import {
  StyledFadeInDiv,
  StyledPageContentContainer,
} from '../components/Stylings';
import FilterByBox from './components/FilterByBox';
import Post from './components/Post';
import InputTextBox from './components/InputTextBox';
import Button from './components/Button';

const StyledFilters = styled.div`
    text-align: ${(props) => props.mobileView ? 'center' : 'left'};
    white-space: normal;
`;

export default class Scribbles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: Store.getState().blog.posts,
      categories: Store.getState().blog.categories,
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
    this.unsubscribe = Store.subscribe(() => {
      this.setState({
        posts: Store.getState().blog.posts,
        categories: Store.getState().blog.categories,
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

    return (
      <div>
        <Menu blog={true} />
        <StyledFadeInDiv>
          <StyledPageContentContainer>
            <StyledFilters mobileView={this.state.mobileView}>
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
              this.state.posts
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
                  })
            }
          </StyledPageContentContainer>
        </StyledFadeInDiv>
      </div>
    );
  }
};
