import {
	hydrate,
	LocationProvider,
	prerender as ssr,
	Route,
	Router,
} from 'preact-iso';

import Footer from './components/footer/Footer.js';
import Header from './components/header/Header.js';
import { NotFound } from './pages/_404.jsx';
import Home from './pages/home/index.js';

import './index.css';

const App = () => {
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
