import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = props => {
	const { store } = useContext(Context);
	const isLoggedIn = !!store.userName;

	return isLoggedIn ? (
		<Route path={props.path} exact={props.exact} component={props.component} />
	) : (
		<Redirect to="/login" />
	);
};

PrivateRoute.propTypes = {
	path: PropTypes.string,
	exact: PropTypes.bool,
	component: PropTypes.node
};

export default PrivateRoute;
