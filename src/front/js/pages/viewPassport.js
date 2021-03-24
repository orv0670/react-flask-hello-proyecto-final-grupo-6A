import React, { useContext, useEffect, useMemo } from "react";
import { Advertisement } from "../component/advertisement";
import { Card } from "../component/Card";
import { Context } from "../store/appContext";

import "../../styles/home.scss";

export const ViewPassport = () => {
	const storeContext = useContext(Context);
	const { pymes, myPassport } = storeContext.store;

	useEffect(() => {
		if (!storeContext.store.pymes.length) {
			storeContext.actions.loadPymeData();
		}
		storeContext.actions.loadPassport();
	}, []);

	const passport = useMemo(
		() => {
			if (!myPassport.length || !pymes.length) return [];

			return myPassport.map(current => {
				return pymes.find(pyme => pyme.id === current.id_pyme);
			});
		},
		[pymes, myPassport]
	);

	console.log("passport", passport);
	return (
		<div>
			<div className="mb-5" style={{ width: "100%" }}>
				<Advertisement />
			</div>
			<div className="mt-5 ml-3">
				<h1 className="display-3">
					<strong>Colección de Sellos</strong>
				</h1>
				<hr />
			</div>
			<div>
				<div className="row px-1 my-5">
					{passport.map((value, index) => {
						return (
							<div className="col-sm-12 col-md-4 col-lg-3 my-2" key={index}>
								<Card
									item={value}
									type={value.type}
									showHeart={false}
									onDelete={storeContext.actions.deleteFromPassport}
									showDelete
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
