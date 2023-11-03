import { useEffect, useState } from 'react';
import reviews from './data';
import Reviews from './components/Reviews';
const App = () => {
	const [dataState, setDataState] = useState([]);
	const [activeIndexState, setActiveIndexState] = useState(0);
	const getStaticData = () => {
		setDataState(reviews);
	};
	useEffect(() => {
		getStaticData();
	}, []);

	useEffect(() => {
		console.log(dataState);
		console.log(activeIndexState);
		console.log(dataState[activeIndexState]);
	}, [dataState]);
	return (
		<>
			<Reviews {...dataState[activeIndexState]} />
		</>
	);
};
export default App;
