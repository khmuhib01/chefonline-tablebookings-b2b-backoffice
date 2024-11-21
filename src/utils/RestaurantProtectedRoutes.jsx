import React from 'react';
import {Navigate} from 'react-router-dom';
import {useContext} from 'react';
import {AuthContextRestaurant} from './../context/AuthContextRestaurant';

export default function RestaurantProtectedRoutes({children, redirectTo}) {
	const {isAuthenticated, loading} = useContext(AuthContextRestaurant);

	if (loading) {
		// Optionally, render a loading spinner or some placeholder
		return <div>Loading...</div>;
	}

	return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

// import React from 'react';
// import {Navigate} from 'react-router-dom';
// import {useContext} from 'react';
// import {AuthContextRestaurant} from './../context/AuthContextRestaurant';

// export default function RestaurantProtectedRoutes({children, redirectTo}) {
// 	const {isAuthenticated, role, loading} = useContext(AuthContextRestaurant);

// 	if (loading) {
// 		// Render a loading spinner or placeholder while authentication is being verified
// 		return (
// 			<div className="flex items-center justify-center min-h-screen">
// 				<div className="text-center">
// 					<p>Loading, please wait...</p>
// 				</div>
// 			</div>
// 		);
// 	}

// 	// Check if the user is authenticated and has the 'admin' role
// 	if (!isAuthenticated || role !== 'admin') {
// 		// Redirect non-admin users to the specified route (e.g., sign-in or unauthorised page)
// 		return <Navigate to={redirectTo || '/unauthorised'} />;
// 	}

// 	// Allow access for authenticated admin users
// 	return children;
// }
