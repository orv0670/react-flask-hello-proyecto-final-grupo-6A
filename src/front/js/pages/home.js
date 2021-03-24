import React, { useContext } from "react";
import pasos from "../../img/pasos.png";

import { Context } from "../store/appContext";
import { Carrusel } from "../component/carrusel";
import "../../styles/home.scss";
import { ComponenteInf } from "../component/ComponentInf";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store.location);
	return (
		<div>
			<div>
				<Carrusel />
			</div>
			<div className="container">
				<img src={pasos} />
			</div>
		</div>
	);
};
