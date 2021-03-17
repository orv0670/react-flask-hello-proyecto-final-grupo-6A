//import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import React from "react";

export const Register = () => {
	return (
		<div
			className="container text-center mt-5 d-flex justify-content-center align-items-center shadow-lg rounded border"
			style={{
				Maxwidth: "650px",
				background: "white",
				paddingTop: "80px",
				paddingBottom: "165px",
				width: "570px",
				marginBottom: "36px",
				background: "#E9E8E8"
			}}>
			<form style={{ width: "400px" }}>
				<h1 style={{ paddingBottom: "60px" }}>Bienvenidos a la aventura</h1>
				<div className="form-floating mb-3">
					<input
						type="fullName"
						className="form-control"
						id="floatingInput"
						placeholder="Ingrese su nombre y apellido"
					/>
				</div>
				<div className="form-floating mb-3">
					<input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
				</div>
				<div className="form-floating" style={{ marginBottom: "35px" }}>
					<input
						type="password"
						className="form-control"
						id="floatingPassword"
						placeholder="Enter a password"
					/>
					<div className="form-floating mb-3" style={{ marginTop: "17px" }}>
						<input
							type="respuestaDeSeguridad"
							className="form-control"
							id="floatingInput"
							placeholder="¿Cuál era el nombre de tu primera mascota?"
						/>
					</div>
					<div className="form-group">
						<div className="form-check">
							<input className="form-check-input" type="checkbox" id="gridCheck" />
							<label className="form-check-label" htmlFor="gridCheck">
								Estoy de acuerdo con los términos y condiciones.
							</label>
						</div>
					</div>
				</div>
				<input type="submit" className="btn btn-primary" style={{ width: "400px" }} value="Register" />
			</form>
		</div>
	);
};
