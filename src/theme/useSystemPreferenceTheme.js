import { useEffect, useState } from 'react';

export function useSystemPreferenceTheme() {
	const [systemPreferenceTheme, setSystemPreferenceTheme] = useState(
		window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
	);

	useEffect(() => {
		function handleThemeChange(event) {
			if (event.matches) {
				setSystemPreferenceTheme('dark');
			} else {
				setSystemPreferenceTheme('light');
			}
		}

		window.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', handleThemeChange);

		return function cleanup() {
			window.matchMedia('(prefers-color-scheme: dark)')
				.removeEventListener('change', handleThemeChange);
		};
	});

	return systemPreferenceTheme;
}
