import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { categoriesSelector, fetchCategories } from '../store/categories';

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
