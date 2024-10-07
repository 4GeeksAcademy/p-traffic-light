import React, { useState } from 'react';
import '../../styles/index.css';

const TrafficLight = () => {
	const [activeLight, setActiveLight] = useState(null);

	const handleClick = (color) => {
		setActiveLight(color);
	};

	return (
		<div className="traffic-light-container">
			<div className="traffic-light">
				<div
					className={`circle red ${activeLight === 'red' ? 'active' : ''}`}
					onClick={() => handleClick('red')}
				></div>
				<div
					className={`circle yellow ${activeLight === 'yellow' ? 'active' : ''}`}
					onClick={() => handleClick('yellow')}
				></div>
				<div
					className={`circle green ${activeLight === 'green' ? 'active' : ''}`}
					onClick={() => handleClick('green')}
				></div>
			</div>
		</div>
	);
};

export default TrafficLight;