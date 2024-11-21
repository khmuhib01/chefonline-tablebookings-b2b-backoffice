import React from 'react';
import {Routes, Route} from 'react-router-dom';

// Layouts
import BackendLayout from './layouts/backend/BackendLayout';
import FrontendHomeLayout from './layouts/b2b/FrontendHomeLayout';
import AuthLayout from './layouts/auth/AuthLayout';

// Pages
import PageNotFound from './pages/PageNotFound';
import Dashboard from './pages/backend/Dashboard/Dashboard';

// Backend Pages
import ReservationPage from './pages/backend/reservation/ReservationPage';
import CapacityPage from './pages/backend/capacity/CapacityPage';
import AvailabilityPage from './pages/backend/availability/AvailabilityPage';
import RestaurantInfo from './pages/backend/restaurant/RestaurantList';
import RestaurantCreate from './pages/backend/restaurant/RestaurantCreate';
import RestaurantEdit from './pages/backend/restaurant/RestaurantEdit';
import RestaurantView from './pages/backend/restaurant/RestaurantView';
import MenuCreate from './pages/backend/restaurant/MenuCreate';
import GalleryCreate from './pages/backend/restaurant/GalleryCreate';
import RestaurantTag from './pages/backend/restaurant/RestaurantTag';
import ReviewManage from './pages/backend/review/ReviewManage';
import RestaurantUserCreate from './pages/backend/user/RestaurantUserCreate';

// Auth Pages
import RestaurantSignIn from './pages/backend/RestaurantSignIn';
import RestaurantSignUp from './pages/backend/RestaurantSignUp';

// Route Guards
import RestaurantProtectedRoutes from './utils/RestaurantProtectedRoutes';
import HomePage from './pages/b2b/HomePage';
import FaqPage from './pages/b2b/FaqPage';
import PrivacyPolicyPage from './pages/b2b/PrivacyPolicyPage';
import TermsAndConditionsPage from './pages/b2b/TermsAndConditionsPage';
import ContactPage from './pages/b2b/ContactPage';
import AboutUsPage from './pages/b2b/AboutUsPage';
import BusinessRegistration from './pages/b2b/BusinessRegistration';
import RestaurantMarketingPage from './pages/b2b/RestaurantMarketingPage';
import ReservationManagementPage from './pages/b2b/ReservationManagementPage';
import TableManagementPage from './pages/b2b/TableManagementPage';
import IntegrationsPage from './pages/b2b/IntegrationsPage';
import PricingPage from './pages/b2b/PricingPage';
import BlogPage from './pages/b2b/BlogPage';
import SupportPage from './pages/b2b/SupportPage';
import UnauthorisedPage from './pages/backend/UnauthorisedPage';

const AppRoutes = () => (
	<Routes>
		{/* Frontend Layout */}
		<Route path="/*" element={<FrontendHomeLayout />}>
			<Route index element={<HomePage />} />
			<Route path="faq" element={<FaqPage />} />
			<Route path="privacy-policy" element={<PrivacyPolicyPage />} />
			<Route path="terms-and-conditions" element={<TermsAndConditionsPage />} />
			<Route path="business-registration" element={<BusinessRegistration />} />
			<Route path="contact" element={<ContactPage />} />
			<Route path="about-us" element={<AboutUsPage />} />
			{/* <Route path="sign-up" element={<SignUpPage />} />
			<Route path="sign-in" element={<SignInPage />} /> */}

			{/* B2B routes */}
			<Route path="restaurant-marketing" element={<RestaurantMarketingPage />} />
			<Route path="reservation-management" element={<ReservationManagementPage />} />
			<Route path="table-management" element={<TableManagementPage />} />
			<Route path="restaurant-analytics" element={<TableManagementPage />} />
			<Route path="integrations" element={<IntegrationsPage />} />
			<Route path="pricing" element={<PricingPage />} />
			<Route path="blog" element={<BlogPage />} />
			<Route path="support" element={<SupportPage />} />
		</Route>
		{/* Auth Layout */}
		<Route path="/restaurant-sign-in" element={<RestaurantSignIn />} />
		<Route path="/restaurant-sign-up" element={<RestaurantSignUp />} />
		{/* Protected Backend Layout */}
		<Route
			path="/dashboard/*"
			element={
				<RestaurantProtectedRoutes redirectTo="/restaurant-sign-in">
					<BackendLayout />
				</RestaurantProtectedRoutes>
			}
		>
			<Route index element={<Dashboard />} />
			<Route path="capacity/:id" element={<CapacityPage />} />
			<Route path="reservation/:id" element={<ReservationPage />} />
			<Route path="availability/:id" element={<AvailabilityPage />} />
			<Route path="restaurant-info" element={<RestaurantInfo />} />
			<Route path="create-restaurant" element={<RestaurantCreate />} />
			<Route path="edit-restaurant/:id" element={<RestaurantEdit />} />
			<Route path="restaurant-view/:id" element={<RestaurantView />} />
			<Route path="restaurant-menu-create/:id" element={<MenuCreate />} />
			<Route path="restaurant-gallery-create/:id" element={<GalleryCreate />} />
			<Route path="restaurant-tag/:id" element={<RestaurantTag />} />
			<Route path="user-create/:id" element={<RestaurantUserCreate />} />
			<Route path="review-manage/:id" element={<ReviewManage />} />
			<Route path="*" element={<PageNotFound />} />
		</Route>
		{/* Unauthorised Route */}
		<Route path="/unauthorised" element={<UnauthorisedPage />} />
		{/* Fallback Route */}96
		<Route path="*" element={<PageNotFound />} />
	</Routes>
);

export default AppRoutes;
