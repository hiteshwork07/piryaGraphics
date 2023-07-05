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

        <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD-G_YCv_F45rntfXcLgOM3jsZcHRGKt8U&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />

      </div>
    );
  }
}

export default GoogleMapStyle;
