import React from 'react';
import PageTitle from '../../components/PageTitle';

export default function ReservationManagementPage() {
	return (
		<>
			<PageTitle
				title="Reservation Management | Get more bookings. Grow."
				description="Search Result Page Description"
			/>
			<section className="bg-[#F0F2F5] py-16">
				<div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">
					{/* Left Text Section */}
					<div className="lg:w-1/2 space-y-6">
						<h2 className="text-4xl font-bold">
							Streamline <br /> your reservations with <br />
							ease
						</h2>
						<p className=" text-lg">
							Seamlessly handle, optimise, and grow your restaurant reservations — wherever you are.
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
						<h2 className="text-3xl md:text-4xl font-bold">Take bookings 24/7 without a hitch</h2>
						<p className="text-lg">
							Say goodbye to missed reservations! TableBookings lets guests book anytime, driving more reservations even
							after hours.
						</p>
						<ul className="list-disc list-inside space-y-2 text-lg">
							<li>Secure reservations from TableBookings, your site, and social media effortlessly.</li>
							<li>Automate your booking flow.</li>
							<li>Enable round-the-clock real-time bookings.</li>
							<li>Get instant notifications for every new, updated, or cancelled booking.</li>
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
						<h2 className="text-3xl md:text-4xl font-bold">One list to effortlessly manage all your bookings</h2>
						<p className="text-lg">
							No more scattered spreadsheets! Take control of your bookings with one clear view, making it easier to
							plan and manage your reservations.
						</p>
						<ul className="list-disc list-inside space-y-2 text-lg">
							<li>Add walk-ins and phone bookings to dodge overbooking headaches.</li>
							<li>Check guests in, track no-shows, and fine-tune table arrangements in seconds.</li>
							<li>Easily tweak, add, or remove reservations to keep your restaurant at full occupancy.</li>
							<li>Manage bookings from anywhere, on any device.</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="bg-white py-16">
				<div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
					{/* Left Text Section */}
					<div className="lg:w-1/2 space-y-6 text-center lg:text-left">
						<h2 className="text-3xl md:text-4xl font-bold">Record guest preferences and essential notes.</h2>
						<p className="text-lg">
							Whether it's a special occasion, food allergies, or dietary preferences—cater to every guest's needs and
							deliver a truly personalised experience.
						</p>
						<ul className="list-disc list-inside space-y-2 text-lg">
							<li>Check guest preferences in seconds</li>
							<li>Record reservation notes and personal touches.</li>
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
						<h2 className="text-3xl md:text-4xl font-bold">Keep guests up to date, always</h2>
						<p className="text-lg">
							Boost loyalty, cut down on no-shows, and save time with smart, automated messages that keep your guests
							informed.
						</p>
						<ul className="list-disc list-inside space-y-2 text-lg">
							<li>Never miss a booking with automatic email reminders and confirmations.</li>
							<li>Craft personalised emails that reflect your brand’s identity.</li>
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
