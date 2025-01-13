import { ShoppingBag } from 'feather-icons-react';

import AfterPayIcon from './paymentIcons/afterpay';
import AmexIcon from './paymentIcons/amex';
import ApplePayIcon from './paymentIcons/applepay';
import GooglePayIcon from './paymentIcons/googlepay';
import MasterCardIcon from './paymentIcons/master';
import PaypalIcon from './paymentIcons/paypal';
import VisaIcon from './paymentIcons/visa';
import FacebookIcon from './socialIcons/facebook';
import InstagramIcon from './socialIcons/instagram';
import PinterestIcon from './socialIcons/pinterest';
import YoutubeIcon from './socialIcons/youtube';

const mainOptions = [
	{
		name: 'New',
	},
	{
		name: 'Men',
	},
	{
		name: 'Women',
	},
	{
		name: 'Kids',
	},
];

const shoppingList = [
	{
		title: 'Delivery',
		url: '#',
	},
	{
		title: 'Order Tracking',
		url: '#',
	},
	{
		title: 'Points + Pay',
		url: '#',
	},
	{
		title: 'Returns & Exchanges',
		url: '#',
	},
	{
		title: 'Click & Collect',
		url: '#',
	},
];

const customerServiceList = [
	{
		title: 'FAQs',
		url: '#',
	},
	{
		title: 'Contact Us',
		url: '#',
	},
	{
		title: 'Promotions',
		url: '#',
	},
	{
		title: 'Newsletter',
		url: '#',
	},
	{
		title: 'Notices & Recalls',
		url: '#',
	},
];

const additionalList = [
	{
		title: 'Careers',
		url: '#',
	},
	{
		title: 'About Us',
		url: '#',
	},
	{
		title: 'Our Partners',
		url: '#',
	},
];

const PaymentList = [
	<VisaIcon height="28" width="28" />,
	<MasterCardIcon height="28" width="28" />,
	<AmexIcon height="28" width="28" />,
	<ApplePayIcon height="28" width="28" />,
	<GooglePayIcon height="28" width="28" />,
	<PaypalIcon height="28" width="28" />,
	<AfterPayIcon height="28" width="28" />,
];

const Footer = () => {
	return (
		<footer class="font-sans tracking-wide px-10 pt-12 pb-6 text-white">
			<div class="flex flex-wrap justify-between gap-10">
				<div class="max-w-md">
					<a href="javascript:void(0)">
						<ShoppingBag />
					</a>
					<div class="mt-6">
						<p class="leading-relaxed text-sm">
							Preact Ex in adipisicing do ex anim elit adipisicing eu laboris
							pariatur cillum sit ea. Tempor dolor laboris Lorem pariatur
							officia minim incididunt excepteur exercitation occaecat esse
							exercitation. Non fugiat nisi minim culpa. Dolore magna ad aute
							elit in nisi consectetur esse. Excepteur occaecat magna sint nulla
							ad. Est laboris aute in est est enim reprehenderit consectetur
							fugiat id nisi cupidatat ipsum. Excepteur ullamco Lorem est aute
							minim consectetur ad ut quis eiusmod adipisicing.
						</p>
					</div>
					<ul class="mt-10 flex flex-col">
						<h3>Stay Connected with Us.</h3>
						<div class="flex flex-row space-x-5 mt-4">
							<li>
								<a href="javascript:void(0)">
									<FacebookIcon />
								</a>
							</li>
							<li>
								<a href="javascript:void(0)">
									<YoutubeIcon />
								</a>
							</li>
							<li>
								<a href="javascript:void(0)">
									<InstagramIcon />
								</a>
							</li>
							<li>
								<a href="javascript:void(0)">
									<PinterestIcon />
								</a>
							</li>
						</div>
					</ul>
				</div>

				<div class="max-lg:min-w-[140px]">
					<h4 class="font-semibold text-base relative max-sm:cursor-pointer">
						Payment Options
					</h4>

					<ul class="mt-6 space-x-4 w-72 grid grid-cols-7 gap-4">
						{PaymentList.map((item, index) => {
							return <li key={index}>{item}</li>;
						})}
					</ul>
				</div>

				<div class="max-lg:min-w-[140px]">
					<h4 class="font-semibold text-base relative max-sm:cursor-pointer">
						Shopping
					</h4>
					<ul class="space-y-4 mt-6">
						{shoppingList.map((item, index) => {
							return (
								<li key={index}>
									<a
										href="javascript:void(0)"
										class="hover:text-gray-800 text-white text-sm"
									>
										{item.title}
									</a>
								</li>
							);
						})}
					</ul>
				</div>

				<div class="max-lg:min-w-[140px]">
					<h4 class="font-semibold text-base relative max-sm:cursor-pointer">
						Customer Service
					</h4>

					<ul class="space-y-4 mt-6">
						{customerServiceList.map((item, index) => {
							return (
								<li key={index}>
									<a
										href="javascript:void(0)"
										class="hover:text-gray-800 text-white text-sm"
									>
										{item.title}
									</a>
								</li>
							);
						})}
					</ul>
				</div>

				<div class="max-lg:min-w-[140px]">
					<h4 class="font-semibold text-base relative max-sm:cursor-pointer">
						Additional
					</h4>

					<ul class="space-y-4 mt-6">
						{additionalList.map((item, index) => {
							return (
								<li key={index}>
									<a
										href="javascript:void(0)"
										class="hover:text-gray-800 text-white text-sm"
									>
										{item.title}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>

			<hr class="mt-10 mb-6 border-gray-300" />

			<div class="flex flex-wrap max-md:flex-col gap-4">
				<ul class="md:flex md:space-x-6 max-md:space-y-2">
					<li>
						<a
							href="javascript:void(0)"
							class="hover:text-gray-800 text-gray-600 text-sm"
						>
							Terms of Service
						</a>
					</li>
					<li>
						<a
							href="javascript:void(0)"
							class="hover:text-gray-800 text-gray-600 text-sm"
						>
							Privacy Policy
						</a>
					</li>
					<li>
						<a
							href="javascript:void(0)"
							class="hover:text-gray-800 text-gray-600 text-sm"
						>
							Security
						</a>
					</li>
				</ul>

				<p class="text-gray-600 text-sm md:ml-auto">
					© PreactShop. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
