import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { ProductDetails } from 'services/productTypes';

interface ProductStoreState {
	products: ProductDetails[];
	// eslint-disable-next-line no-unused-vars
	setProducts: (newProducts: ProductDetails[]) => void;
}

const ProductStore = create<ProductStoreState>()(
	persist(
		(set) => ({
			products: [],
			setProducts: (newProducts: ProductDetails[]) =>
				set(() => ({ products: newProducts })),
		}),
		{
			name: 'product-storage',
		},
	),
);
export default ProductStore;
