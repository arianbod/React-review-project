import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';
const Review = ({ id, name, job, image, text }) => {
	return (
		<article>
			<section>
				<div className='img-container'>
					<img
						className='person-img'
						src={image}
						alt={name}
					/>
					<span className='quote-icon'>
						<FaQuoteRight />
					</span>
				</div>
			</section>
			<section>
				<h4 className='author'>{name}</h4>
				<h2 className='job'>{job.toUpperCase()}</h2>
			</section>
			<section>
				<p className='info'>{text}</p>
			</section>
		</article>
	);
};

export default Review;
