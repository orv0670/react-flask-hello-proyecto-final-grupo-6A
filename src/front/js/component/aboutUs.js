import React, { useContext } from "react";
import { Context } from "../store/appContext";
import about from "../../img/about.jpg";

import "../../styles/home.scss";

export const AboutUs = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div>
				<div className="d-flex justify-content-center ">
					<img src={about} className="card-img" alt="aboutus" style={{ maxWidth: "100%", height: "500px" }} />
				</div>
				<div className="container" style={{ marginTop: " 27px", marginBottom: "90px" }}>
					<h2 className="display-4">Acerca de Nosotros</h2>
					<hr />
					<p>
						Pura vida passport se compromete con una mejor calidad de vida para todos los costarricenses,
						brindando una plataforma que facilite la conexión entre las pequeñas/medianas empresas y los
						viajeros de todo el mundo.
					</p>
					<p>
						Como sabemos la pandemia por el COVID-19 ha traído muchos nuevos retos, entre unos de los más
						importantes se encuentra la reactivación de la economía. Por lo que creamos Pura Vida Passport
						no solo como una forma más de conectar empresa con visitante, sino para crear una tendencia y
						necesidad de los viajeros, para que esto a su vez encadene a la reactivación de la economía de
						las empresas afiliadas a nuestra plataforma.
					</p>
					<h2 className="display-4 mt-5">¿Cómo hacerlo posible?</h2>
					<hr />
					<p>
						Crear una necesidad para que los viajeros visiten nuestro locales asociados. Para esto
						utilizaremos las redes sociales más populares como lo son facebook, instagram, twitter y medios
						de comunicación del país.
					</p>
					<p>
						Como sabemos el siglo 21 es el siglo en que la comunicación se puede hacer viral en solo algunas
						horas. Entonces utilizaremos esto como una herramientas para hacer la temática viral y crear una
						tendencia que muchos quieran seguir.
					</p>
					<h2 className="display-4 mt-5">¿En qué consiste la estrategia de negocio? </h2>
					<hr />
					<p>
						La temática consiste en que los negocios realicen el proceso de inscripción con Pura vida
						Passport, con el único requisito de adquirir un sello distintivo de su negocio.
					</p>
					<p>
						¿Para que? Bueno, porque los usuarios de Pura Vida Passport elegirán entre los destinos
						inscritos y una vez finalizada su experiencia en el destino, solicitará a la administración del
						negocio que le sellen su pasaporte. Así el visitante tendrá en su pasaporte una colección de
						sellos de aquellos destinos que ha visitado como un recuerdo.
					</p>
				</div>
			</div>
		</div>
	);
};
