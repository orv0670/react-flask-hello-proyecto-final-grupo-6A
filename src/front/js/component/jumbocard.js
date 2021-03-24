import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import jcardp from "../../img/jcardp.png";
import jcardm from "../../img/jcardm.png";

const Playa = () => {
	return (
		<div>
			<Card style={{ width: "100%" }}>
				<Card.Img variant="top" src={jcardp} />
				<Card.Body>
					<Card.Text>
						Las Playas de Costa Rica se encuentran en dos preciosas costas. El Caribe y el Pacífico. Estas
						dos costas están separadas por majestuosas montañas verdes e imponentes volcanes. Las costas del
						Pacífico y del Caribe de Costa Rica son inmensamente distintas entre sí. Muchas de ellas
						proporcionan una ventaja extraordinaria para los viajeros que miran satisfacer sus deseos de las
						vacaciones de acuerdo a sus gustos. Cada región tiene su estilo cultural único. Por ejemplo,
						patrones climáticos, ubicación geográfica, ambiente, vida silvestre y belleza exótica. Venga y
						eche un vistazo a las muchas playas que tenemos.
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

const Montana = () => {
	return (
		<div>
			<Card style={{ width: "100%" }}>
				<Card.Img variant="top" src={jcardm} />
				<Card.Body>
					<Card.Text>
						Costa Rica es un país rodeado de montañas, las cordilleras volcánicas han formado este
						territorio, dado su característico paisaje. Por ello, podemos encontrar toda clase de montañas,
						cerros y volcanes, en todo el país, que permiten hacer viajes por todo el territorio
						descubriendo nuevas montañas, con cascadas, quebradas, ríos, bosques secos, bosques lluviosos,
						flores y plantas exóticas, animales silvestres y paisajes que quitan el aliento. Existen varias
						montañas que recomendamos conocer en su viaje a Costa Rica, especialmente si disfruta del
						senderismo o de la fotografía, y que estamos seguros disfrutará como una experiencia única.
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export const JumboCard = ({ type }) => <div id="select1">{type === "playa" ? <Playa /> : <Montana />}</div>;

JumboCard.propTypes = {
	type: PropTypes.string
};
