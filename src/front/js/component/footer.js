import React, { Component } from "react";
import cinde from "../../img/cinde.png";
import micitt from "../../img/micitt.png";

export const Footer = () => (
	<div className="card text-center" style={{ background: "rgb(39, 34, 34)", border: "none" }}>
		<div className="footer-dark">
			<footer>
				<div className="container">
					<div className="row">
						<div className="col-sm-6 col-md-3 item">
							<h3>Visita Costa Rica</h3>
							<ul>
								<li>
									<a href="#">Playa</a>
								</li>
								<li>
									<a href="#">Montaña</a>
								</li>
							</ul>
						</div>
						<div className="col-sm-6 col-md-3 item">
							<h3>Pura Vida Passport</h3>
							<ul>
								<li>
									<a href="#">Información</a>
								</li>
								<li>
									<a href="#">Comida típicas</a>
								</li>
								<li>
									<a href="#">Actividades</a>
								</li>
								<li>
									<a href="#">Cultura</a>
								</li>
							</ul>
						</div>
						<div className="col-md-6 item text">
							<h3>About Us</h3>
							<p>
								Somos una plataforma que busca dar soporte a todas aquellas micro y mediana empresas de
								turismo en Costa Rica, para anunciar sus negocios.
							</p>
						</div>
						<div className="col item social">
							<a
								href="https://www.facebook.com/PuraVidaPassport/"
								target="_blank"
								rel="noopener noreferrer">
								<i className="fab fa-facebook-f" />
							</a>
							<a href="#">
								<i className="fab fa-twitter" />
							</a>
							<a href="#">
								<i className="fab fa-snapchat-ghost" />
							</a>
							<a href="#">
								<i className="fab fa-instagram" />
							</a>
						</div>
					</div>
					<p className="copyright"> © 2021 Pura Vida Passport. All Rights Reserved.</p>
				</div>
			</footer>
		</div>

		<div className="bg-light" height="250px">
			<a href="https://www.cinde.org/es" target="_blank" rel="noopener noreferrer">
				<img src={cinde} className="mr-5" style={{ maxHeight: "41px" }} rel="cindepage" height="80px" />
			</a>

			<a href="https://www.micit.go.cr/" target="_blank" rel="noopener noreferrer">
				<img src={micitt} className="mr-5" style={{ maxHeight: "68px" }} rel="micittpage" height="100px" />
			</a>
			<a href="https://www.visitcostarica.com/es" target="_blank" rel="noopener noreferrer">
				<img
					src="https://graylinecostarica.files.wordpress.com/2012/02/costa_rica1.jpg"
					className="mr-5"
					rel="CRpage"
					height="100px"
					style={{ maxHeight: "128px" }}
				/>
			</a>
			<a href="https://www.canatur.org/" target="_blank" rel="noopener noreferrer">
				<img
					src="https://www.centralamericadata.com/image_archive/e/448121.jpg"
					className="mr-5"
					rel="canatourpage"
					height="100px"
					style={{ maxHeight: "130px" }}
				/>
			</a>
			<a href="https://www.ict.go.cr/es/" target="_blank" rel="noopener noreferrer">
				<img
					src="https://www.elmundo.cr/wp-content/uploads/2018/04/untitled-2-1024x414.png"
					className="mr-5"
					rel="ictpage"
					height="150px"
					style={{ maxHeight: "90px" }}
				/>
			</a>
		</div>
	</div>
);
// {Credit to https://epicbootstrap.com/snippets/footer-dark }
