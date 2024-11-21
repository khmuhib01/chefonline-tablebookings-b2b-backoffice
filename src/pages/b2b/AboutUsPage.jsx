import React, {useEffect} from 'react';
import PageTitle from '../../components/PageTitle';

const AboutUsPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
	}, []);

	return (
		<>
			<PageTitle title="Table Booking | About Us" description="About Us Page Description" />
			{/* Banner Section */}
			<div
				className="relative bg-no-repeat bg-cover bg-center h-[400px]"
				style={{backgroundImage: 'url(/images/about-banner.jpg)'}}
			>
				<div className="absolute inset-0 bg-black opacity-50"></div>
				<div className="container h-full flex flex-col justify-center items-center">
					<h1 className="text-white text-5xl font-bold relative z-10">About Us</h1>
					<p className="text-white text-xl mt-4 relative z-10">Learn more about our mission, vision, and values.</p>
				</div>
			</div>

			{/* About Us Content Section */}
			<div className="container mx-auto py-16">
				<h2 className="text-4xl font-bold text-center mb-10">Our Story</h2>
				<div className="max-w-4xl mx-auto text-center text-gray-600">
					<p className="mb-6">
						Our company was founded with a single mission: to provide the best possible experience for our customers. We
						believe in quality, integrity, and commitment to excellence. Over the years, we have grown into a respected
						leader in our industry, known for our innovative products and exceptional customer service.
					</p>
					<p className="mb-6">
						Our team is passionate about what we do, and we strive to make a positive impact on the communities we
						serve. We are proud of our journey so far, and we look forward to continuing to serve our customers with the
						same dedication and care that has defined our company from the beginning.
					</p>
					<p className="mb-6">
						Thank you for being a part of our story. We invite you to learn more about our values, our team, and our
						commitment to excellence.
					</p>
				</div>
			</div>

			{/* Team Section */}
			<div className="bg-gray-100 py-16">
				<div className="container mx-auto">
					<h2 className="text-4xl font-bold text-center mb-10">Meet the Team</h2>
					<div className="flex flex-wrap justify-center gap-8">
						{/* Example Team Member */}
						<div className="bg-white p-6 rounded-lg shadow-lg text-center w-64">
							<div className="mb-4">
								<div className="rounded-full w-32 h-32 mx-auto overflow-hidden">
									<img src="/images/sir.jpg" alt="Team Member" className="w-full h-full object-fill" />
								</div>
							</div>
							<h3 className="text-xl font-semibold mb-2">Mohammad Munim</h3>
							<p className="text-gray-600">CEO & Founder</p>
						</div>
						{/* Add more team members similarly */}
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutUsPage;
