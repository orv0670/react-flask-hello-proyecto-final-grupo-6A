import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import Heart from "react-animated-heart";

const PlayasCard = ({ item }) => {
	return (
		<>
			<img style={{ maxHeight: "220px" }} className="card-img-top" src={item.imagen} alt={item.categoria} />
			<h3 className="card-title pt-3 text-left">{item.name}</h3>

			<div className="d-flex mb-3">
				<div className="d-inline mr-2 ">
					<i className="fas fa-map-pin " />
				</div>
				<div className="d-inline text-left font-italic">
					<h6>{item.provincia}, Costa Rica</h6>
				</div>
			</div>
		</>
	);
};

export const Card = ({ type, item }) => {
	const [isClick, setClick] = useState(false);

	return (
		<div className="card my-2" style={{ minWidth: "180px", maxWidth: "440px" }}>
			<div className="shadow-lg card-body">
				<PlayasCard item={item} />
				<div className="d-flex justify-content-between align-items-center" style={{ maxHeight: "70px" }}>
					<Link className="btn btn-sm btn-outline-primary" data-toggle="popover" to={`/viewPyme/${item.id}`}>
						Learn more
					</Link>
					<div className="Card">
						<Heart isClick={isClick} onClick={() => setClick(!isClick)} />
					</div>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	type: PropTypes.string,
	item: PropTypes.object
};

PlayasCard.propTypes = {
	item: PropTypes.object
};
