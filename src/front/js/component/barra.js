import React, { useContext, useCallback } from "react";
import { Link } from "react-router-dom";
import { Navbar, Button, Dropdown, NavDropdown } from "react-bootstrap";
import logo from "../../img/logo.png";
import { Context } from "../store/appContext";

export function Barra() {
	const user_id = sessionStorage.getItem("user_id");
	const user_name = sessionStorage.getItem("name");
	const { store, actions } = useContext(Context);
	const isLoggedIn = !!store.userName;

	const onLogout = useCallback(() => {
		sessionStorage.clear();
		actions.clearUserName();
	});
	return (
		<Navbar bg="light" variant="light" expand="lg">
			<Link to="/">
				<Navbar.Brand href="#home">
					<img src={logo} style={{ maxWidth: "95px" }} />
				</Navbar.Brand>
			</Link>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
				{!isLoggedIn && (
					<Button style={{ marginRight: 10 }} variant="outline-light">
						<Navbar.Text>
							<Link to="/register">
								<a style={{ color: "orange" }} href="#login">
									Regístrate
								</a>
							</Link>
						</Navbar.Text>
					</Button>
				)}
				<Button variant="outline-lights">
					<Navbar.Text>
						<Link to="/viewAboutUs">
							<a style={{ color: "#090a" }} href="#login">
								About Us
							</a>
						</Link>
					</Navbar.Text>
				</Button>
				<Button variant="outline-lights">
					<Navbar.Text>
						<Link to="/costaRicaInfo">
							<a style={{ color: "#090a" }} href="#login">
								Costa Rica
							</a>
						</Link>
					</Navbar.Text>
				</Button>

				<Dropdown style={{ display: "inline-block" }}>
					<Dropdown.Toggle id="basic-nav-dropdown" variant="outline" style={{ color: "#090a" }}>
						Destino
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Link to="/viewgeneral/playa">
							<Dropdown.Item style={{ color: "#090a" }} href="#/action-1">
								Playa
							</Dropdown.Item>
						</Link>
						<Link to="/viewgeneral/montana">
							<Dropdown.Item style={{ color: "#090a" }} href="#/action-2">
								Montaña
							</Dropdown.Item>
						</Link>
					</Dropdown.Menu>
				</Dropdown>

				{isLoggedIn ? (
					<>
						<Button style={{ marginLeft: 10 }} variant="outline-light">
							<Navbar.Text>
								<Link to="/viewPassport">
									<a style={{ color: "#090a" }} href="#login">
										MyPassport
									</a>
								</Link>
							</Navbar.Text>
						</Button>
						<Dropdown>
							<Dropdown.Toggle
								variant=""
								id="dropdown-basic"
								style={{ width: "145px", marginRight: "33px", color: "#090a", fontSize: "21px" }}>
								<i className="fas fa-user mr-2" />
								{store.userName}
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Link to="/" onClick={onLogout}>
									<Dropdown.Item href="#/action-1" style={{ color: "#090a" }}>
										Logout
									</Dropdown.Item>
								</Link>
							</Dropdown.Menu>
						</Dropdown>
					</>
				) : (
					<Button style={{ marginLeft: 10 }} variant="outline-light">
						<Navbar.Text>
							<Link to="/login">
								<a style={{ color: "#090a" }}>Log In</a>
							</Link>
						</Navbar.Text>
					</Button>
				)}
			</Navbar.Collapse>
		</Navbar>
	);
}
