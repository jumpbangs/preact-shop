import ky from 'ky';

const PRODUCT_URL = 'https://dummyjson.com/products';

export const fetchAllProducts = async () => {
	try {
		const response = await ky.get(PRODUCT_URL);
		return response.json();
	} catch (error) {
		return error;
	}
};

export const fetchAllProductsByCategory = async () => {
	try {
		const response = await ky.get(`${PRODUCT_URL}/categories`);
		return response.json();
	} catch (error) {
		return error;
	}
};
