import React from 'react';
import styled from 'styled-components';

const ErrorMessage = styled.div`
  font-size: 20px;
  text-align: center;
`;

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorMessage>
          <p>Error loading this web component.</p>
          <p>
            This is usually due to a network connection issue.
          </p>
        </ErrorMessage>
      );
    }

    return this.props.children;
  }
}
