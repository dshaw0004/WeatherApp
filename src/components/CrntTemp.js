import React from "react";

export default function CrntTemp(props) {
	return (
		<div className="pt-5">
			<p className="text-7xl crntTemp dgrC">{props.crntTemp}</p>
		</div>
	);
}

CrntTemp.defaultProps = {
	appTemp: "69",
};
