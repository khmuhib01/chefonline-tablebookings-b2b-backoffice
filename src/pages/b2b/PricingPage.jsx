import React from 'react';
import {FaInfoCircle} from 'react-icons/fa';
import PageTitle from '../../components/PageTitle';

export default function PricingPage() {
	const features = [
		{
			image: 'https://restaurants.quandoo.com/hs-fs/hubfs/Pricing/1.png?width=243&height=148&name=1.png', // Replace with the actual image path
			title: 'Web-based app',
		},
		{
			image: 'https://restaurants.quandoo.com/hs-fs/hubfs/Pricing/1.png?width=243&height=148&name=1.png', // Replace with the actual image path
			title: 'Responsive interface',
		},
		{
			image: 'https://restaurants.quandoo.com/hs-fs/hubfs/Pricing/1.png?width=243&height=148&name=1.png', // Replace with the actual image path
			title: 'No hidden fees',
		},
	];
	return (
		<>
			<PageTitle title="Table Booking | Pricing" description="Pricing Page" />
			<section className="bg-white py-16">
				<div className="container mx-auto px-6 md:px-12 lg:px-24">
					<div className="flex flex-col gap-10">
						<div className="text-center">
							<h2 className="text-3xl font-bold text-gray-800">Simple, transparent pricing</h2>
							<p className="text-lg text-gray-600">Select a plan that’s right for your restaurant</p>
						</div>
						{/* Pricing Cards */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{/* Pro Plan */}
							<div className="bg-white rounded-lg shadow-md">
								<h3 className="text-xl font-bold text-white bg-red-400 py-3 rounded-t-lg text-center">Pro</h3>
								<div className="bg-gray-50 p-6 rounded-b-lg text-center">
									<p className="text-orange-500 font-semibold mb-2">NEW & IMPROVED</p>
									<p className="text-gray-700 mb-4">
										For new and small restaurants that want to grow their online presence and boost reach.
									</p>

									{/* Pricing Details */}
									<div className="grid grid-cols-1 gap-4 text-left text-gray-800 mb-6">
										<div className="flex justify-between">
											<span>Monthly Subscription</span>
											<span>£39</span>
										</div>
										<div className="flex justify-between items-center">
											<span>Setup</span>
											<span className="flex items-center">
												£249 <FaInfoCircle className="ml-1 text-gray-500" />
											</span>
										</div>
										<div className="flex justify-between items-center">
											<span>Tablebookings Network Covers</span>
											<span className="flex items-center">
												£3.90 <FaInfoCircle className="ml-1 text-gray-500" />
											</span>
										</div>
										<div className="flex justify-between items-center">
											<span>Google Network Covers</span>
											<span className="flex items-center">
												FREE <FaInfoCircle className="ml-1 text-gray-500" />
											</span>
										</div>
									</div>

									{/* Button */}
									<button className="bg-button text-white px-6 py-3 rounded-lg hover:bg-buttonHover">Learn more</button>
								</div>
							</div>
							<div className="bg-white rounded-lg shadow-md">
								<h3 className="text-xl font-bold text-white bg-red-600 py-3 rounded-t-lg text-center">Premium</h3>
								<div className="bg-gray-50 p-6 rounded-b-lg text-center">
									<p className="text-orange-500 font-semibold mb-2">NEW & IMPROVED</p>
									<p className="text-gray-700 mb-4">
										For new and small restaurants that want to grow their online presence and boost reach.
									</p>

									<div className="grid grid-cols-1 gap-4 text-left text-gray-800 mb-6">
										<div className="flex justify-between">
											<span>Monthly Subscription</span>
											<span>£39</span>
										</div>
										<div className="flex justify-between items-center">
											<span>Setup</span>
											<span className="flex items-center">
												£249 <FaInfoCircle className="ml-1 text-gray-500" />
											</span>
										</div>
										<div className="flex justify-between items-center">
											<span>Tablebookings Network Covers</span>
											<span className="flex items-center">
												£3.90 <FaInfoCircle className="ml-1 text-gray-500" />
											</span>
										</div>
										<div className="flex justify-between items-center">
											<span>Google Network Covers</span>
											<span className="flex items-center">
												FREE <FaInfoCircle className="ml-1 text-gray-500" />
											</span>
										</div>
									</div>

									{/* Button */}
									<button className="bg-button text-white px-6 py-3 rounded-lg hover:bg-buttonHover">Learn more</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-white py-16">
				<div className="container mx-auto py-16">
					<div className="flex flex-col lg:flex-row justify-around items-center gap-10">
						{features.map((feature, index) => (
							<div key={index} className="text-center">
								<img src={feature.image} alt={feature.title} className="mx-auto w-24 h-24 mb-4 object-contain" />
								<h3 className="text-lg font-semibold text-gray-700">{feature.title}</h3>
							</div>
						))}
					</div>
				</div>
			</section>
			<section className="bg-blue-900 py-16">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-bold text-white mb-8">Start using Tablebookings for Restaurants today</h2>
					<button className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600">
						Contact sales
					</button>
				</div>
			</section>
		</>
	);
}
