import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { categoriesSlice, categoriesSelector } from '../store/categoriesSlice';
import { request } from '../api/apiHandler';

const blogAPI = process.env.BLOG_API || '';

export function useCategories() {
	const dispatch = useDispatch();
	const categories = useSelector(categoriesSelector);
	const [isLoadingCategories, setLoadingCategories] = useState(true);

	useEffect(() => {
		setLoadingCategories(true);

		request('GET', `${blogAPI}/category`)
			.then(response => response.json())
			.then(data => {
				dispatch(categoriesSlice.actions.setCategories(data));
				setLoadingCategories(false);
			});
	}, []);

	return {
		categories: categories,
		isLoadingCategories: isLoadingCategories,
	};
}
