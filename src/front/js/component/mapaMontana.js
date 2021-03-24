import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import PropTypes from "prop-types";

const mapStyles = {
	width: "100%",
	height: "100%"
};

export class MapContainer2 extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cords: [{ lat: 10.313549, lng: -84.8156485 }]
		};
	}

	showMarkers = () => {
		return this.state.cords.map((store, index) => {
			return (
				<Marker
					key={index}
					id={index}
					position={{
						lat: store.lat,
						lng: store.lng
					}}
					onClick={() => console.log("Clicked")}
				/>
			);
		});
	};

	render() {
		return (
			<Map
				google={this.props.google}
				zoom={12}
				style={mapStyles}
				initialCenter={{
					lat: 10.313549,
					lng: -84.8156485
				}}>
				{this.showMarkers()}
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: ""
})(MapContainer2);

MapContainer2.propTypes = {
	google: PropTypes.object
};
