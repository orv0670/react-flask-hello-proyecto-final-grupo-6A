import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { ComponenteInf } from "../component/ComponentInf";

export const CostaRicaInfo = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<div>
				<ComponenteInf />
			</div>
			<div className="embed-responsive embed-responsive-16by9 mt-5 mb-5">
				<iframe
					className="embed-responsive-item"
					src="https://www.youtube.com/embed/fJCbilEqIzE?rel=0"
					allowFullScreen
				/>
			</div>
		</div>
	);
};
