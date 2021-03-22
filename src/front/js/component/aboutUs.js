import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Carrusel } from "../component/carrusel";
import "../../styles/home.scss";
import { ComponenteInf } from "../component/ComponentInf";

export const aboutUs = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="container">
				<ComponenteInf />
			</div>
		</div>
	);
};
