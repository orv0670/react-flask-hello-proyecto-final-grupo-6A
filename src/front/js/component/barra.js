import React, { useContext, useCallback } from "react";
import { Link } from "react-router-dom";
import { Navbar, Button, Dropdown } from "react-bootstrap";
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
		<Navbar bg="light" variant="light">
			<Link to="/">
				<Navbar.Brand href="#home">
					<img style={{ marginLeft: 60 }} src={logo} height="120px" />
				</Navbar.Brand>
			</Link>
			<Navbar.Toggle />
			<Navbar.Collapse className="justify-content-end">
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
						<Link to="/">
							<a style={{ color: "#090a" }} href="#login">
								About Us
							</a>
						</Link>
					</Navbar.Text>
				</Button>

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
								style={{ width: "145px", marginRight: "33px" }}>
								<i className="fas fa-user mr-2" />
								{store.userName}
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Link to="/" onClick={onLogout}>
									<Dropdown.Item href="#/action-1">Logout</Dropdown.Item>
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
