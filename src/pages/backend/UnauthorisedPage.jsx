import React from 'react';

export default function UnauthorisedPage() {
	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="text-center">
				<h1 className="text-2xl font-bold text-red-500">Unauthorised</h1>
				<p className="mt-2">You do not have permission to access this page.</p>
			</div>
		</div>
	);
}
