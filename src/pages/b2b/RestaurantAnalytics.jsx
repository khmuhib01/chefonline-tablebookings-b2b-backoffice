import React from 'react';
import PageTitle from '../components/PageTitle';

export default function RestaurantAnalytics() {
	return (
		<>
			<PageTitle title="Table Booking | Restaurant Analytics" description="Search Result Page Description" />
			<section className="bg-[#F0F2F5] py-16">
				<div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">
					{/* Left Text Section */}
					<div className="lg:w-1/2 space-y-6">
						<h2 className="text-4xl font-bold">
							Connect. <br />
							Get more bookings. <br />
							Grow.
						</h2>
						<p className=" text-lg">
							Connect your existing reservation management tool to our ever-growing marketplace and put your restaurant
							in front of <span className="font-semibold text-button">400 million+ diners</span>.
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

			<section className="bg-white py-16">
				<div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
					{/* Left Text Section */}
					<div className="lg:w-1/2 space-y-6 text-center lg:text-left">
						<h2 className="text-3xl md:text-4xl font-bold">Personalised restaurant profile</h2>
						<p className="text-lg">
							Stand out to potential customers and show them what makes your restaurant unique with a personalised
							profile on TableBooking.
						</p>
						<ul className="list-disc list-inside space-y-2 text-lg">
							<li>Manage and update your restaurant information</li>
							<li>Add your contact number so people can reach you</li>
							<li>Let guests know when you’re open for business</li>
							<li>Entice guests with menus and photos</li>
							<li>Provide a price range</li>
							<li>Add cuisine tags and appear in search results</li>
						</ul>
					</div>

					{/* Right Image Section */}
					<div className="lg:w-1/2 flex justify-center">
						<img
							src="https://restaurants.quandoo.com/hubfs/Solution%20Page/Section%20Images/img.jpg"
							alt="restaurant profile"
							className="w-full max-w-[350px] h-auto object-contain"
						/>
					</div>
				</div>
			</section>

			<section className="bg-white py-16">
				<div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
					{/* Left Image/Widget Section */}
					<div className="lg:w-1/2 flex justify-center lg:justify-start">
						<img
							src="https://restaurants.quandoo.com/hubfs/Solution%20Page/Section%20Images/img.jpg"
							alt="Responsive booking widget"
							className="w-full max-w-[350px] h-auto object-contain m-auto"
						/>
					</div>

					{/* Right Text Section */}
					<div className="lg:w-1/2 space-y-6 text-center lg:text-left">
						<h2 className="text-3xl md:text-4xl font-bold">Responsive booking widget</h2>
						<p className="text-lg">
							Drive direct reservations and provide a seamless booking experience by embedding our responsive booking
							widget into your website and social media platforms.
						</p>
						<ul className="list-disc list-inside space-y-2 text-lg">
							<li>Increase reservations by up to 50%</li>
							<li>Provide 24/7 real-time table availability</li>
							<li>Maximise reservation opportunities</li>
							<li>Easy-to-embed — no coding skills required</li>
							<li>Multi-language capability</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="bg-white py-16">
				<div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
					{/* Left Text Section */}
					<div className="lg:w-1/2 space-y-6 text-center lg:text-left">
						<h2 className="text-3xl md:text-4xl font-bold">Personalised restaurant profile</h2>
						<p className="text-lg">
							Stand out to potential customers and show them what makes your restaurant unique with a personalised
							profile on Tablebookings.
						</p>
						<ul className="list-disc list-inside space-y-2 text-lg">
							<li>Manage and update your restaurant information</li>
							<li>Add your contact number so people can reach you</li>
							<li>Let guests know when you’re open for business</li>
							<li>Entice guests with menus and photos</li>
							<li>Provide a price range</li>
							<li>Add cuisine tags and appear in search results</li>
						</ul>
					</div>

					{/* Right Image Section */}
					<div className="lg:w-1/2 flex justify-center">
						<img
							src="https://restaurants.quandoo.com/hubfs/Solution%20Page/Section%20Images/img.jpg"
							alt="restaurant profile"
							className="w-full max-w-[350px] h-auto object-contain"
						/>
					</div>
				</div>
			</section>

			<section className="bg-white py-16">
				<div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
					{/* Left Image/Widget Section */}
					<div className="lg:w-1/2 flex justify-center lg:justify-start">
						<img
							src="https://restaurants.quandoo.com/hubfs/Solution%20Page/Section%20Images/img.jpg"
							alt="Responsive booking widget"
							className="w-full max-w-[350px] h-auto object-contain m-auto"
						/>
					</div>

					{/* Right Text Section */}
					<div className="lg:w-1/2 space-y-6 text-center lg:text-left">
						<h2 className="text-3xl md:text-4xl font-bold">Responsive booking widget</h2>
						<p className="text-lg">
							Drive direct reservations and provide a seamless booking experience by embedding our responsive booking
							widget into your website and social media platforms.
						</p>
						<ul className="list-disc list-inside space-y-2 text-lg">
							<li>Increase reservations by up to 50%</li>
							<li>Provide 24/7 real-time table availability</li>
							<li>Maximise reservation opportunities</li>
							<li>Easy-to-embed — no coding skills required</li>
							<li>Multi-language capability</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="bg-white py-16">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-10">Explore other solutions</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Card 1: Reservation Management */}
						<div className="space-y-4">
							<img
								src="https://f.hubspotusercontent30.net/hubfs/7294887/QFR%20-%20Solutions%20Page/Solutions%202%20-%20Simplify%20Res%20Management/solutions-2---c.jpg"
								alt="Reservation Management"
								className="w-full h-auto object-cover rounded-lg"
							/>
							<h3 className="text-xl font-semibold">Reservation management</h3>
						</div>

						{/* Card 2: Table Management */}
						<div className="space-y-4">
							<img
								src="https://f.hubspotusercontent30.net/hubfs/7294887/QFR%20-%20Solutions%20Page/Solutions%202%20-%20Simplify%20Res%20Management/solutions-2---c.jpg"
								alt="Table Management"
								className="w-full h-auto object-cover rounded-lg"
							/>
							<h3 className="text-xl font-semibold">Table management</h3>
						</div>

						{/* Card 3: Restaurant Reporting & Analytics */}
						<div className="space-y-4">
							<img
								src="https://f.hubspotusercontent30.net/hubfs/7294887/QFR%20-%20Solutions%20Page/Solutions%202%20-%20Simplify%20Res%20Management/solutions-2---c.jpg"
								alt="Restaurant Reporting and Analytics"
								className="w-full h-auto object-cover rounded-lg"
							/>
							<h3 className="text-xl font-semibold">Restaurant reporting & analytics</h3>
						</div>
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
