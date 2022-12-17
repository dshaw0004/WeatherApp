import React from "react";
import "./css/main.css";

export default function SolarClock(props) {
	const crntTime = new Date().getTime();
	const sunRise = new Date(props.sunRise).getTime();
	const sunSet = new Date(props.sunSet).getTime();
	const duration = sunSet - sunRise;
	const percentage = parseInt(((crntTime - sunSet) / duration) * 100);

	const style = {
		rotate: `${(9 / 5) * percentage}deg`,
		"--color": crntTime > sunSet ? "white" : "yellow",
	};

	return (
		<div className="solarclock mx-auto mt-5">
			<div className="sunHand" style={style}>
				<div className="sun"></div>
			</div>
		</div>
	);
}
