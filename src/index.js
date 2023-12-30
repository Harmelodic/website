import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './ui/App';
import { initialiseStore } from './store/Store';

const store = initialiseStore();

const root = createRoot(document.getElementById('app'));

root.render(
	<Provider store={store}>
		<App />
	</Provider>,
);
