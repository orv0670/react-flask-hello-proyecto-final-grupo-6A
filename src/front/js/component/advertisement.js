import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

import advPortada from "../../img/advPortada.jpg";
import desc1 from "../../img/desc1.jpg";
import desc2 from "../../img/desc2.jpg";
import desc3 from "../../img/desc3.jpg";

export function Advertisement() {
	return (
		<Carousel fade className="d-block w-200 h-300">
			<Carousel.Item>
				<Link to="">
					<img className="d-block w-100" src={advPortada} style={{ height: "690px" }} alt="portada" />
				</Link>
				<Carousel.Caption />
			</Carousel.Item>

			<Carousel.Item>
				<Link to="">
					<img className="d-block w-100" src={desc3} style={{ height: "690px" }} alt="descuento" />
				</Link>
				<Carousel.Caption />
			</Carousel.Item>

			<Carousel.Item>
				<Link to="">
					<img className="d-block w-100" style={{ height: "690px" }} src={desc1} alt="descuento" />
				</Link>
				<Carousel.Caption />
			</Carousel.Item>
			<Carousel.Item>
				<Link to="">
					<img className="d-block w-100" style={{ height: "690px" }} src={desc2} alt="descuento" />
				</Link>
				<Carousel.Caption />
			</Carousel.Item>
		</Carousel>
	);
}
