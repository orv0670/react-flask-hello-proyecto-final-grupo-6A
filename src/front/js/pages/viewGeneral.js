import React, { useContext, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { CarruseldeVista } from "../component/carruseldeVista";
import { Card } from "../component/Card";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export function ViewGeneral() {
	const { type } = useParams();
	const storeContext = useContext(Context);
	const {
		store: { pymes }
	} = storeContext;
	useEffect(() => {
		storeContext.actions.loadPymeData();
	}, []);
	const data = useMemo(
		() => {
			return pymes.filter(current => current.tipo === type);
		},
		[type, pymes]
	);

	return (
		<div className="d-block w-200">
			<CarruseldeVista type={type} />
			<div>
				{data.map((value, index) => {
					return (
						<div className="col-sm-12 col-md-4 col-lg-3 my-2" key={index}>
							<Card item={value} type={type} />
						</div>
					);
				})}
			</div>
		</div>
	);
}
