import React from "react";

export default function Temperature(props) {
	return (
		<div className="row container ">
			<div>
				<p>
					{props.maxTemp[0]} / {props.minTemp[0]}
				</p>
			</div>
		</div>
	);
}
