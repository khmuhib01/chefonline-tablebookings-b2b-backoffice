import React from 'react';
import PageTitle from '../../components/PageTitle';

export default function BlogPage() {
	const posts = [
		{
			image: 'https://restaurants.quandoo.com/hubfs/Header%20%282%29.png',
			time: '3 MIN READ',
			title: 'How to Overcome 6 Common Restaurant Reservation Challenges',
		},
		{
			image: 'https://restaurants.quandoo.com/hubfs/Header%20%282%29.png',
			time: '3 MIN READ',
			title: 'How to Create a Restaurant Menu That Sells',
		},
		{
			image: 'https://restaurants.quandoo.com/hubfs/Header%20%282%29.png',
			time: '3 MIN READ',
			title: '7 Restaurant Photography Tips to Increase Bookings',
		},
		{
			image: 'https://restaurants.quandoo.com/hubfs/Header%20%282%29.png',
			time: '3 MIN READ',
			title: 'Setting the stage: How to master restaurant ambience',
		},
		{
			image: 'https://restaurants.quandoo.com/hubfs/Header%20%282%29.png',
			time: '2 MIN READ',
			title: '6 benefits of Pro - the new and improved restaurant reservation system',
		},
		{
			image: 'https://restaurants.quandoo.com/hubfs/Header%20%282%29.png',
			time: '3 MIN READ',
			title: '7 Strategies to Reduce Restaurant No-Shows',
		},
		{
			image: 'https://restaurants.quandoo.com/hubfs/Header%20%282%29.png',
			time: '3 MIN READ',
			title: 'How To Design an Efficient Restaurant Floor Plan',
		},
		{
			image: 'https://restaurants.quandoo.com/hubfs/Header%20%282%29.png',
			time: '2 MIN READ',
			title: '4 Reasons Your Restaurant Needs an Online Booking Widget',
		},
	];
	return (
		<>
			<PageTitle title="Table Booking | Blog" description="Blog Page" />
			<section className="container mx-auto py-16">
				<div className="flex flex-col lg:flex-row gap-10">
					{/* Featured Article */}
					<div className="lg:w-2/3">
						<div className="relative">
							<img
								src="https://restaurants.quandoo.com/hubfs/Header%20%282%29.png"
								alt="Featured Article"
								className="w-full h-[300px] object-cover rounded-md"
							/>
						</div>
						<div className="mt-4">
							<p className="text-sm text-button">• 4 MIN READ</p>
							<h2 className="text-3xl font-bold mb-4">7 Smart Strategies to Maximise Restaurant Seating Capacity</h2>
							<button className="bg-button hover:bg-buttonHover text-white font-medium py-2 px-6 rounded-md">
								Read more
							</button>
						</div>
					</div>

					{/* Latest Posts */}
					<div className="lg:w-1/3">
						<h3 className="text-xl font-semibold mb-6">Latest posts</h3>
						<div className="grid grid-cols-1 gap-6">
							{/* Blog Post 1 */}
							<div className="flex gap-4">
								<img
									src="https://restaurants.quandoo.com/hubfs/Header%20%282%29.png"
									alt="Post 1"
									className="w-24 h-24 object-cover rounded-md"
								/>
								<div>
									<p className="text-sm text-button">• 3 MIN READ</p>
									<h4 className="text-lg font-medium">How to Overcome 6 Common Restaurant Reservation Challenges</h4>
								</div>
							</div>
							{/* Blog Post 2 */}
							<div className="flex gap-4">
								<img
									src="https://restaurants.quandoo.com/hubfs/Header%20%282%29.png"
									alt="Post 2"
									className="w-24 h-24 object-cover rounded-md"
								/>
								<div>
									<p className="text-sm text-button">• 3 MIN READ</p>
									<h4 className="text-lg font-medium">How to Create a Restaurant Menu That Sells</h4>
								</div>
							</div>
							{/* Blog Post 3 */}
							<div className="flex gap-4">
								<img
									src="https://restaurants.quandoo.com/hubfs/Header%20%282%29.png"
									alt="Post 3"
									className="w-24 h-24 object-cover rounded-md"
								/>
								<div>
									<p className="text-sm text-button">• 3 MIN READ</p>
									<h4 className="text-lg font-medium">7 Restaurant Photography Tips to Increase Bookings</h4>
								</div>
							</div>
							{/* Blog Post 4 */}
							<div className="flex gap-4">
								<img
									src="https://restaurants.quandoo.com/hubfs/Header%20%282%29.png"
									alt="Post 4"
									className="w-24 h-24 object-cover rounded-md"
								/>
								<div>
									<p className="text-sm text-button">• 3 MIN READ</p>
									<h4 className="text-lg font-medium">Setting the stage: How to master restaurant ambience</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="container mx-auto py-16">
				<h3 className="text-xl font-semibold mb-6">Latest posts</h3>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{posts.map((post, index) => (
						<div key={index} className="bg-white shadow-md rounded-md overflow-hidden">
							<img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
							<div className="p-4">
								<p className="text-sm text-button mb-2">• {post.time}</p>
								<h4 className="text-lg font-medium">{post.title}</h4>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
}
