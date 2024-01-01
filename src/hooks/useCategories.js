import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { categoriesSlice, categoriesSelector } from '../store/categoriesSlice';

export function useCategories() {
	const dispatch = useDispatch();
	const categories = useSelector(categoriesSelector);
	const [isLoadingCategories, setLoadingCategories] = useState(true);

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
					dispatch(categoriesSlice.actions.setCategories([]));
				}
			} catch (error) {
				console.error(error);
				dispatch(categoriesSlice.actions.setCategories([]));
			} finally {
				setLoadingCategories(false);
			}
		}
		// noinspection JSIgnoredPromiseFromCall - useEffect's effect can't be async.
		fetchCategories();
	}, []);

	return {
		categories: categories,
		isLoadingCategories: isLoadingCategories,
	};
}
