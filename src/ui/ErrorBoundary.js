import React from 'react';
import { ErrorMessage } from './lib/ErrorMessage';

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
					<p>Error loading web component.</p>
				</ErrorMessage>
			);
		}

		return this.props.children;
	}
}
