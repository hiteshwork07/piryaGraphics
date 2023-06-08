import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class GoogleMapStyle extends Component {
  static defaultProps = {
    center: {
      lat: 21.225487,
      lng: 72.896577
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="google-map-style-1">
        <GoogleMapReact
          // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={20}
        >
          <AnyReactComponent
            lat={21.225487}
            lng={72.896577}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMapStyle;