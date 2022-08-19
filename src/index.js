import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './app/App';
import { initialiseStore } from './Store';
import { Themed } from './theme/Themed';
import { ViewModeTracker } from './viewMode/ViewModeTracker';

const store = initialiseStore();

const root = createRoot(document.getElementById('app'));

root.render(
	<Provider store={store}>
		<ViewModeTracker />
		<Themed>
			<App/>
		</Themed>
	</Provider>,
);
