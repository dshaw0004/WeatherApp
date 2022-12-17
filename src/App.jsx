import React, { useEffect, useState } from "react";
import "./app.css";
import Display from "./components/Display.js";

export default function App() {
	const crntHr = new Date().getHours();
	if (crntHr >= 18) {
		document.getElementById("root").style.color = "white";
	} else {
		document.getElementById("root").style.color = "#0134ef";
	}

	const [crntTemp, setcrntTemp] = useState([]);

	const [weather, setWeather] = useState([]);
	const [minTemp, setminTemp] = useState([]);
	const [maxTemp, setmaxTemp] = useState([]);
	const [aprTemp, setaprTemp] = useState([]);
	const [Humidity, setHumidity] = useState([]);
	const [Pressure, setPressure] = useState([]);
	const [Wspeed, setWspeed] = useState([]);
	const [Wdirection, setWdirection] = useState([]);
	const [rain, setRain] = useState([]);
	const [sunRise, setsunRise] = useState("");
	const [sunSet, setsunSet] = useState("");
	const bgImg = crntHr < 18 ? "day" : "night";

	useEffect(
		() => {
			const getLocation = () => {
				window.navigator.geolocation.getCurrentPosition(
					(position) => {
						fetch(
							`https://api.open-meteo.com/v1/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=IST&hourly=temperature_2m,apparent_temperature,weathercode,relativehumidity_2m,surface_pressure,windspeed_10m,winddirection_10m,rain`
						)
							.then((res) => res.json())
							.then((data) => {
								console.log(data);
								setWeather(data.hourly.weathercode);
								setminTemp(data.daily.temperature_2m_min);
								setmaxTemp(data.daily.temperature_2m_max);
								setaprTemp(data.hourly.apparent_temperature);
								setcrntTemp(data.hourly.temperature_2m);
								setHumidity(data.hourly.relativehumidity_2m);
								setPressure(data.hourly.surface_pressure);
								setRain(data.hourly.rain);
								setWdirection(data.hourly.winddirection_10m);
								setWspeed(data.hourly.windspeed_10m);
								setsunRise(data.daily.sunrise[0]);
								setsunSet(data.daily.sunset[0]);
							});
					},
					(err) => {
						console.log(err);
					}
				);
			};
			getLocation();
		},
		// eslint-disable-next-line
		[]
	);
	return (
		<div className={bgImg} id="app">
			<Display
				weather={weather}
				maxTemp={maxTemp}
				minTemp={minTemp}
				crntTemp={crntTemp}
				aprTemp={aprTemp}
				rain={rain}
				Wspeed={Wspeed}
				Wdirection={Wdirection}
				Humidity={Humidity}
				Pressure={Pressure}
				sunRise={sunRise}
				sunSet={sunSet}
			/>
		</div>
	);
}
