import React, { Component } from 'react';
// import {GoogleMap, withGoogleMap} from 'react-google-maps';
import { Input } from '../BuildingBlocks/BuildingBlocks';

class MapForm extends Component {

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <strong>Map</strong> form
        </div>
        <form action="" method="post">
          <div className="card-block">
            <Input title="Map location" shouldNewLine>

            </Input>
          </div>
        </form>

      </div>
    )
  }

}

export default MapForm;
