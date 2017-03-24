import React, { Component } from 'react';
import axios from 'axios';
import { Input } from './BuildingBlocks/BuildingBlocks';
import MapForm from './MapForm/MapForm';
import PreviewForm from './PreviewForm/PreviewForm';
import ExhibitionForm from './ExhibitionForm/ExhibitionForm';
import ContactForm from './ContactForm/ContactForm';

class ManageExhibition extends Component {

  handleOnSubmit = (type, imagePath) => {
    axios.post('http://161.246.5.227:8080/exhibition/2/update')
    .then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    })
  }

  render() {
    console.log(this.props.location);
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-md-6">
            <ExhibitionForm onSubmit={data => console.log(data)}/>
              <PreviewForm
                title="Poster"
                imagePath=""
                onSubmit={imagePath => this.handleOnSubmit('posterUrl', imagePath)}
              />
              <PreviewForm
                title="Map"
                imagePath=""
                onSubmit={imagePath => this.handleOnSubmit('mapUrl', imagePath)}
              />
              <PreviewForm
                title="Agenda"
                imagePath=""
                onSubmit={imagePath => this.handleOnSubmit('agendaUrl', imagePath)}
              />
          </div>

          <div className="col-md-6">

            <MapForm onSubmit={data => console.log(data)}/>
            <ContactForm onSubmit={data => console.log(data)}/>

          </div>
        </div>
      </div>
    )
  }

}

export default ManageExhibition;
