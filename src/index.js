import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { initialiseStore } from './Store';
import { App } from './app/App';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './light-theme';

const store = initialiseStore();

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={lightTheme}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</Provider>,
	document.getElementById('app'),
);
