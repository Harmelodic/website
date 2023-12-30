import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { categories, categoriesSelector } from '../store/categories';
import { request } from '../ui/fetchHandler';

export function useCategories() {
	const dispatch = useDispatch();
	const categories = useSelector(categoriesSelector);
	const [isLoadingCategories, setLoadingCategories] = useState(true);

	useEffect(() => {
		setLoadingCategories(true);
		dispatch(fetchCategories(() => setLoadingCategories(false)));
	}, []);

	return {
		categories: categories,
		isLoadingCategories: isLoadingCategories,
	};
}

const blogAPI = process.env.BLOG_API || '';

export function fetchCategories(done) {
	return async dispatch => {
		const response = await request('GET', `${blogAPI}/category`);
		const data = await response.json();
		dispatch(categories.actions.setCategories(data));
		done();
	};
}
