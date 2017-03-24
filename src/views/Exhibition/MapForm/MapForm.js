/* eslint-disable no-undef */
import React, { Component } from 'react';
import _ from 'lodash';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import SearchBox from 'react-google-maps/lib/places/SearchBox';
import withScriptjs from 'react-google-maps/lib/async/withScriptjs'
import { Input } from '../BuildingBlocks/BuildingBlocks';

const INPUT_STYLE = {
  height: 30,
  width: '36%',
  minWidth: 160,
  padding: 5,
  marginRight: 10,
  marginTop: 10,
}

const GoogleMapForm = _.flowRight(withScriptjs, withGoogleMap)(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={15}
    defaultCenter={{lat: -25.36882, lng: 131.044922}}
    center={props.center}
    onClick={props.onMapClick}
  >
    <SearchBox
      ref={props.onSearchBoxMounted}
      controlPosition={google.maps.ControlPosition.TOP_RIGHT}
      onPlacesChanged={props.onPlacesChanged}
      inputPlaceholder="Enter you landmark name..."
      inputStyle={INPUT_STYLE}
    />
    <Marker {...props.marker} />
  </GoogleMap>
));

class MapForm extends Component {

  state = {
    location: '',
    marker: {
      position: {
        lat: 25.0112183,
        lng: 121.520656565
      },
      key: 'Taiwan',
      defaultAnimation: 2
    }
  }

  handleMapLoad = map => {
    this._mapComponent = map
    if(map) {
      console.log(map.getZoom());
    }
  }

  handleMapClick = event => {
    this.setState({
      marker: {
        position: event.latLng,
        defaultAnimation: 2,
        key: Date.now()
      }
    })
  }

  handleSearchBoxMounted = searchBox => {
    this._searchBox = searchBox;
  }

  handlePlacesChanged = () => {
    const places = this._searchBox.getPlaces();
    // const marker = places.map(place => {
    //   position: place.geometry.location
    // });
    const marker = {
      position: places[0].geometry.location
    }
    const mapCenter = marker.position && this.state.center;
    console.log(mapCenter);
    this.setState({
      center: mapCenter,
      marker
    })
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <strong>Map</strong> form
        </div>
        <form action="" method="post">
          <div className="card-block">

            <Input title="Map location" shouldNewLine>
              <input type="text" id="location-input" name="text-input" className="form-control" placeholder="Enter your contact name..."/>
            </Input>

            <Input title="Google map" helpText="Mark your location on the Google map" shouldNewLine>
              <GoogleMapForm
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCZlu16c8bDQJpzZIVMD8KsED42Y1djKQg&libraries=geometry,drawing,places"
                loadingElement={<div />}
                containerElement={<div style={{ height: '360px' }} />}
                mapElement={<div style={{ height: '360px' }} />}
                onMapLoad={this.handleMapLoad}
                onMapClick={this.handleMapClick}
                marker={this.state.marker}
                center={this.state.marker.position}
                onSearchBoxMounted={this.handleSearchBoxMounted}
                onPlacesChanged={this.handlePlacesChanged}
                // onMarkerRightClick={this.handleMarkerRightClick}
              />
            </Input>

          </div>
        </form>
        <div className="card-footer">
          <button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-dot-circle-o"></i> Submit</button>
          <button type="reset" className="btn btn-sm btn-danger"><i className="fa fa-ban"></i> Reset</button>
        </div>
      </div>
    )
  }

}

export default MapForm;
