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
  const [pub, setPub] = useState({
    latitude: 0,
    longitude: 0
  });
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/breweries/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPub(data);
        console.log(data);
      });
  }, []);
  console.log(pub.latitude, pub.longitude);
  return (
    <div>
      <Map
        google={props.google}
        zoom={15}
        style={mapStyles}
        center={{ lat: pub?.latitude, lng: pub?.longitude }}
      >
        <Marker position={{ lat: pub?.latitude, lng: pub?.longitude }} />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDLZzFeYmkubzhapzVlvm-og7lAAA4WdQs'
})(Maps);


