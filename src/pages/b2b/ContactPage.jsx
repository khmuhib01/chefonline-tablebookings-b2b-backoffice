import React, {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import Spinner from '../../ui-share/Spinner';
import PageTitle from '../../components/PageTitle';
import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactPage() {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);
	const [recaptchaToken, setRecaptchaToken] = useState('');
	const [errors, setErrors] = useState({});

	// Ref for reCAPTCHA
	const recaptchaRef = useRef();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		// Mock API call to submit contact form
		setTimeout(() => {
			setLoading(false);
			alert('Your message has been sent successfully!');
			setEmail('');
			setName('');
			setMessage('');
		}, 2000);
	};

	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
	}, []);

	return (
		<>
			<PageTitle title="Table Booking | Contact Us" description="Get in touch with us" />
			<div className="bg-[#F7F8FA] py-10">
				<div className="container px-2">
					<div className="flex flex-col gap-16 w-full">
						<div className="flex flex-col gap-5">
							<h1 className="text-center text-2xl text-titleText font-bold">We'd love to hear from you</h1>
							<div className="max-w-[600px] mx-auto rounded-md w-full">
								<div className="flex flex-col gap-5">
									<div className="bg-white p-8 rounded-lg shadow-lg w-full border">
										<div className="mb-4">
											<label htmlFor="name" className="block text-gray-700 font-bold mb-2">
												Your Name <span className="text-red-500">*</span>
											</label>
											<input
												type="text"
												id="name"
												className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:shadow"
												placeholder="eg. John Smith"
												value={name}
												onChange={(e) => setName(e.target.value)}
												required
											/>
										</div>
										<div className="mb-4">
											<label htmlFor="email" className="block text-gray-700 font-bold mb-2">
												Your Email <span className="text-red-500">*</span>
											</label>
											<input
												type="email"
												id="email"
												className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:shadow"
												placeholder="eg. user@example.com"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												required
											/>
										</div>
										<div className="mb-4">
											<label htmlFor="message" className="block text-gray-700 font-bold mb-2">
												Your Message <span className="text-red-500">*</span>
											</label>
											<textarea
												id="message"
												className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:shadow"
												placeholder="Write your message here..."
												value={message}
												onChange={(e) => setMessage(e.target.value)}
												required
												rows="5"
											></textarea>
										</div>

										<div className="col-span-2 mb-4">
											<ReCAPTCHA
												ref={recaptchaRef}
												sitekey="6LdqgH0qAAAAAH_U11rEQWl73Rm1f3clwQm0RvrT"
												onChange={setRecaptchaToken}
											/>
											{errors.recaptcha && <p className="text-red-500 text-sm">{errors.recaptcha}</p>}
										</div>
										<div className="text-center mt-4">
											<button
												type="submit"
												className="bg-button hover:bg-buttonHover text-white font-bold py-2 px-4 rounded flex items-center gap-x-2 m-auto"
												onClick={handleSubmit}
												disabled={loading}
											>
												Submit
												{loading && <Spinner />}
											</button>
										</div>
										<div className="">
											<p className="text-center text-gray-500 mt-4">
												Looking for help?{' '}
												<Link to={'/faq'} className="text-button font-bold">
													Visit our FAQ
												</Link>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
