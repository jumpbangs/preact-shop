import { useEffect } from 'preact/hooks';
import {
	hydrate,
	LocationProvider,
	prerender as ssr,
	Route,
	Router,
} from 'preact-iso';
import ProductStore from 'store/ProductStore';

import Footer from 'components/Footer';
import Header from 'components/Header';
import { NotFound } from 'pages/_404.jsx';
import Home from 'pages/Home';
import { fetchAllProducts } from 'services/productEndpoints';

import './index.css';

const App = () => {
	const setProducts = ProductStore((state) => state.setProducts);
	const productList = ProductStore((state) => state.products);

	useEffect(() => {
		if (productList.length === 0) {
			fetchAllProducts().then((value) => {
				setProducts(value.products);
			});
		}
	}, []);

	return (
		<LocationProvider>
			<Header />
			<main>
				<Router>
					<Route path="/" component={Home} />
					<Route default component={NotFound} />
				</Router>
			</main>
			<Footer />
		</LocationProvider>
	);
};

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export const prerender = async (data) => {
	return await ssr(<App {...data} />);
};
