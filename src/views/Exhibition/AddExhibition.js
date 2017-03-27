import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter }  from 'reactstrap';
import axios from 'axios';
import MapForm from './MapForm/MapForm';
import PreviewForm from './PreviewForm/PreviewForm';
import ExhibitionForm from './ExhibitionForm/ExhibitionForm';
import ContactForm from './ContactForm/ContactForm';

class AddExhibition extends Component {

  state = {
    catFetched: false,
    categoryList: [],
    openModal: false,
  }

  componentWillMount() {
    axios.get('http://161.246.5.227:8080/exhibitions/categories')
      .then(response => this.setState({catFetched: true, categoryList: response.data}))
  }

  toggleModal = () => {
    this.setState({openModal: !this.state.openModal});
  }

  getExhibitionFormData = () => {
    const {exhibitionForm} = this;
    const {startDate, endDate} = exhibitionForm.state;
    return {
      name: exhibitionForm.form['name-input'].value,
      description: exhibitionForm.form['desc-textarea-input'].value,
      category: exhibitionForm.form['category-select'].value,
      startDate: startDate ? startDate.format('YYYY-MM-DD') : null,
      endDate: endDate ? endDate.format('YYYY-MM-DD') : null,
    }
  }

  normalizePreviewData = (previewForm) => {
    const {imageUrl, imageFile} = previewForm.state;
    return (imageFile &&  imageFile.file) || imageUrl;
  }

  getPreviewFormData = () => {
    const {previewMapForm, previewPosterForm, previewAgendaForm} = this;
    return {
      posterUrl: this.normalizePreviewData(previewPosterForm),
      mapUrl: this.normalizePreviewData(previewMapForm),
      agendaUrl: this.normalizePreviewData(previewAgendaForm)
    }
  }

  getMapFormData = () => {
    const {mapForm} = this;
    const {location, marker} = mapForm.state;
    const {lat, lng} = marker.position;
    return {
      location: location,
      latitude: typeof lat === 'function' ? lat() : lat,
      longtitude: typeof lng === 'function' ? lng() : lng
    }
  }

  handleOnAdd = () => {
    const exhibitionData = this.getExhibitionFormData();
    const previewData = this.getPreviewFormData();
    const mapData = this.getMapFormData();
    const data = {
      ...exhibitionData,
      ...previewData,
      ...mapData
    }
    console.log(data);
    axios.post('http://161.246.5.227:8080/exhibitions/add', data)
      .then(response => {
        this.setState({openModal: true})
      }).catch(error => {
        console.log(error);
      })
  }

  render() {
    if(!this.state.catFetched) { return <div /> }
    const {id, name, description, category, startDate, endDate, categoryList} = this.state;
    const {agendaUrl, mapUrl, posterUrl, location, latitude, longtitude} = this.state;
    return (
      <div className="animated fadeIn">
        <div className="row">

        <Modal isOpen={this.state.openModal} toggle={this.toggleModal} className='modal-primary'>
          <ModalHeader toggle={this.toggleModal}>Success</ModalHeader>
          <ModalBody>
            We have added your exhibition!
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleModal}>OK</Button>{' '}
          </ModalFooter>
        </Modal>

          <div className="col-md-6">

            <ExhibitionForm
              name={name}
              description={description}
              category={category}
              startDate={startDate}
              endDate={endDate}
              onSubmit={data => this.handleOnSubmit(data)}
              categoryList={categoryList}
              ref={exhibitionForm => this.exhibitionForm = exhibitionForm}
              hideFooter
            />
              <PreviewForm
                title="Poster"
                imagePath=''
                onSubmit={imagePath => this.handleOnSubmit({posterUrl: imagePath})}
                ref={posterForm => this.previewPosterForm = posterForm}
                hideFooter
              />
              <PreviewForm
                title="Map"
                imagePath=''
                onSubmit={imagePath => this.handleOnSubmit({mapUrl: imagePath})}
                ref={mapForm => this.previewMapForm = mapForm}
                hideFooter
              />
              <PreviewForm
                title="Agenda"
                imagePath=''
                onSubmit={imagePath => this.handleOnSubmit({agendaUrl: imagePath})}
                ref={agendaForm => this.previewAgendaForm = agendaForm}
                hideFooter
              />
          </div>

          <div className="col-md-6">

            <MapForm
              location={location}
              position={{lat: 13.764912, lng: 100.538375}}
              onSubmit={data => this.handleOnSubmit(data)}
              ref={mapForm => this.mapForm = mapForm}
              hideFooter
            />
            <ContactForm onSubmit={data => console.log(data)} hideFooter />

          </div>
        </div>
        <div className="col-md-12" style={{paddingBottom: 20}}>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-block"
            style={{width: '40%', margin: 'auto', fontSize: '1rem'}}
            onClick={this.handleOnAdd}
          >
            <i className="fa fa-plus-circle" style={{paddingRight: 6}}/> Add this exhibition!
          </button>
        </div>
      </div>
    )
  }

}

export default AddExhibition;
