import React, { Component, useContext, useEffect } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const mapStyles = {
	width: "100%",
	height: "100%"
};

export const MapContainer2 = props => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadLocation();
	}, []);

	const latitud = store.location[3].lat;
	const longitud = store.location[3].lon;

	const cords = store.location;

	const showMarkers = () => {
		return (
			<Marker
				position={{
					lat: latitud,
					lng: longitud
				}}
				onClick={() => console.log("Clicked")}
			/>
		);
	};

	return (
		<Map
			google={props.google}
			zoom={12}
			style={mapStyles}
			initialCenter={{
				lat: latitud,
				lng: longitud
			}}>
			{showMarkers()}
		</Map>
	);
};

export default GoogleApiWrapper({
	apiKey: "AIzaSyD1_iF4J-WiiyxY2Qegzaq_rNOQLyQRmzo"
})(MapContainer2);

MapContainer2.propTypes = {
	google: PropTypes.object
};
