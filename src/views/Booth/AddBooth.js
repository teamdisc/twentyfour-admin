import React, { Component } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter }  from 'reactstrap';
import PreviewForm from '../Exhibition/PreviewForm/PreviewForm';
import BoothForm from './BoothForm/BoothForm';

class AddBooth extends Component {

  state = {
    openModal: false
  }

  toggleModal = () => {
    this.setState({openModal: !this.state.openModal});
  }

  handleOnSubmit = (data) => {
    const {boothId, exhibitionId} = this.props.params;
    axios.post(`http://54.255.222.20:8080/exhibitions/${exhibitionId}/booths/add`, data)
      .then(response => {
          this.setState({openModal: true})
      }).catch(error => {
          console.log(error);
      })
  }

  normalizePreviewData = (previewForm) => {
    const {imageUrl, imageFile} = previewForm.state;
    return (imageFile && imageFile.file) || imageUrl;
  }

  getPreviewFormData = () => {
    const {previewLogoForm, previewBrochureForm} = this;
    return {
      logoUrl: this.normalizePreviewData(previewLogoForm),
      brochureUrl: this.normalizePreviewData(previewBrochureForm)
    }
  }

  getBoothFormData = () => {
    const {boothForm} = this;
    return {
      name: boothForm.form['booth-name-input'].value,
      description: boothForm.form['booth-desc-input'].value,
      boothCode: boothForm.form['booth-code-input'].value,
      email: boothForm.form['booth-email-input'].value,
      mobileNo: boothForm.form['booth-tel-input'].value,
      facebook: boothForm.form['booth-facebook-input'].value,
      facebookUrl: boothForm.form['booth-facebook-url-input'].value,
      keywords: boothForm.state.keywords.reduce((acc,key) => acc + ' ' + key)
    }
  }

  handleOnAdd = () => {
    const boothData = this.getBoothFormData();
    const previewData = this.getPreviewFormData();
    const data = {
      ...boothData,
      ...previewData
    }
    const {exhibitionId} = this.props.params;
    axios.post(`http://54.255.222.20:8080/exhibitions/${exhibitionId}/booths/add`, data)
      .then(response => {
        this.setState({openModal: true})
      }).catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">

          <Modal isOpen={this.state.openModal} toggle={this.toggleModal} className='modal-primary'>
            <ModalHeader toggle={this.toggleModal}>Success</ModalHeader>
            <ModalBody>
              We have added your booth!
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggleModal}>OK</Button>{' '}
            </ModalFooter>
          </Modal>

          <div className="col-md-6">
            <PreviewForm
              title="Booth Logo"
              imagePath=''
              onSubmit={imagePath => this.handleOnSubmit({logoUrl: imagePath})}
              ref={logoForm => this.previewLogoForm = logoForm}
              hideFooter
            />
            <PreviewForm
              title="Brochure"
              imagePath=''
              onSubmit={imagePath => this.handleOnSubmit({brochureUrl: imagePath})}
              ref={brochureForm => this.previewBrochureForm = brochureForm}
              hideFooter
            />
          </div>
          <div className="col-md-6">
            <BoothForm
              onSubmit={data => this.handleOnSubmit(data)}
              ref={boothForm => this.boothForm = boothForm}
              hideFooter
            />
          </div>
        </div>
        <div className="col-md-12" style={{paddingBottom: 20}}>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-block"
            style={{width: '40%', margin: 'auto', fontSize: '1rem'}}
            onClick={this.handleOnAdd}
          >
            <i className="fa fa-plus-circle" style={{paddingRight: 6}}/> Add this booth!
          </button>
        </div>
      </div>
    )
  }

}

export default AddBooth;
