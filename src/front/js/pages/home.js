import React, { useContext } from "react";
import pasos from "../../img/pasos.png";

import { Context } from "../store/appContext";
import { Carrusel } from "../component/carrusel";
import "../../styles/home.scss";
import { ComponenteInf } from "../component/ComponentInf";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store.location);
	return (
		<div>
			<div>
				<Carrusel />
			</div>
			<div style={{ width: "80%", margin: "0 auto", marginTop: "108px" }}>
				<div className="row">
					<h1 className="display-3" style={{ textAlign: "center", margin: "0 auto" }}>
						Pura Vida Passport
					</h1>
				</div>
				<hr />
				<div className="row mt-5" style={{ textAlign: "center" }}>
					<p>
						Se parte de la comunidad Pura Vida Passport y recolecta todos esos hermosos sellos en tu
						pasaporte que te harán vivir de nuevo esa experiencia. Además al ser parte de Pura Vida Passport
						estarás ayudando a todos los pequeños y medianos empresarios de Costa Rica y recibiendo muchas
						ofertas como también descuentos.
					</p>
				</div>
			</div>
			<div
				className="container align-items-center"
				style={{ maxWidth: "1500px", marginTop: "100px", marginBottom: "20px" }}>
				<div className="row d-flex">
					<div className="col-sm" style={{ marginBottom: "10px" }}>
						<div className="media">
							<img
								style={{ width: "150px", height: "150px" }}
								src="https://s3.amazonaws.com/thinkific/file_uploads/28444/images/a11/a60/85d/boton-registro-gratis.png"
								className="align-self-start mr-3"
								alt="register"
							/>
							<div className="media-body" style={{ width: "150px" }}>
								<h5 className="mt-2 mb-2">
									<strong>Paso 1</strong>
								</h5>
								<p>Regístrese así podrás conocer más de Costa Rica y disfrutar de descuentos.</p>
							</div>
						</div>
					</div>
					<div className="col-sm" style={{ marginBottom: "10px" }}>
						<div className="media">
							<img
								style={{ width: "150px", height: "150px" }}
								src="https://revistasumma.com/wp-content/uploads/2017/01/costa-rica-1.jpg"
								className="align-self-start mr-3 rounded-lg"
								alt="destino"
							/>
							<div className="media-body" style={{ width: "150px" }}>
								<h5 className="mt-2 mb-2">
									<strong>Paso 2</strong>
								</h5>
								<p>Elige entre playa y montaña cuál será tu próxima aventura.</p>
							</div>
						</div>
					</div>
					<div className="col-sm" style={{ marginBottom: "10px" }}>
						<div className="media">
							<img
								style={{ width: "150px", height: "150px" }}
								src="https://i.pinimg.com/originals/84/2b/1f/842b1f4fff23ed82a7b3037bdf26ea4d.jpg"
								className="align-self-start mr-3 rounded-lg"
								alt="..."
							/>
							<div className="media-body" style={{ width: "150px" }}>
								<h5 className="mt-2 mb-2">
									<strong>Paso 3</strong>
								</h5>
								<p>
									Disfruta de toda la belleza natural, gastronomía y aventura que Costa Rica te
									brinda.
								</p>
							</div>
						</div>
					</div>
					<div className="col-sm" style={{ marginBottom: "10px" }}>
						<div className="media">
							<img
								style={{ width: "150px", height: "150px" }}
								src="https://e.an.amtv.pe/util-e-interesante-sellos-especiales-pasaporte-n340743-696x418-509749.jpg"
								className="align-self-start mr-3 rounded-lg"
								alt="sello"
							/>
							<div className="media-body" style={{ width: "150px" }}>
								<h5 className="mt-2 mb-2">
									<strong>Paso 4</strong>
								</h5>
								<p>Solicita tu sello y colecciona experiencias.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
