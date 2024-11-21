import React, {useEffect, useState} from 'react';
import AccordionItem from '../../components/AccordionItem';
import PageTitle from '../../components/PageTitle';

export default function SupportPage() {
	const [openIndex, setOpenIndex] = useState(0); // Initial state with the first accordion open

	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
	}, []);

	// Sample FAQ data
	const faqData = [
		{
			title: 'What is your return policy?',
			content:
				'You can return any item within 30 days of purchase as long as it is unused and in its original packaging.',
		},
		{
			title: 'Do you offer free shipping?',
			content: 'Yes, we offer free shipping for orders over €50.',
		},
		{
			title: 'How can I track my order?',
			content: 'Once your order has been shipped, you will receive an email with a tracking number.',
		},
		{
			title: 'Can I change my shipping address?',
			content: 'Yes, you can change your shipping address before the order is shipped by contacting customer support.',
		},
	];

	const handleToggle = (index) => {
		// If the clicked accordion is already open, close it. Otherwise, open it and close others.
		setOpenIndex(openIndex === index ? -1 : index);
	};
	return (
		<>
			<PageTitle title="Table Booking | Support" description="Frequently Asked Questions" />
			{/* Banner Section */}
			<div
				className="relative bg-no-repeat bg-cover bg-center h-[400px]"
				style={{backgroundImage: 'url(/images/faq-banner.jpg)'}}
			>
				<div className="absolute inset-0 bg-black opacity-50"></div>
				<div className="container h-full flex flex-col justify-center items-center">
					<h1 className="text-white text-5xl font-bold relative z-10 text-center">
						Need help? <br /> We’ve got you.
					</h1>
					<p className="text-white text-xl mt-4 relative z-10">
						Need help? We’ve got you. Find answers to the most commonly asked questions about Tablebookings for
						Restaurants.
					</p>
				</div>
			</div>

			{/* FAQ Section */}
			<section className="bg-[#F0F2F5] py-16">
				<div className="container mx-auto py-16">
					<h2 className="text-4xl font-bold text-center mb-10">Common Questions</h2>
					<div className="max-w-2xl mx-auto flex flex-col gap-5">
						{faqData.map((item, index) => (
							<AccordionItem
								key={index}
								title={item.title}
								isOpen={openIndex === index} // Keep the clicked accordion open, close others
								onToggle={() => handleToggle(index)}
								icon={<span>Q{index + 1}</span>} // Example Icon for FAQ
							>
								<p className="text-gray-600">{item.content}</p>
							</AccordionItem>
						))}
					</div>
				</div>
			</section>

			<section className="py-16">
				<div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
					{/* Text Section */}
					<div className="text-left lg:w-1/2">
						<h2 className="text-3xl font-bold mb-4">Existing partner in need of support?</h2>
						<p className="text-gray-700 mb-4">
							<strong>Our Help Centre is available to you 24/7</strong> – explore our guides and learn how to get the
							most out of Tablebookings for Restaurants.
						</p>
						<p className="text-gray-700 mb-4">
							For additional assistance, you can contact us via our Live chat. Please log in to get in touch.
						</p>
						<button className="bg-button hover:bg-buttonHover text-white px-6 py-3 rounded-lg mt-4">Log in</button>
					</div>

					{/* Image Section */}
					<div className="lg:w-1/2 flex justify-center">
						<img
							src="https://restaurants.quandoo.com/hubfs/QFR-%20Support%20Page/Quandoo-for-Restaurants-Help%20Center-EN.png" // Replace this with the actual path to your image
							alt="Help Centre"
							className="w-[400px] md:w-[500px] rounded-md"
						/>
					</div>
				</div>

				{/* Bottom link section */}
				<div className="text-center mt-8">
					<p className="text-gray-500">
						Need help? Learn how to access our Help Centre{' '}
						<a href="#" className="text-button underline">
							here
						</a>
						.
					</p>
				</div>
			</section>

			<section className="bg-[#D3DAE3] py-16">
				<div className="container mx-auto text-center">
					<h2 className="text-xl font-semibold mb-4">Don't see what you're looking for?</h2>
					<p className="text-gray-600 mb-8">Please contact us for any other questions you may have.</p>
					<div className="flex flex-col sm:flex-row justify-center gap-4">
						<button className="bg-[#1E2A56] text-white font-medium py-2 px-6 rounded-md">New partner</button>
						<button className="bg-[#0070D2] text-white font-medium py-2 px-6 rounded-md">Existing partner</button>
					</div>
				</div>
			</section>
		</>
	);
}
