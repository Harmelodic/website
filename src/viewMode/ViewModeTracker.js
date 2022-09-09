import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { viewMode } from './viewMode';

export function ViewModeTracker() {
	const dispatch = useDispatch();

	const widthToChangeModes = 900;

	function updateWindowDimensions() {
		if (window.innerWidth >= widthToChangeModes) {
			dispatch(viewMode.actions.setToDesktop());
		} else if (window.innerWidth < widthToChangeModes) {
			dispatch(viewMode.actions.setToMobile());
		}
	}

	useEffect(() => {
		updateWindowDimensions();
		window.addEventListener('resize', updateWindowDimensions);

		return function cleanup() {
			window.removeEventListener('resize', updateWindowDimensions);
		};
	}, []);

	return (
		<div/>
	);
}
