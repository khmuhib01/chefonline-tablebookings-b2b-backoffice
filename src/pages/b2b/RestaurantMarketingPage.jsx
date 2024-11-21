import React from 'react';
import PageTitle from '../../components/PageTitle';

export default function RestaurantMarketingPage() {
	return (
		<>
			<PageTitle title="Table Booking | Restaurant Marketing" description="Search Result Page Description" />
			<section className="bg-[#F0F2F5] py-16">
				<div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">
					{/* Left Text Section */}
					<div className="lg:w-1/2 space-y-6">
						<h2 className="text-4xl font-bold">
							Maximise <br /> your online restaurant bookings <br />
							with ease! Connect.
						</h2>
						<p className=" text-lg">Boost your digital reach, secure more bookings, and watch your revenue soar..</p>
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
						<h2 className="text-3xl md:text-4xl font-bold">Tailored dining experience, just for you!</h2>
						<p className="text-lg">
							Make a lasting impression on diners by highlighting your restaurant’s uniqueness with a customised profile
							on TableBookings.
						</p>
						<ul className="list-disc list-inside space-y-2 text-lg">
							<li>Keep your restaurant’s profile fresh and up-to-date</li>
							<li>Add your phone number to make connecting easy</li>
							<li>Show guests exactly when you’re open and ready to serve</li>
							<li>Tempt customers with mouth-watering photos and menus</li>
							<li>Let diners know your price range upfront</li>
							<li>Tag your cuisine and pop up in more searches</li>
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
						<h2 className="text-3xl md:text-4xl font-bold">Seamless booking, right at your fingertips</h2>
						<p className="text-lg">
							Turn visits into bookings with our responsive widget, which is seamlessly integrated into your site and
							socials.
						</p>
						<ul className="list-disc list-inside space-y-2 text-lg">
							<li>Increase your reservations by up to 50%</li>
							<li>Get 24/7 live table availability</li>
							<li>Unlock your full booking potential</li>
							<li>Quick to integrate — no coding required</li>
							<li>Multi-language support included</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="bg-white py-16">
				<div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
					{/* Left Text Section */}
					<div className="lg:w-1/2 space-y-6 text-center lg:text-left">
						<h2 className="text-3xl md:text-4xl font-bold">Secure Your Google Maps—At No Cost!</h2>
						<p className="text-lg">Turn Google searches into bookings — the first place your diners look.</p>
						<ul className="list-disc list-inside space-y-2 text-lg">
							<li>Maximise bookings from your Google My Business page</li>
							<li>Unlock free Google Maps coverage</li>
							<li>Draw in more diners and drive up conversions</li>
							<li>Stay on top of reservations in real time</li>
							<li>Sync table availability effortlessly and automatically</li>
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
						<h2 className="text-3xl md:text-4xl font-bold">Thriving, fast-rising network.</h2>
						<p className="text-lg">
							Unlock new online opportunities with our growing user base and unbeatable partnership network.
						</p>
						<ul className="list-disc list-inside space-y-2 text-lg">
							<li>Teaming up with giants like Google, Instagram, and beyond for powerful results</li>
							<li>Millions of happy diners seated through our effortless online reservation service</li>
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
