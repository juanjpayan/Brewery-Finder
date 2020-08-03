import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { useParams } from 'react-router-dom';

const mapStyles = {
	width: '100%',
	height: '100%'
};

const Maps = (props) => {
	const [ pub, setPub ] = useState({
		latitude: 40.809,
		longitude: -99.344355
	});
	const { id } = useParams();
	useEffect(() => {
		fetch(`https://api.openbrewerydb.org/breweries/${id}`).then((response) => response.json()).then((data) => {
			setPub(data);
			console.log(data);
		});
	}, []);
	console.log(pub.latitude, pub.longitude);
	return (
		<div>
			<Map
				google={props.google}
				zoom={10}
				style={mapStyles}
				initialCenter={{ lat: 34.34343434, lng: -88.3244234 }}
			>
				<Marker position={{ lat: 34.34343434, lng: -88.3244234 }} />
			</Map>
		</div>
	);
};

export default GoogleApiWrapper({
	apiKey: 'AIzaSyDLZzFeYmkubzhapzVlvm-og7lAAA4WdQs'
})(Maps);

// const LocationPin = ({ text }) => (
// 	<div className="pin">
// 		<FontAwesomeIcon icon={faMapMarker} className="pin-icon" />
// 		<p className="pin-text">{text}</p>
// 	</div>
// );

// const Maps = ({ location, zoomLevel }) => (
// 	<div className="map">
// 		<h2 className="map-h2">Come Visit Our Brewery</h2>

// 		<div className="google-map">
// 			<GoogleMapReact
// 				bootstrapURLKeys={{ key: 'AIzaSyDLZzFeYmkubzhapzVlvm-og7lAAA4WdQs' }}
// 				defaultCenter={location}
// 				defaultZoom={zoomLevel}
// 			>
// 				<LocationPin lat={location.lat} lng={location.lng} text={location.address} />
// 			</GoogleMapReact>
// 		</div>
// 	</div>
// );

// export default Maps;