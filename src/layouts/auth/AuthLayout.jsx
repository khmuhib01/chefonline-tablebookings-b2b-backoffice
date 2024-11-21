import React from 'react';

const AuthLayout = ({children}) => {
	return (
		<div className="bg-gray-100 min-h-screen flex items-center justify-center">
			<div className="w-full max-w-md bg-white shadow-lg p-6 rounded-lg">{children}</div>
		</div>
	);
};

export default AuthLayout;
