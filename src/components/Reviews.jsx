import React from 'react';
import Review from './Review';

const Reviews = (props) => {
	return (
		<main>
			<Review {...props} />
		</main>
	);
};

export default Reviews;
