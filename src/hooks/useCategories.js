import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { categoriesSlice, categoriesSelector } from '../store/categoriesSlice';

export function useCategories() {
	const dispatch = useDispatch();
	const categories = useSelector(categoriesSelector);
	const [isLoadingCategories, setLoadingCategories] = useState(true);
	const [errorLoadingCategories, setErrorLoadingCategories] = useState({ occurred: false, reason: '' });

	useEffect(() => {
		setLoadingCategories(true);

		async function fetchCategories() {
			try {
				const response = await fetch(`${process.env.BLOG_API}/category`);
				if (response.ok) {
					const data = await response.json();
					dispatch(categoriesSlice.actions.setCategories(data));
				} else {
					console.error(`Failed to fetch categories. Response: ${response.status}`);
					setErrorLoadingCategories({
						occurred: true,
						reason: response.status,
					});
				}
			} catch (error) {
				console.error(error);
				setErrorLoadingCategories({
					occurred: true,
					reason: 'Network error',
				});
			} finally {
				setLoadingCategories(false);
			}
		}

		// noinspection JSIgnoredPromiseFromCall - cannot await since useEffect's effect can't be async.
		fetchCategories();
	}, []);

	return {
		categories: categories,
		isLoadingCategories: isLoadingCategories,
		errorLoadingCategories: errorLoadingCategories,
	};
}
