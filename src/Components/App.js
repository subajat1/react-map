import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};


export class MapContainer extends Component {
  
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={19}
        style={mapStyles}
        initialCenter={{
         lat: 1.299205,
         lng: 103.786576
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'YOUR_GOOGLE_API_KEY_GOES_HERE'
})(MapContainer)
