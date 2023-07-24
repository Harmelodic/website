import { useEffect, useState } from 'react';

export function useWindowSize() {
	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
	});

	useEffect(() => {
		function handleResizeChange() {
			setWindowSize({
				width: window.innerWidth,
			});
		}

		window.addEventListener('resize', handleResizeChange);

		return function cleanup() {
			window.removeEventListener('resize', handleResizeChange);
		};
	});

	return windowSize;
}
