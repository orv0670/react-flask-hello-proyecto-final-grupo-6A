import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-bootstrap";
import unop from "../../img/unop.png";
import dosp from "../../img/dosp.png";
import tresp from "../../img/tresp.png";
import cuatrop from "../../img/cuatrop.png";
import unom from "../../img/unom.png";
import dosm from "../../img/dosm.png";
import tresm from "../../img/tresm.png";
import cuatrom from "../../img/cuatrom.png";

const Playa = () => {
	return (
		<div>
			<Carousel className="d-block w-200">
				<Carousel.Item>
					<img className="d-block w-100" src={unop} style={{ height: "500px" }} alt="Costa Rica" />

					<Carousel.Caption />
				</Carousel.Item>

				<Carousel.Item>
					<img className="d-block w-100" style={{ height: "500px" }} src={dosp} alt="Playa" />

					<Carousel.Caption />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" style={{ height: "500px" }} src={tresp} alt="Montaña" />

					<Carousel.Caption />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" style={{ height: "500px" }} src={cuatrop} alt="Montaña" />

					<Carousel.Caption />
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

const Montana = () => {
	return (
		<div>
			<Carousel className="d-block w-200">
				<Carousel.Item>
					<img className="d-block w-100" src={unom} style={{ height: "500px" }} alt="Costa Rica" />

					<Carousel.Caption />
				</Carousel.Item>

				<Carousel.Item>
					<img className="d-block w-100" style={{ height: "500px" }} src={dosm} alt="Playa" />

					<Carousel.Caption />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" style={{ height: "500px" }} src={tresm} alt="Montaña" />

					<Carousel.Caption />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" style={{ height: "500px" }} src={cuatrom} alt="Montaña" />

					<Carousel.Caption />
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export const CarruseldeVista = ({ type }) => (
	<div id="select1" className="w-200">
		{type === "playa" ? <Playa /> : <Montana />}
	</div>
);

CarruseldeVista.propTypes = {
	type: PropTypes.string
};
