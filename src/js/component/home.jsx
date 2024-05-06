import React, { useState, useEffect } from "react";

const Home = () => {
	const [color, setColor] = useState("red");
	const [extraColor, setExtraColor] = useState(null);

	useEffect(() => {
		const colors = ['red', 'yellow', 'green', extraColor].filter(Boolean);
		let currentColorIndex = 0;
		const intervalId = setInterval(() => {
			currentColorIndex = (currentColorIndex + 1) % colors.length;
			setColor(colors[currentColorIndex]);
		}, 1000);

		return () => clearInterval(intervalId);
	}, [extraColor]);

	const handleClick = (newColor) => {
		setColor(newColor);
	};

	const handleExtraColor = () => {
		setExtraColor('blue');
	};

	return (
		<div className="traffic-light-container">
			<div className="traffic-light">
				{['red', 'yellow', 'green', extraColor].filter(Boolean).map((colorItem) => (
					<div
						key={colorItem}
						className={color === colorItem ? `light ${colorItem} active` : `light ${colorItem}`}
						onClick={() => handleClick(colorItem)}
					></div>
				))}
			</div>
			<button onClick={handleExtraColor}>añadir azul</button>
		</div>
	);
};

export default Home;