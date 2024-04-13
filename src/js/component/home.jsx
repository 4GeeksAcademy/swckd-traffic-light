import React, { useState } from "react";


//create your first component
const Home = () => {
	const [color, setColor] = useState("red");

	const handleClick = (newColor) => {
		setColor(newColor);
	};

	return (
		<div className="traffic-light-container">
		  <div className="traffic-light">
			<div
			  className={color === 'red' ? 'light red active' : 'light red'}
			  onClick={() => handleClick('red')}
			></div>
			<div
			  className={color === 'yellow' ? 'light yellow active' : 'light yellow'}
			  onClick={() => handleClick('yellow')}
			></div>
			<div
			  className={color === 'green' ? 'light green active' : 'light green'}
			  onClick={() => handleClick('green')}
			></div>
		  </div>
		</div>
	  );
	};

export default Home;
