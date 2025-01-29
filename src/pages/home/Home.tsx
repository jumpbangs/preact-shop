import { useEffect, useState } from 'preact/hooks';
import home from 'assets/background/home-bg.jpg';
import ProductStore from 'store/ProductStore';

const Home = () => {
	const [productImages, setProductImages] = useState([]);
	const [currentLeftImage, setCurrentLeftImage] = useState(null);
	const [currentRightImage, setCurrentRightImage] = useState(null);
	const productList = ProductStore((state) => state.products);

	useEffect(() => {
		if (productList.length) {
			const images = productList
				.filter((item) => Array.isArray(item.images) && item.images.length > 0)
				.map((item) => item.images[0]);
			setProductImages(images);
		}
	}, [productList]);

	useEffect(() => {
		if (!productImages || productImages.length === 0) return;

		const fetchRandomImage = () => {
			const randomIndex = Math.floor(Math.random() * productImages.length);
			const randomIndex2 = Math.floor(
				(Math.random() * productImages.length) / 2,
			);
			setCurrentLeftImage(productImages[randomIndex]);
			setCurrentRightImage(productImages[randomIndex2]);
		};

		// Fetch the first image immediately
		fetchRandomImage();

		// Set up the interval
		const intervalId = setInterval(fetchRandomImage, 5000); // Change 3000 to your desired interval in ms

		// Clear the interval on unmount
		return () => clearInterval(intervalId);
	}, [productImages]);

	const onClickHandler = () => {
		throw new Error('Crashed !!');
	};

	return (
		<div
			className="hero bg-base-200 min-h-screen"
			style={{
				backgroundImage: `url(${home})`,
			}}
		>
			<div className="hero-overlay bg-opacity-80"></div>
			<div className="hero-content text-neutral-content text-center">
				<div className="flex flex-row gap-2">
					<div className="h-[812px] w-[480px] content-center">
						{currentLeftImage ? (
							<img
								src={currentLeftImage}
								alt="Random"
								style={{ width: '300px', height: '300px', objectFit: 'cover' }}
							/>
						) : (
							<p>Loading...</p>
						)}
					</div>
					<div className="text-center content-center">
						<h1 className="text-5xl font-bold">One stop shop</h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
						<button className="btn btn-primary" onClick={onClickHandler}>
							Get Started
						</button>
					</div>
					<div className="h-[812px] w-[480px] content-center">
						{currentRightImage ? (
							<img
								src={currentRightImage}
								alt="Random"
								style={{ width: '300px', height: '300px', objectFit: 'cover' }}
							/>
						) : (
							<p>Loading...</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
