import React from 'react';
import styled from 'styled-components';

const ErrorMessage = styled.div`
  display: inline-block;
  margin-top: 10px;
  border: red solid 1px;
  border-radius: 3px;
  padding: 0 20px;
  font-size: 18px;
  text-align: center;
`;

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      errorMessage: '',
    };
  }

  static getDerivedStateFromError(_) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorMessage>
          <p>
            Error loading web component.
          </p>
        </ErrorMessage>
      );
    }

    return this.props.children;
  }
}
