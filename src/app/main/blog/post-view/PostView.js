import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Markdown } from '@harmelodic/react-ui-lib';
import { Main } from '../../Main';
import { clearSelectedPost, clearMarkdownText } from './actions';
import { fetchPost, fetchMarkdown } from './middleware';

const StyledViewPost = styled(Main)`
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 10px;

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

  // Header styling
  & > .heading, h1, h2, h3, h4, h5, h6 {
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

const StyledCategory = styled.div`
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

  return (
    <StyledViewPost>
      <Markdown
        markdown={`<h1>${title}</h1>\n\n` + markdownText}
        aTagAttributes='target="_blank" rel="nofollow"'/>
      <StyledCategory>
        {markdownText && selectedPost.category}
      </StyledCategory>
    </StyledViewPost>
  );
}
