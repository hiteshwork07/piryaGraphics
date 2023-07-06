import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;
class GoogleMapStyle extends Component {
  static defaultProps = {
    center: {
      lat: 21.21883391157044,
      lng: 72.89539965247432
    },
    zoom: 11
  };

  render() {

    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: 21.21883391157044, lng: 72.89539965247432 }}
        >
          <Marker
              position={{ lat: 21.21883391157044, lng: 72.89539965247432 }}
          />
        </GoogleMap>
    ));

    return (
      // Important! Always set the container height explicitly
      <div className="google-map-style-1">
        {/*<GoogleMapReact*/}
        {/*  bootstrapURLKeys={{ key: 'AIzaSyD-G_YCv_F45rntfXcLgOM3jsZcHRGKt8U' }}*/}
        {/*  defaultCenter={this.props.center}*/}
        {/*  defaultZoom={20}*/}
        {/*>*/}
        {/*  <AnyReactComponent*/}
        {/*    lat={21.225487}*/}
        {/*    lng={72.896577}*/}
        {/*    text="My Marker"*/}
        {/*  />*/}
        {/*</GoogleMapReact>*/}

        {/*<MapWithAMarker*/}
        {/*    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD-G_YCv_F45rntfXcLgOM3jsZcHRGKt8U&v=3.exp&libraries=geometry,drawing,places"*/}
        {/*    loadingElement={<div style={{ height: `100%` }} />}*/}
        {/*    containerElement={<div style={{ height: `100%` }} />}*/}
        {/*    mapElement={<div style={{ height: `100%` }} />}*/}
        {/*/>*/}

          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.333275432989!2d72.89287837609211!3d21.218628881228717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f0bb4a5cfef%3A0xee6e78869aa4a440!2sPRIY%20-%20GRAPHICS%20%7C%20PRINTING%20%7C%20ADVERTISING!5e0!3m2!1sen!2sin!4v1688636893942!5m2!1sen!2sin"
              width="100%" height="100%" allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" />

      </div>
    );
  }
}

export default GoogleMapStyle;
