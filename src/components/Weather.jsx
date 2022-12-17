import React from "react";
import { IconContext } from "react-icons";
import {
	BsCloudFogFill,
	BsCloudRain,
	BsCloudSnowFill,
	BsEmojiSunglassesFill,
	BsFillCloudDrizzleFill,
	BsFillCloudFill,
	BsFillCloudLightningRainFill,
	BsFillCloudRainHeavyFill,
	BsFillCloudSunFill,
	BsInfoCircleFill,
	BsSunFill,
} from "react-icons/bs";
import "./css/main.css";
export default function Weather(props) {
	const weather =
		props.weather === 0 || props.weather === 1 ? (
			<BsSunFill />
		) : props.weather === 2 ? (
			<BsFillCloudSunFill />
		) : props.weather === 3 ? (
			<BsFillCloudFill />
		) : props.weather === 45 || props.weather === 48 || props.weather === 4 ? (
			<BsCloudFogFill />
		) : props.weather === 5 ||
		  props.weather === 51 ||
		  props.weather === 55 ||
		  props.weather === 53 ? (
			<BsFillCloudDrizzleFill />
		) : props.weather === 6 ||
		  props.weather === 61 ||
		  props.weather === 63 ||
		  props.weather === 65 ? (
			<BsCloudRain />
		) : props.weather === 7 ||
		  props.weather === 71 ||
		  props.weather === 73 ||
		  props.weather === 75 ? (
			<BsCloudSnowFill />
		) : props.weather === 8 ||
		  props.weather === 81 ||
		  props.weather === 82 ||
		  props.weather === 85 ? (
			<BsFillCloudRainHeavyFill />
		) : props.weather === 9 ? (
			<BsFillCloudLightningRainFill />
		) : (
			<BsEmojiSunglassesFill />
		);
	return (
		<div className="text-white weather relative text-center w-3/4 mx-auto">
			<IconContext.Provider value={{ style: { margin: "1rem auto" } }}>
				<div className="crntWeather">{weather}</div>
			</IconContext.Provider>

			<button
				type="button"
				className="text-black hover:text-red-700 absolute top-0 right-4"
				data-bs-toggle="modal"
				data-bs-target="#staticBackdrop"
			>
				<BsInfoCircleFill />
			</button>

			<div
				className="modal fade"
				id="staticBackdrop"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
				tabindex="-1"
				aria-labelledby="staticBackdropLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-content bg-dark w-11/12 mx-auto">
					<div className="modal-header">
						<h3 className="modal-title fs-5" id="staticBackdropLabel">
							Weather Symbols
						</h3>
						<button
							type="button"
							className="btn-close text-white text-2xl"
							data-bs-dismiss="modal"
							aria-label="Close"
						>
							X
						</button>
					</div>
					<div className="modal-body grid grid-cols-1 items-center">
						<p className="">
							<BsCloudFogFill /> <p>:- Foggy Weather</p>
						</p>
						<p className="">
							<BsCloudRain /> :- Cloudy Weather
						</p>
						<p>
							<BsCloudSnowFill /> :- Snowy Weather
						</p>
						<p>
							<BsFillCloudDrizzleFill /> :- Drizzle is going on
						</p>
						<p>
							<BsFillCloudFill /> :- cloudy sky
						</p>
						<p>
							<BsFillCloudLightningRainFill /> :- lightning rain
						</p>
						<p>
							<BsFillCloudRainHeavyFill /> :- Shower is going on
						</p>
						<p>
							<BsFillCloudSunFill /> :- partially cloudy sky
						</p>
						<p>
							<BsSunFill /> :- clear sky, sunny weather
						</p>
						<p>
							<BsEmojiSunglassesFill /> :- Something went wrong
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
