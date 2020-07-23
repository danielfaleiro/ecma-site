import React, { Component } from 'react'

class Map extends Component {
  componentDidMount () {
    const ecma = { lat: -16.684012, lng: -49.257245 }
    const map = new window.google.maps.Map(
      document.getElementById('map'), { zoom: 16, center: ecma })
    const marker = new window.google.maps.Marker({
      position: ecma,
      title: 'ECMA'
    })

    // To add the marker to the map, call setMap();
    marker.setMap(map)
  }

  render () {
    return (
      <div id="map" />
    )
  }
}

export default Map
