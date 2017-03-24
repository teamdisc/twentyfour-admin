import React, { Component } from 'react';
import axios from 'axios';
import PreviewForm from '../Exhibition/PreviewForm/PreviewForm';
import ContactForm from '../Exhibition/ContactForm/ContactForm';

class ManageBooth extends Component {

  handleOnSubmit = (type, imagePath) => {
    axios.post('http://161.246.5.227:8080/exhibition/2/update')
    .then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-md-6">
            <ContactForm onSubmit={data => console.log(data)}/>
          </div>
          <div className="col-md-6">
            <PreviewForm
              title="Brochure"
              imagePath=""
              onSubmit={imagePath => this.handleOnSubmit('brochureUrl', imagePath)}
            />
          </div>
        </div>
      </div>
    )
  }

}

export default ManageBooth;
