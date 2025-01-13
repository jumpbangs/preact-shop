import { Home } from 'feather-icons-react';
import { useLocation } from 'preact-iso';

export const NotFound = () => {
	const { route } = useLocation();

	return (
		<div className="hero bg-base-200 min-h-screen">
			<div className="hero-content text-center">
				<div className="max-w-lg">
					<div class="flex flex-col lg:flex-row items-center space-x-4">
						<h1 class="text-5xl font-bold">404!</h1>
						<p class="text-xl">
							Sorry, the page that you are looking for does not exist.
						</p>
					</div>

					<div class="mt-10">
						<button
							className="btn btn-outline btn-error"
							onClick={() => route('/')}
						>
							<Home />
							Return home
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
