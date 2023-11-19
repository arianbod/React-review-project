import { useEffect, useState } from 'react';
import reviews from './data';
import Reviews from './components/Reviews';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const App = () => {
	// Initialize a variable for generating random index
	let random = 0;

	// State for holding reviews data
	const [dataState, setDataState] = useState(reviews);

	// State for tracking the active review index
	const [activeIndexState, setActiveIndexState] = useState(0);

	return (
		<main>
			<article className='review'>
				{/* Display the review component with properties of the current active review */}
				<Reviews {...dataState[activeIndexState]} />

				{/* Navigation buttons */}
				<div style={{ margin: 'auto', textAlign: 'center' }}>
					{/* Back button, shown only if the active index is greater than 0 */}
					{activeIndexState > 0 && (
						<button
							className='btn'
							onClick={() => setActiveIndexState(activeIndexState - 1)}>
							<IoIosArrowBack />
						</button>
					)}

					{/* Forward button, shown only if the active index is less than the length of dataState - 1 */}
					{activeIndexState < dataState.length - 1 && (
						<button
							className='btn'
							onClick={() => setActiveIndexState(activeIndexState + 1)}>
							<IoIosArrowForward />
						</button>
					)}

					{/* Random button for displaying a random review */}
					<button
						className='btn'
						onClick={() =>
							setActiveIndexState(() => {
								// Generate a random index and set it as the active index
								random = Math.floor(Math.random() * dataState.length);
								console.log(random); // Log the random index for debugging
								return random;
							})
						}>
						Surprise Me
					</button>
				</div>
			</article>
		</main>
	);
};
export default App;
