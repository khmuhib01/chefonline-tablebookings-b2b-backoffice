import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import PageTitle from '../../components/PageTitle';

export default function IntegrationsPage() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2, // Show two columns
		slidesToScroll: 1,
		arrows: true,
		responsive: [
			{
				breakpoint: 1024, // Below this width, 1 slide will show
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	const partners = [
		{
			name: 'SevenRooms',
			logo: 'https://restaurants.quandoo.com/hubfs/2024%20Integration%20Campaign/colour%20logos/weeloylogo%201.png', // Replace with actual image path
		},
		{
			name: 'Zonal',
			logo: 'https://restaurants.quandoo.com/hubfs/2024%20Integration%20Campaign/colour%20logos/weeloylogo%201.png', // Replace with actual image path
		},
		{
			name: 'Collins',
			logo: 'https://restaurants.quandoo.com/hubfs/2024%20Integration%20Campaign/colour%20logos/weeloylogo%201.png', // Replace with actual image path
		},
		{
			name: 'Weeploy',
			logo: 'https://restaurants.quandoo.com/hubfs/2024%20Integration%20Campaign/colour%20logos/weeloylogo%201.png', // Replace with actual image path
		},
		{
			name: 'Mozrest',
			logo: 'https://restaurants.quandoo.com/hubfs/2024%20Integration%20Campaign/colour%20logos/weeloylogo%201.png', // Replace with actual image path
		},
	];

	return (
		<>
			<PageTitle title="Table Booking | Integrations" description="Integrations Page Description" />
			{/* First Section */}
			<section className="bg-[#F0F2F5] py-16">
				<div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">
					{/* Left Text Section */}
					<div className="lg:w-1/2 space-y-6">
						<h2 className="text-4xl font-bold">
							Engage. <br />
							Boost your bookings. <br />
							Watch your business thrive.
						</h2>
						<p className=" text-lg">
							Join our growing marketplace, link your reservation system, and tap into a hungry audience of{' '}
							<span className="font-semibold text-button">400 million+ diners!</span>.
						</p>
						<div className="space-x-4">
							<button className="text-button hover:text-white font-medium py-3 px-6 rounded-md border-button border hover:bg-button">
								View plans
							</button>
							<button className="bg-button hover:bg-buttonHover text-white font-medium py-3 px-6 rounded-md">
								Sign up now
							</button>
						</div>
					</div>

					{/* Right Image/Illustration Section */}
					<div className="lg:w-1/2">
						<div className="relative">
							<img
								src="https://7294887.fs1.hubspotusercontent-na1.net/hubfs/7294887/QFR%20-%20Integrations/EN%20-%20Quandoo%20Marketplace.png"
								alt="Reservation Tool"
								className="w-full h-auto object-contain"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Two-column Slider Section */}
			<section className="py-16 bg-white">
				<div className="container mx-auto text-center">
					<h2 className="text-2xl font-semibold mb-10">Why bother with integration?</h2>
					<Slider {...settings}>
						{/* Slide 1 */}
						<div className="px-4">
							{' '}
							{/* Added padding between slides */}
							<div className="bg-gray-100 rounded-lg p-8 flex items-center gap-6 max-w-3xl">
								<img
									src="https://restaurants.quandoo.com/hs-fs/hubfs/Pricing/1.png?width=243&height=148&name=1.png"
									alt="Automatic calendar sync"
									className="w-28 h-28 object-contain"
								/>
								<div className="text-left">
									<h3 className="text-xl font-semibold mb-2">See the data unfold live</h3>
									<p className="text-gray-600">
										Stay ahead with instant data sync! Guest and stock details align automatically, offering you sharp
										insights into trends and customer desires.
									</p>
								</div>
							</div>
						</div>

						{/* Slide 2 */}
						<div className="px-4">
							{' '}
							{/* Added padding between slides */}
							<div className="bg-gray-100 rounded-lg p-8 flex items-center gap-6 max-w-3xl">
								<img
									src="https://restaurants.quandoo.com/hs-fs/hubfs/Pricing/1.png?width=243&height=148&name=1.png"
									alt="Real-time insights"
									className="w-28 h-28 object-contain"
								/>
								<div className="text-left">
									<h3 className="text-xl font-semibold mb-2">Reach more diners, fill every seat</h3>
									<p className="text-gray-600">
										Supercharge your restaurant’s online visibility and watch bookings soar with TableBookings! Get
										listed, draw in diners, and keep those tables packed for unstoppable growth.
									</p>
								</div>
							</div>
						</div>

						{/* Slide 3 */}
						<div className="px-4">
							{' '}
							{/* Added padding between slides */}
							<div className="bg-gray-100 rounded-lg p-8 flex items-center gap-6 max-w-3xl">
								<img
									src="https://restaurants.quandoo.com/hs-fs/hubfs/Pricing/1.png?width=243&height=148&name=1.png"
									alt="Custom integrations"
									className="w-28 h-28 object-contain"
								/>
								<div className="text-left">
									<h3 className="text-xl font-semibold mb-2">Instantly connected</h3>
									<p className="text-gray-600">
										Sync your reservation tool in no time, with a hassle-free setup, smooth transitions, and direct
										access to our marketplace.
									</p>
								</div>
							</div>
						</div>

						{/* Slide 4 */}
						<div className="px-4">
							{' '}
							{/* Added padding between slides */}
							<div className="bg-gray-100 rounded-lg p-8 flex items-center gap-6 max-w-3xl">
								<img
									src="https://restaurants.quandoo.com/hs-fs/hubfs/Pricing/1.png?width=243&height=148&name=1.png"
									alt="Reporting"
									className="w-28 h-28 object-contain"
								/>
								<div className="text-left">
									<h3 className="text-xl font-semibold mb-2">Seamless calendar syncing, always</h3>
									<p className="text-gray-600">
										Say goodbye to double bookings and manual entries—marketplace bookings integrate directly with your
										reservation tool.
									</p>
								</div>
							</div>
						</div>
					</Slider>
				</div>
			</section>
			<section className="py-16 bg-[#F0F2F5]">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold mb-4"> Discover Our Top Integration Allies</h2>
					<p className="text-gray-600 mb-10">
						Experience the perfect blend—amplify your bookings with our marketplace and effortlessly manage them through
						your preferred reservation tool!
					</p>
					<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
						{partners.map((partner, index) => (
							<div key={index} className="flex justify-center">
								<img src={partner.logo} alt={partner.name} className="w-36 h-auto object-contain" />
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-16 bg-white">
				<div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
					{/* Left Image Section */}
					<div className="lg:w-1/2">
						<img
							src="https://7294887.fs1.hubspotusercontent-na1.net/hubfs/7294887/QFR-%20Support%20Page/staffdevice_support_desktop.jpg" // Replace with your actual image path
							alt="Collaboration"
							className="w-full h-auto object-contain block float-right"
						/>
					</div>

					{/* Right Text Section */}
					<div className="lg:w-1/2">
						<h2 className="text-3xl font-bold mb-4">Want to collaborate as an integration partner?</h2>
						<p className="text-lg text-gray-700 mb-6">
							Are you a reservation software provider looking to team up with us? Let’s join forces to boost your
							restaurant partners’ visibility and get more bookings from the Tablebookings marketplace.
						</p>
						<button className="bg-button hover:bg-buttonHover text-white font-medium py-3 px-6 rounded-md">
							Request integration
						</button>
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
