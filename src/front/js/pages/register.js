//import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export const Register = () => {
	const [redirect, setRedirect] = useState(false);
	// const { actions } = useContext(Context);

	/*const handleSubmit = e => {
		//FETCH
		const data = {
			email: email,
			password: password,
			nombre_completo: nombre_completo,
			respuesta_de_seguridad: respuesta_de_seguridad
		};
        
        */
	const onHandleSubmit = values => {
		fetch(process.env.BACKEND_URL + "/api/registro", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(values)
		})
			.then(response => response.json())
			.then(data => {
				console.log("exito:", data);
				setRedirect(true);
			})
			.catch(error => {
				console.error("Error:", error);
			});
	};

	const formik = useFormik({
		initialValues: {
			nombre_completo: "",
			email: "",
			password: "",
			respuesta_de_seguridad: "",
			condicionesAceptadas: []
		},
		validationSchema: Yup.object({
			nombre_completo: Yup.string().required("Required"),
			email: Yup.string()
				.email("Invalid email address")
				.required("Required"),
			password: Yup.string().required("Required"),
			respuesta_de_seguridad: Yup.string().required("Required"),
			condicionesAceptadas: Yup.array().min(1, "Debes aceptar las condiciones")
		}),
		onSubmit: values => {
			onHandleSubmit(values);
			setSubmitting(false);
		}
	});

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
			<form noValidate style={{ width: "400px" }} onSubmit={formik.handleSubmit}>
				<h1 style={{ paddingBottom: "60px" }}>Bienvenidos a la aventura</h1>
				<div className="form-floating mb-3">
					<input
						type="text"
						className={`form-control ${formik.errors.nombre_completo ? "is-invalid" : ""}`}
						id="floatingInput"
						placeholder="Ingrese su nombre y apellido"
						onChange={formik.handleChange}
						name="nombre_completo"
					/>
					<div className="invalid-feedback">{formik.errors.nombre_completo}</div>
				</div>
				<div className="form-floating mb-3">
					<input
						type="email"
						className={`form-control ${formik.errors.email ? "is-invalid" : ""}`}
						id="floatingInput"
						placeholder="name@example.com"
						onChange={formik.handleChange}
						name="email"
					/>
					<div className="invalid-feedback">{formik.errors.email}</div>
				</div>
				<div className="form-floating" style={{ marginBottom: "35px" }}>
					<input
						type="password"
						className={`form-control ${formik.errors.password ? "is-invalid" : ""}`}
						id="floatingPassword"
						placeholder="Enter a password"
						onChange={formik.handleChange}
						name="password"
					/>
					<div className="invalid-feedback">{formik.errors.password}</div>
					<div className="form-floating mb-3" style={{ marginTop: "17px" }}>
						<input
							type="respuesta_de_seguridad"
							className={`form-control ${formik.errors.respuesta_de_seguridad ? "is-invalid" : ""}`}
							id="floatingInput"
							placeholder="¿Cuál era el nombre de tu primera mascota?"
							onChange={formik.handleChange}
							name="respuesta_de_seguridad"
						/>
						<div className="invalid-feedback">{formik.errors.respuesta_de_seguridad}</div>
					</div>
					<div className="form-group">
						<div className="form-check">
							<input
								className={`form-check-input ${formik.errors.condicionesAceptadas ? "is-invalid" : ""}`}
								type="checkbox"
								id="gridCheck"
								onChange={formik.handleChange}
								name="condicionesAceptadas"
							/>
							<label className="form-check-label" htmlFor="gridCheck">
								Estoy de acuerdo con los términos y condiciones.
							</label>
							<div className="invalid-feedback">{formik.errors.condicionesAceptadas}</div>
						</div>
					</div>
				</div>
				<input type="submit" className="btn btn-primary" style={{ width: "400px" }} value="Register" />
			</form>
			{redirect ? <Redirect to="/login" /> : ""}
		</div>
	);
};
