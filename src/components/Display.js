import React from "react";
import CrntTemp from "./CrntTemp";
import "./css/main.css";
import Forecast from "./Forecast";
import Other from "./Other";
import SolarClock from "./SolarClock";
import Weather from "./Weather.jsx";

export default function Display(props) {
	const crnthr = new Date().getHours();

	return (
		<div className="text-center">
			<CrntTemp crntTemp={props.crntTemp[new Date().getHours()]} />
			<Weather weather={props.weather[crnthr]} />

			<Forecast maxTemp={props.maxTemp} minTemp={props.minTemp} />
			<SolarClock sunRise={props.sunRise} sunSet={props.sunSet} />
			<Other
				aprTemp={props.aprTemp[crnthr]}
				rain={props.rain[crnthr]}
				Wspeed={props.Wspeed[crnthr]}
				Wdirection={props.Wdirection[crnthr]}
				Humidity={props.Humidity[crnthr]}
				Pressure={props.Pressure[crnthr]}
			/>
		</div>
	);
}
