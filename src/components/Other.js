import React from "react";
import "./css/main.css";
export default function Other(props) {
	return (
		<div className="grid grid-cols-2 mt-4 p-2 w-2/3 mx-auto rounded-2xl border border-amber-900 backdrop-blur-xl hover:shadow-2xl">
			<p className="other">
				<strong>{props.aprTemp}</strong>&#8451;
				<br />
				Feels like
			</p>
			<p className="other">
				<strong>{props.rain}</strong>mm
				<br />
				rain
			</p>
			<p className="other">
				<strong>{props.Pressure}</strong>mbar
				<br /> air pressure
			</p>
			<p className="other">
				<strong>{props.Wspeed}</strong>kmph
				<br /> wind speed
			</p>
			<p className="other">
				<strong>{props.Wdirection}&deg;</strong>
				<br />
				wind direction
			</p>
			<p className="other">
				<strong>{props.Humidity}</strong>%
				<br />
				Humidity
			</p>
		</div>
	);
}
