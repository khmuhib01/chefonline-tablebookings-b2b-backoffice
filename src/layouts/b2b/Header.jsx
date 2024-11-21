import React, {useState, useRef, useEffect, useContext} from 'react';
import {RxCross2} from 'react-icons/rx'; // Close icon
import {Link, useNavigate, useLocation} from 'react-router-dom';
import {IoIosLogOut} from 'react-icons/io'; // Logout icon
import {FaAngleRight, FaAngleDown} from 'react-icons/fa6';
import {Menu} from '../../ui-share/Icon';

export default function Header() {
	const [sidebarMenu, setSidebarMenu] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown state
	const [loading, setLoading] = useState(false);
	const sidebarRef = useRef(null);
	const navigate = useNavigate();
	const location = useLocation();

	const handleSidebarMenu = () => {
		setSidebarMenu(!sidebarMenu);
	};

	const handleSidebarClose = () => {
		setSidebarMenu(false);
	};

	const handleDropdownToggle = () => {
		setDropdownOpen(!dropdownOpen);
	};

	const handleClickOutside = (event) => {
		if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
			setSidebarMenu(false);
		}
	};

	const handleLogout = async () => {
		setLoading(true);
		try {
			await logout();
			navigate('/restaurant-sign-in');
		} catch (error) {
			console.error('Error during logout:', error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (sidebarMenu) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [sidebarMenu]);

	// Utility function to determine if the current page is active
	const isActive = (path) => location.pathname === path;

	return (
		<header className="bg-white shadow-md py-4 fixed top-0 w-full z-50">
			<div className="container mx-auto flex justify-between items-center md:px-0 px-4">
				{/* Logo */}
				<div className="flex items-center">
					<Link to="/">
						<img src="/images/logo.png" alt="Logo" className="h-8" />
					</Link>
				</div>

				{/* Navigation for desktop */}
				<nav className="hidden lg:flex items-center gap-8 relative">
					{/* Dropdown for "Solutions" */}
					<div className="relative">
						<button
							onMouseEnter={() => setDropdownOpen(true)}
							onMouseLeave={() => setDropdownOpen(false)}
							className={`text-gray-700 hover:text-gray-900 flex items-center ${
								isActive('/restaurant-marketing') ||
								isActive('/reservation-management') ||
								isActive('/table-management')
									? 'font-bold'
									: ''
							}`}
						>
							Solutions
							<FaAngleDown className="ml-1" />
						</button>
						{dropdownOpen && (
							<div
								onMouseEnter={() => setDropdownOpen(true)}
								onMouseLeave={() => setDropdownOpen(false)}
								className="absolute top-8 left-0 bg-white shadow-lg rounded-lg py-2 w-56 z-10"
							>
								<Link
									to="/restaurant-marketing"
									className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${
										isActive('/restaurant-marketing') ? 'font-bold' : ''
									}`}
								>
									Restaurant Marketing
								</Link>
								<Link
									to="/reservation-management"
									className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${
										isActive('/reservation-management') ? 'font-bold' : ''
									}`}
								>
									Reservation Management
								</Link>
								<Link
									to="/table-management"
									className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${
										isActive('/table-management') ? 'font-bold' : ''
									}`}
								>
									Table Management
								</Link>
								<Link
									to="/table-management"
									className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${
										isActive('/table-management') ? 'font-bold' : ''
									}`}
								>
									Mobile App
								</Link>
								<Link
									to="/table-management"
									className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${
										isActive('/table-management') ? 'font-bold' : ''
									}`}
								>
									Widget
								</Link>
							</div>
						)}
					</div>

					<Link
						to="/integrations"
						className={`text-gray-700 hover:text-gray-900 ${isActive('/integrations') ? 'font-bold' : ''}`}
					>
						Integrations
					</Link>
					<Link
						to="/pricing"
						className={`text-gray-700 hover:text-gray-900 ${isActive('/pricing') ? 'font-bold' : ''}`}
					>
						Pricing
					</Link>
					<Link to="/blog" className={`text-gray-700 hover:text-gray-900 ${isActive('/blog') ? 'font-bold' : ''}`}>
						Blog
					</Link>
					{/* <Link
						to="/support"
						className={`text-gray-700 hover:text-gray-900 ${isActive('/support') ? 'font-bold' : ''}`}
					>
						Support
					</Link> */}
					<Link
						to="/business-registration"
						className={`text-gray-700 hover:text-gray-900 ${isActive('/support') ? 'font-bold' : ''}`}
					>
						Business Registration
					</Link>
				</nav>

				<div className="flex items-center gap-3">
					<div className="hidden lg:flex items-center gap-3">
						{/* <Link
							to="/sign-up"
							className="border border-button text-button px-4 py-2 rounded-md hover:bg-buttonHover hover:text-white"
						>
							Sign up
						</Link> */}
						<Link to="/restaurant-sign-in" className="bg-button text-white px-4 py-2 rounded-md hover:bg-buttonHover">
							Log in
						</Link>
					</div>

					<button className="lg:hidden text-gray-700" onClick={handleSidebarMenu}>
						<Menu size={28} />
					</button>
				</div>
			</div>

			{/* Sidebar Menu for Mobile */}
			<div
				ref={sidebarRef}
				className={`fixed top-0 left-0 w-[250px] h-full bg-white shadow-lg z-50 transform ${
					sidebarMenu ? 'translate-x-0' : '-translate-x-full'
				} transition-transform duration-300 ease-in-out`}
			>
				<div className="p-4">
					{/* Close Button */}
					<button onClick={handleSidebarClose} className="text-gray-700">
						<RxCross2 size={28} />
					</button>

					{/* Sidebar Links */}
					<nav className="flex flex-col mt-8 gap-4">
						<div className="relative">
							<button
								onClick={handleDropdownToggle}
								className="flex justify-between items-center text-gray-700 hover:text-blue-500"
							>
								Solutions <FaAngleRight />
							</button>
							{dropdownOpen && (
								<div className="ml-4 flex flex-col gap-2">
									<Link to="/restaurant-marketing" className="text-gray-700 hover:text-blue-500">
										Restaurant Marketing
									</Link>
									<Link to="/solutions/feature2" className="text-gray-700 hover:text-blue-500">
										Feature 2
									</Link>
									<Link to="/solutions/feature3" className="text-gray-700 hover:text-blue-500">
										Feature 3
									</Link>
								</div>
							)}
						</div>
						<Link to="/integrations" className="text-gray-700 hover:text-blue-500">
							Integrations
						</Link>
						<Link to="/pricing" className="text-gray-700 hover:text-blue-500">
							Plans & Pricing
						</Link>
						<Link to="/blog" className="text-gray-700 hover:text-blue-500">
							Blog
						</Link>
						<Link to="/support" className="text-gray-700 hover:text-blue-500">
							Support
						</Link>
					</nav>

					{/* Log in / Sign up for Mobile */}
					<div className="mt-8">
						{/* <Link
							to="/login"
							className="block border border-gray-700 text-gray-700 px-4 py-2 rounded-md mb-4 text-center"
						>
							Log in
						</Link> */}
						<Link
							to="https://www.backoffice.tablebookings.co.uk"
							target="_blank"
							className="block bg-button text-white px-4 py-2 rounded-md text-center"
						>
							Log in
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}
