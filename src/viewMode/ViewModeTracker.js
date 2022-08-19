import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setViewModeToDesktop, setViewModeToMobile } from './actions';

export function ViewModeTracker() {
	const dispatch = useDispatch();

	const widthToChangeModes = 670;

	function updateWindowDimensions() {
		if (window.innerWidth >= widthToChangeModes) {
			dispatch(setViewModeToDesktop());
		} else if (window.innerWidth < widthToChangeModes) {
			dispatch(setViewModeToMobile());
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
