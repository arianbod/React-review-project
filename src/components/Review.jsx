import React from 'react';

const Review = ({ id, name, job, image, text }) => {
	return (
		<article>
			<section>
				<img
					src={image}
					alt={name}
				/>
				<span>,,</span>
			</section>
			<section>
				<h1>{name}</h1>
				<h2>{job && job.toUpperCase()}</h2>
			</section>
			<section>
				<p>{text}</p>
			</section>
		</article>
	);
};

export default Review;
