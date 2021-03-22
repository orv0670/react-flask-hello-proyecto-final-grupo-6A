import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

import portada from "../../img/portada.jpg";
import apoyo from "../../img/apoyo.jpg";
import pasos from "../../img/pasos.jpg";

export function Advertisement() {
	return (
		<Carousel fade className="d-block w-200 h-300">
			<Carousel.Item>
				<Link to="">
					<img className="d-block w-100" src={portada} style={{ height: "690px" }} alt="portada" />
				</Link>
				<Carousel.Caption />
			</Carousel.Item>

			<Carousel.Item>
				<Link to="">
					<img className="d-block w-100" style={{ height: "690px" }} src={pasos} alt="pasos" />
				</Link>
				<Carousel.Caption />
			</Carousel.Item>
			<Carousel.Item>
				<Link to="">
					<img className="d-block w-100" style={{ height: "690px" }} src={apoyo} alt="pq" />
				</Link>
				<Carousel.Caption />
			</Carousel.Item>
		</Carousel>
	);
}
