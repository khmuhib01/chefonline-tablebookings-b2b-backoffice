import React, {useEffect} from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {FaInfoCircle} from 'react-icons/fa';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';
import PageTitle from '../../components/PageTitle';

const HomePage = () => {
	// useEffect(() => {
	// 	window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
	// }, []);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
		],
	};

	return (
		<>
			{/* Meta Information */}
			<PageTitle title="Book a Table | Table Booking" description="Home Page Description" />

			{/* Booking Section */}
			<section className="bg-[#F0F2F5] py-16">
				<div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row justify-between items-center">
					{/* Left Side - Text Section */}
					<div className="lg:w-1/2 text-left space-y-4">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-800">
							Link Up. <br />
							Fill Your Tables. <br />
							Thrive.
						</h2>
						<p className="text-lg text-gray-600">
							Sync your booking tool with our expanding marketplace and showcase your restaurant to our countrywide
							audience.
						</p>
						<Link to="/about-us" className="bg-button text-white px-6 py-3 rounded-lg hover:bg-buttonHover table">
							Learn more
						</Link>
					</div>

					{/* Right Side - Image Section */}
					<div className="lg:w-1/2 relative mt-12 lg:mt-0">
						{/* Central Image */}
						<div className="relative mx-auto rounded-full flex items-center justify-center">
							<img
								src="https://7294887.fs1.hubspotusercontent-na1.net/hubfs/7294887/QFR%20-%20Integrations/EN-Desktop-Integrations%E2%80%93Quandoo-for-Restaurantsoo-for-Restaurants.png" // replace with your central image
								alt="Marketplace"
								className="w-full"
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-white py-24">
				<div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between">
					{/* Left Side - Video Embed */}
					<div className="lg:w-1/2 w-full mb-8 lg:mb-0">
						<div className="relative h-0 overflow-hidden max-w-full" style={{paddingBottom: '56.25%'}}>
							<iframe
								className="absolute top-0 left-0 w-full h-full"
								src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
								title="Why Tablebookings for Restaurants?"
							></iframe>
						</div>
					</div>

					{/* Right Side - Text Content */}
					<div className="lg:w-1/2 w-full lg:pl-12">
						<h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose TableBookings for Your Restaurant?</h2>
						<p className="text-lg text-gray-600 mb-4">
							Managing a restaurant is tough, but we make it easier. With TableBookings, you’ll streamline your
							reservations, enhance your online visibility, and stay in control.
						</p>
					</div>
				</div>
			</section>

			<section className="bg-[#F0F2F5] py-24">
				<div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
					{/* Heading */}
					<h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10">
						As one of the UK’s fastest-growing reservation platforms, we're dedicated to fueling your restaurant’s
						growth with the same passion you have.
					</h2>

					{/* Stat Cards */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Stat 1 */}
						<div className="flex flex-col items-center">
							<img
								src="https://restaurants.quandoo.com/hubfs/Home%20Page/features/feature-1.svg" // Replace with your first icon path
								alt="Icon 1"
								className="w-16 h-16 mb-4"
							/>
							<p className="text-lg font-bold text-gray-800">
								Present in <span className="text-button">11 countries</span>
							</p>
							<p className="text-gray-600">across Europe and APAC</p>
						</div>

						{/* Stat 2 */}
						<div className="flex flex-col items-center">
							<img
								src="https://restaurants.quandoo.com/hubfs/Home%20Page/features/feature-1.svg" // Replace with your second icon path
								alt="Icon 2"
								className="w-16 h-16 mb-4"
							/>
							<p className="text-lg font-bold text-gray-800">
								Powers <span className="text-button">16,000+</span> restaurants
							</p>
							<p className="text-gray-600">to become bookable online</p>
						</div>

						{/* Stat 3 */}
						<div className="flex flex-col items-center">
							<img
								src="https://restaurants.quandoo.com/hubfs/Home%20Page/features/feature-1.svg" // Replace with your third icon path
								alt="Icon 3"
								className="w-16 h-16 mb-4"
							/>
							<p className="text-lg font-bold text-gray-800">
								Seated <span className="text-button">400 million</span> diners
							</p>
							<p className="text-gray-600">via online reservations</p>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-white py-24">
				<div className="container mx-auto px-6 md:px-12 lg:px-24">
					{/* Heading */}
					<h2 className="text-center text-3xl font-bold text-gray-800 mb-12">
						Tailored plans that evolve as your restaurant grows
					</h2>

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
								<Link
									to="/pricing"
									className="bg-button text-white px-6 py-3 rounded-lg hover:bg-buttonHover m-auto table"
								>
									Learn more
								</Link>
							</div>
						</div>
						<div className="bg-white rounded-lg shadow-md">
							<h3 className="text-xl font-bold text-white bg-red-600 py-3 rounded-t-lg text-center">Premium</h3>
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
								<Link
									to="/pricing"
									className="bg-button text-white px-6 py-3 rounded-lg hover:bg-buttonHover table m-auto"
								>
									Learn more
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-[#F0F2F5] py-24">
				<div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
					<h2 className="text-3xl font-bold text-gray-800 mb-12">See what restaurants are saying about us!</h2>
					<Slider {...settings}>
						<div className="px-4">
							<div className="bg-white p-8 rounded shadow-lg">
								<div className="flex items-center mb-4">
									<img
										src="https://restaurants.quandoo.com/hubfs/QFR%20-%20Homepage/Testimonials/UK_stonegate-pub.jpeg"
										alt="Logo"
										className="h-12 w-12 object-contain mr-4 rounded-full"
									/>
									<h3 className="font-bold text-lg text-gray-800">Massimo Fraioli, Owner</h3>
								</div>
								<p className="text-lg text-gray-600 italic">
									"Tablebookings has maximised our table turnover and freed management time, helping us focus on running
									the business."
								</p>
								<p className="text-sm text-gray-500 mt-4">Giardini di Sorrento, UK</p>
							</div>
						</div>
						<div className="px-4">
							<div className="bg-white p-8 rounded shadow-lg">
								<div className="flex items-center mb-4">
									<img
										src="https://restaurants.quandoo.com/hubfs/QFR%20-%20Homepage/Testimonials/UK_stonegate-pub.jpeg"
										alt="Logo"
										className="h-12 w-12 object-contain mr-4 rounded-full"
									/>
									<h3 className="font-bold text-lg text-gray-800">Sophie Elkington, National Account Manager</h3>
								</div>
								<p className="text-lg text-gray-600 italic">
									"The best part about TableBooking is the quality of bookings that we receive. I would recommend to
									anyone looking to increase sales."
								</p>
								<p className="text-sm text-gray-500 mt-4">Stonegate Pub Company, UK</p>
							</div>
						</div>
					</Slider>
				</div>
			</section>

			<section className="bg-white py-24">
				<div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
					<h2 className="text-3xl font-bold text-gray-800 mb-12">
						Top Practices and Tips for Running a Successful Restaurant
					</h2>
					<div className="flex flex-col lg:flex-row justify-center items-stretch lg:space-x-8 space-y-8 lg:space-y-0">
						{/* Article 1 */}
						<div className="max-w-sm flex flex-col rounded overflow-hidden shadow-lg bg-white">
							<img
								className="w-full"
								src="https://restaurants.quandoo.com/hubfs/Header%20%282%29.png"
								alt="Seating Capacity"
							/>
							<div className="px-6 py-4 flex-grow">
								<h3 className="font-bold text-xl mb-2">
									{'7 Smart Strategies to Maximise Restaurant Seating Capacity'.length > 50
										? '7 Smart Strategies to Maximise Restaurant Seating Capacity'.substring(0, 50) + '...'
										: '7 Smart Strategies to Maximise Restaurant Seating Capacity'}
								</h3>
							</div>
						</div>

						{/* Article 2 */}
						<div className="max-w-sm flex flex-col rounded overflow-hidden shadow-lg bg-white">
							<img
								className="w-full"
								src="https://restaurants.quandoo.com/hubfs/Header%20%282%29.png"
								alt="Reservation Challenges"
							/>
							<div className="px-6 py-4 flex-grow">
								<h3 className="font-bold text-xl mb-2">
									{'How to Overcome 6 Common Restaurant Reservation Challenges'.length > 50
										? 'How to Overcome 6 Common Restaurant Reservation Challenges'.substring(0, 50) + '...'
										: 'How to Overcome 6 Common Restaurant Reservation Challenges'}
								</h3>
							</div>
						</div>

						{/* Article 3 */}
						<div className="max-w-sm flex flex-col rounded overflow-hidden shadow-lg bg-white">
							<img
								className="w-full"
								src="https://restaurants.quandoo.com/hubfs/Header%20%282%29.png"
								alt="Menu Creation"
							/>
							<div className="px-6 py-4 flex-grow">
								<h3 className="font-bold text-xl mb-2">
									{'How to Create a Restaurant Menu That Sells'.length > 50
										? 'How to Create a Restaurant Menu That Sells'.substring(0, 50) + '...'
										: 'How to Create a Restaurant Menu That Sells'}
								</h3>
							</div>
						</div>
					</div>

					{/* <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 space-y-8 lg:space-y-0">
						<div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
							<img
								className="w-full"
								src="https://restaurants.quandoo.com/hubfs/Header%20%282%29.png"
								alt="Seating Capacity"
							/>
							<div className="px-6 py-4">
								<h3 className="font-bold text-xl mb-2">7 Smart Strategies to Maximise Restaurant Seating Capacity</h3>
							</div>
						</div>
						<div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
							<img
								className="w-full"
								src="https://restaurants.quandoo.com/hubfs/Header%20%282%29.png"
								alt="Reservation Challenges"
							/>
							<div className="px-6 py-4">
								<h3 className="font-bold text-xl mb-2">How to Overcome 6 Common Restaurant Reservation Challenges</h3>
							</div>
						</div>
						<div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
							<img
								className="w-full"
								src="https://restaurants.quandoo.com/hubfs/Header%20%282%29.png"
								alt="Menu Creation"
							/>
							<div className="px-6 py-4">
								<h3 className="font-bold text-xl mb-2">How to Create a Restaurant Menu That Sells</h3>
							</div>
						</div>
					</div> */}
					<Link
						to="/blog"
						className="mt-12 bg-button text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-buttonHover table m-auto"
					>
						Explore our blog
					</Link>
				</div>
			</section>

			<section className="bg-blue-900 py-16">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-bold text-white mb-8">Start using Tablebookings for Restaurants today</h2>
					<Link
						to="/contact"
						className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 table m-auto"
					>
						Contact sales
					</Link>
				</div>
			</section>
		</>
	);
};

export default HomePage;
