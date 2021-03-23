import React, { useState, useContext } from "react";
import { Form, Button, Accordion } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { Formik } from "formik";
import { Context } from "../store/appContext";

export const Login = () => {
	const [redirect, setRedirect] = useState(false);
	const [loginError, setLoginError] = useState("");
	const { actions } = useContext(Context);

	const onHandleSubmit = values => {
		// FETCH
		fetch(process.env.BACKEND_URL + "/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(values)
		})
			.then(response => {
				if (response.status !== 200) {
					throw new Error("Error de inicio de sesion");
				}

				return response.json();
			})
			.then(data => {
				setLoginError("");
				console.log("Exito:", data);
				sessionStorage.setItem("u_token", data.token);
				sessionStorage.setItem("user_id", data.user.id);
				sessionStorage.setItem("name", data.user.nombre_completo);
				actions.setUserName(data.user.nombre_completo);
				//actions.getFavoritos();
				setRedirect(true);
			})
			.catch(error => {
				setLoginError("Usuario o contrasena invalido");
				console.error("Error:", error);
			});
	};

	return (
		<div
			className="shadow-lg rounded border"
			style={{
				background: "#E9E8E8",
				width: "550px",
				margin: "0 auto",
				height: "640px",
				marginTop: "100px",
				marginBottom: "55px"
			}}>
			<Formik
				initialValues={{ email: "", password: "" }}
				validate={values => {
					const errors = {};
					if (!values.password) {
						errors.password = "Required";
					}
					if (!values.email) {
						errors.email = "Required";
					} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
						errors.email = "Invalid email address";
					}
					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					onHandleSubmit(values);
					setSubmitting(false);
				}}>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting
					/* and other goodies */
				}) => (
					<Form
						className="container text-center "
						style={{ marginTop: "50px", maxWidth: "436px", marginBottom: "200px" }}
						noValidate
						onSubmit={handleSubmit}>
						<h1 style={{ paddingBottom: "60px" }}>Bienvenidos a la aventura</h1>
						<Form.Group controlId="formBasicEmail">
							<Form.Control
								type="email"
								placeholder="Enter email"
								onChange={handleChange}
								isInvalid={!!errors.email}
								value={values.email}
								name="email"
							/>
							<Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
						</Form.Group>
						<Form.Group controlId="formBasicPassword">
							<Form.Control
								required
								type="password"
								placeholder="Password"
								onChange={handleChange}
								isInvalid={!!errors.password}
								value={values.password}
								name="password"
							/>
							<Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
						</Form.Group>
						<Button
							variant="primary"
							type="submit"
							className="mb-2"
							style={{ width: "398px" }}
							value="Login">
							Login
						</Button>
						{loginError && <div style={{ color: "red" }}>{loginError}</div>}
						<Link to={`./recuperar/`}>
							<Accordion.Toggle as={Button} variant="link" eventKey="0" style={{ marginBottom: "30px" }}>
								Olvidé mi contraseña
							</Accordion.Toggle>
						</Link>
						<Form.Group>
							<h5>Aún no tienes una cuenta</h5>
							<Link to={`./register/`}>
								<Button
									variant="primary"
									type="submit"
									style={{ width: "398px", background: "#17a2b8", border: "none" }}>
									Regístrate Aquí
								</Button>
							</Link>
						</Form.Group>
					</Form>
				)}
			</Formik>
			{redirect ? <Redirect to="/" /> : ""}
		</div>
	);
};
