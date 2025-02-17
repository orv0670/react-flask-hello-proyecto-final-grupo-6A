import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Heart from "react-animated-heart";

const PlayasCard = ({ item }) => {
	return (
		<>
			<img
				style={{ maxHeight: "220px", minHeight: "220px" }}
				className="card-img-top"
				src={item.imagen}
				alt={item.categoria}
			/>
			<div style={{ maxHeight: "100px", minHeight: "100px" }}>
				<h4 className="card-title pt-3 pb-2 text-left">{item.name}</h4>

				<div className="d-flex mb-3">
					<div className="d-inline mr-2 ">
						<i className="fas fa-map-pin " />
					</div>
					<div className="d-inline text-left font-italic">
						<h6>{item.provincia}, Costa Rica</h6>
					</div>
				</div>
			</div>
		</>
	);
};

export const Card = ({ type, item, addToPassport, showHeart = true, showDelete, onDelete }) => {
	const [isClick, setClick] = useState(false);
	const onHeartClick = useCallback(
		() => {
			const user_id = sessionStorage.getItem("user_id");
			setClick(!isClick);
			addToPassport(user_id, item.id);
		},
		[addToPassport, setClick]
	);
	const onDeleteClick = useCallback(
		() => {
			onDelete(item.id);
		},
		[item, onDelete]
	);

	return (
		<div className="card my-2" style={{ minWidth: "180px", maxWidth: "440px" }}>
			<div className="shadow-lg card-body">
				<PlayasCard item={item} />
				<div className="d-flex justify-content-between align-items-center" style={{ maxHeight: "70px" }}>
					<Link className="btn btn-sm btn-outline-primary" data-toggle="popover" to={`/viewPyme/${item.id}`}>
						Learn more
					</Link>
					<div className="Card">{showHeart && <Heart isClick={isClick} onClick={onHeartClick} />}</div>
					{showDelete && (
						<div>
							<i className="far fa-trash-alt" onClick={onDeleteClick} />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	type: PropTypes.string,
	item: PropTypes.object,
	addToPassport: PropTypes.func,
	showHeart: PropTypes.bool,
	showDelete: PropTypes.bool,
	onDelete: PropTypes.func
};

PlayasCard.propTypes = {
	item: PropTypes.object
};
