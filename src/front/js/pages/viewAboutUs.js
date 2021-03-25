import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

import { AboutUs } from "../component/aboutUs";

export const AboutUsP = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div>
				<AboutUs />
			</div>
		</div>
	);
};
