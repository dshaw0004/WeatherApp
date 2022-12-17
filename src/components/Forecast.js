import React from "react";
import "./css/main.css";

export default function Forecast(props) {
	return (
		<div className="forecast mx-auto">
			<div className="row">
				<p className="col-6">today</p>
				<p className="col-6">
					{props.maxTemp[0]} / {props.minTemp[0]}
				</p>
			</div>
			<div className="row">
				<p className="col-6">tomorrow</p>
				<p className="col-6">
					{props.maxTemp[1]} / {props.minTemp[1]}
				</p>
			</div>
			<div className="row">
				<p className="col-6">day after tomorrow</p>
				<p className="col-6">
					{props.maxTemp[2]} / {props.minTemp[2]}
				</p>
			</div>
		</div>
	);
}
