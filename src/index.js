import ReactDOM from 'react-dom';
import { App } from './app/App';
import { Themed } from './theme/Themed';
import { Provider } from 'react-redux';
import { initialiseStore } from './Store';

const store = initialiseStore();

ReactDOM.render(
	<Provider store={store}>
		<Themed>
			<App />
		</Themed>
	</Provider>,
	document.getElementById('app'),
);
