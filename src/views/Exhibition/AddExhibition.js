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
    id: null,
    name: null,
    description: null,
    category: null,
    startDate: null,
    endDate: null,
    mapUrl: null,
    agendaUrl: null,
    posterUrl: null,
    location: null,
    longtitude: null,
    latitude: null,
    categoryList: [],
    openModal: false,
  }

  componentWillMount() {
    axios.get('http://161.246.5.227:8080/exhibition/categories')
      .then(response => this.setState({catFetched: true, categoryList: response.data}))
  }

  toggleModal = () => {
    this.setState({openModal: !this.state.openModal});
  }

  handleOnSubmit = (data) => {
    const {exhibitionId} = this.props.params;
    axios.post(`http://161.246.5.227:8080/exhibition/${exhibitionId}/update`, data)
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
            Your exhibition detail has been updated!
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
              hideFooter
            />
              <PreviewForm
                title="Poster"
                imagePath=''
                onSubmit={imagePath => this.handleOnSubmit({posterUrl: imagePath})}
                hideFooter
              />
              <PreviewForm
                title="Map"
                imagePath=''
                onSubmit={imagePath => this.handleOnSubmit({mapUrl: imagePath})}
                hideFooter
              />
              <PreviewForm
                title="Agenda"
                imagePath=''
                onSubmit={imagePath => this.handleOnSubmit({agendaUrl: imagePath})}
                hideFooter
              />
          </div>

          <div className="col-md-6">

            <MapForm
              location={location}
              position={{lat: latitude, lng: longtitude}}
              onSubmit={data => this.handleOnSubmit(data)}
              hideFooter
            />
          <ContactForm onSubmit={data => console.log(data)} hideFooter />

          </div>
        </div>
      </div>
    )
  }

}

export default AddExhibition;
