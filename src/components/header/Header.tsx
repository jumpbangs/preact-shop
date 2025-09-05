import { useState } from 'preact/hooks';
import { useLocation } from 'preact-iso';
import {
	Menu,
	Search,
	ShoppingBag,
	ShoppingCart,
	X,
} from 'feather-icons-react';

import { PRODUCT_CATEGORY } from 'utils/constants';
const mainOptions = PRODUCT_CATEGORY;

const Header = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const { url } = useLocation();

	return (
		<header class="flex py-3 sm:px-6 px-4 min-h-[75px] tracking-wide relative z-50 ">
			<div class="flex max-w-(--breakpoint-xl) mx-auto w-full text-white">
				<div class="flex flex-wrap items-center lg:gap-y-2 gap-4 w-full">
					<a href="javascript:void(0)" class="max-sm:hidden">
						<ShoppingBag />
					</a>
					<a href="javascript:void(0)" class="hidden max-sm:block">
						<ShoppingBag />
					</a>

					<div
						id="collapseMenu"
						style={{ display: openMenu ? 'block' : 'none' }}
						class="lg:ml-6 max-lg:hidden lg:block! max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
					>
						<button
							id="toggleClose"
							class="lg:hidden fixed top-2 right-4 z-100 rounded-full bg-white w-9 h-9 flex items-center justify-center border"
							onClick={() => setOpenMenu(false)}
						>
							<X color="black" />
						</button>

						<ul class="lg:flex lg:gap-x-3 max-lg:space-y-3 max-lg:fixed max-lg:bg-slate-700 max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
							<li class="mb-6 hidden max-lg:block">
								<div class="flex items-center justify-between gap-4">
									<a href="javascript:void(0)">
										<ShoppingBag />
									</a>
									<button class="px-4 py-2 text-sm rounded-full text-white border-2 border-[#007bff] bg-[#007bff] hover:bg-[#004bff]">
										Sign In
									</button>
								</div>
							</li>
							{mainOptions.map((item, index) => {
								return (
									<li class="max-lg:border-b max-lg:py-3 px-3">
										<a
											href="javascript:void(0)"
											// ${index === 0 ? `text-[#007bff]` : `text-white`}
											class={` hover:text-[#007bff] text-[15px] block font-semibold`}
										>
											{item.name}
										</a>
									</li>
								);
							})}
						</ul>
					</div>

					<div class="flex items-center gap-x-6 gap-y-4 ml-auto">
						<div class="flex border  rounded-full px-4 py-2.5 overflow-hidden max-w-52 max-lg:hidden">
							<input
								type="text"
								placeholder="Search something..."
								class="w-full text-sm bg-transparent outline-hidden pr-2"
							/>
							<Search size="18" />
						</div>

						<div class="flex items-center sm:space-x-8 space-x-6">
							{/* <div class="flex flex-col items-center justify-center gap-0.5 cursor-pointer">
								<div class="dropdown dropdown-bottom dropdown-end">
									<div tabIndex={0} role="button" className="m-1">
										<div class="relative">
											<Heart />
											<span class="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
												0
											</span>
											<span class="text-[13px] font-semibold">Wishlist</span>
										</div>
									</div>
									<ul
										tabIndex={0}
										className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
									>
										<li>
											<a>Wish item 1</a>
										</li>
										<li>
											<a>Wish item 2</a>
										</li>
									</ul>
								</div>
							</div> */}
							<div class="flex flex-col items-center justify-center gap-0.5 cursor-pointer">
								<div class="dropdown dropdown-bottom dropdown-end">
									<div tabIndex={0} role="button" className="m-1">
										<div class="relative">
											<ShoppingCart />
											<span class="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
												0
											</span>
											<span class="text-[13px] font-semibold">Cart</span>
										</div>
									</div>
									<div
										tabIndex={0}
										className="card compact dropdown-content bg-base-100 rounded-box z-1 w-64 shadow-sm"
									>
										<div tabIndex={0} className="card-body">
											<h2 className="card-title">Total Item cost: $130</h2>
											<div>
												<ul>
													<li>Item 1</li>
													<li>Item 2</li>
													<li>Item 3</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>

							<button class="max-lg:hidden px-4 py-2 text-sm rounded-full text-white border-2 border-[#007bff] bg-[#007bff] hover:bg-[#004bff]">
								Sign In
							</button>

							<button
								id="toggleOpen"
								class="lg:hidden"
								onClick={() => setOpenMenu(true)}
							>
								<Menu />
							</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
