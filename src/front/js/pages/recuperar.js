import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Redirect, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const Recuperar = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password1, setPassword1] = useState("");
	const [password2, setPassword2] = useState("");
	const [respuesta_de_seguridad, setRespuesta_de_seguridad] = useState("");
	const [redirect, setRedirect] = useState(false);
	//const history = useHistory();

	const handleSubmit = e => {
		e.preventDefault();
		if (email === "" || password1 === "" || password2 === "" || respuesta_de_seguridad === "") {
			alert("por favor ingrese todos los datos en el formulario");
		} else if (password1 != password2) {
			alert("Su contraseña de confirmación debe ser idéntica a su nueva contraseña");
		}

		//fetch
		const body = {
			email: email,
			new_password: password2,
			respuesta_de_seguridad: respuesta_de_seguridad
		};
		console.log(body);

		fetch(process.env.BACKEND_URL + "/api/reset", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(body)
		})
			.then(res => res.json())
			.then(data => {
				console.log("Cambio de contraseña exitoso");
				setRedirect(true);
			})
			.catch(error => {
				console.error("Error:", error);
			});
	};

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
				<h1 style={{ paddingBottom: "60px" }}>Recupera la contraseña</h1>
				<div className="form-floating mb-3">
					<h5>Ingresa aquí el correo electrónico</h5>
					<input
						type="fullName"
						className="form-control"
						id="floatingInput"
						placeholder="Correo electrónico"
						onChange={e => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<h5 htmlFor="exampleFormControlSelect1">Pregunta de seguridad</h5>
					<select className="form-control" id="exampleFormControlSelect1">
						<option />
						<option>¿Cuál era el nombre de tu primera mascota?</option>
					</select>
				</div>
				<div className="form-floating mb-3">
					<h5>Ingrese su respuesta</h5>
					<input
						type="fullName"
						className="form-control"
						id="floatingInput"
						placeholder="Ejemplo: Scooby doo"
						onChange={e => {
							setRespuesta_de_seguridad(e.target.value);
						}}
						required
					/>
				</div>
				<div className="form-floating mb-3">
					<h5>Ingresa aquí su nueva contraseña</h5>
					<input
						type="fullName"
						className="form-control"
						id="floatingInput"
						placeholder="nueva contraseña"
						onChange={e => {
							setPassword1(e.target.value);
						}}
						required
					/>
				</div>
				<div className="form-floating mb-3">
					<h5>Confirme su nueva contraseña</h5>
					<input
						type="fullName"
						className="form-control"
						id="floatingInput"
						placeholder="nueva contraseña"
						onChange={e => {
							setPassword2(e.target.value);
						}}
						required
					/>
				</div>
				<input
					type="submit"
					className="btn btn-primary"
					style={{ width: "400px" }}
					value="Cambiar contraseña"
				/>
			</form>
			{redirect ? <Redirect to="/login" /> : ""}
		</div>
	);
};
