import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const containerStyle = {
  height: '40vh',
  width: '100%'
}

const center = {
  lat: -16.684012,
  lng: -49.257245
}

const Map = () => (
  <LoadScript googleMapsApiKey='AIzaSyAqtN4FrsBsV140ynxrRscESDuVncuqT28'>
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={16}
    >
      <Marker
        position={center}
        title='ECMA'
      />
    </GoogleMap>
  </LoadScript>
)

export default Map
