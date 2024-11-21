import React from 'react';
import PageTitle from '../../components/PageTitle';

export default function TableManagementPage() {
	return (
		<>
			<PageTitle title="Table Management | Table Booking" description="Table Management Page Description" />
			<section className="bg-[#F0F2F5] py-16">
				<div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">
					{/* Left Text Section */}
					<div className="lg:w-1/2 space-y-6">
						<h2 className="text-4xl font-bold">
							Streamline <br />
							seating and keep the buzz alive with <br /> seamless table control.
						</h2>
						<p className=" text-lg">
							Elevate your restaurant game—maximise table turns, seat guests in record time, and watch your operations
							flow seamlessly.
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
						<h2 className="text-3xl md:text-4xl font-bold">Take control of your seating with ease.</h2>
						<p className="text-lg">
							Every seat counts! Maximise your dining space and speed up table turnovers for more profits.
						</p>
						<ul className="list-disc list-inside space-y-2 text-lg">
							<li>Set up seating areas: indoor, outdoor, bar, terrace, and more</li>
							<li>Add tables, define capacities</li>
							<li>Allocate tables to zones, fine-tune seating preferences</li>
							<li>Merge tables for large group bookings</li>
							<li>Exclude specific areas or tables from online bookings</li>
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
						<h2 className="text-3xl md:text-4xl font-bold">Take control of your restaurant’s seating flow.</h2>
						<p className="text-lg">
							Overbooked venues hurt both service and guest satisfaction. Manage diner flow with ease to optimise your
							service and guarantee a safe, stress-free dining experience.
						</p>
						<ul className="list-disc list-inside space-y-2 text-lg">
							<li>Take control of your booking schedule with flexible time slots.</li>
							<li>Manage rush hours easily by pausing and resuming reservations.</li>
							<li>Limit bookings on key dates to keep space for walk-ins.</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="bg-white py-16">
				<div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
					{/* Left Text Section */}
					<div className="lg:w-1/2 space-y-6 text-center lg:text-left">
						<h2 className="text-3xl md:text-4xl font-bold">Get a quick view of open seating</h2>
						<p className="text-lg">
							Stay on top of the day by tracking occupancy in real-time, keeping overbookings at bay.
						</p>
						<ul className="list-disc list-inside space-y-2 text-lg">
							<li>View your setup in floor plan, timeline, or reservation list mode.</li>
							<li>Detect gaps and stop bottlenecks in their tracks.</li>
							<li>Seamlessly drag and drop to manage your reservations.</li>
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
						<h2 className="text-3xl md:text-4xl font-bold">Beat the queue</h2>
						<p className="text-lg">
							Say goodbye to restless crowds—predict wait times accurately, streamline seating, and keep your guests
							happy and informed.
						</p>
						<ul className="list-disc list-inside space-y-2 text-lg">
							<li>Track every reservation status from Confirmed to Checked Out in real time.</li>
							<li>Add dining phases to see exactly where your guests are, from starters to payments.</li>
							<li>Easily manage table retention times to optimise your seating flow.</li>
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
