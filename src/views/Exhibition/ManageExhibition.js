import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter }  from 'reactstrap';
import axios from 'axios';
import MapForm from './MapForm/MapForm';
import PreviewForm from './PreviewForm/PreviewForm';
import ExhibitionForm from './ExhibitionForm/ExhibitionForm';
import ContactForm from './ContactForm/ContactForm';

class ManageExhibition extends Component {

  state = {
    exhFetched: false,
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
    const {exhibitionId} = this.props.params;
    axios.get(`http://161.246.5.227:8080/exhibition/${exhibitionId}`)
      .then(response => {
        const {data} = response
        this.setState({
          exhFetched: true,
          id: data.id,
          name: data.exhibitionName,
          description: data.description,
          category: data.category,
          startDate: data.startDate,
          endDate: data.endDate,
          mapUrl: data.mapUrl,
          agendaUrl: data.agendaUrl,
          posterUrl: data.posterUrl,
          location: data.location,
          latitude: data.latitude,
          longtitude: data.longtitude
        })
      })
    axios.get('http://161.246.5.227:8080/exhibition/categories')
      .then(response => this.setState({catFetched: true, categoryList: response.data}))
  }

  toggleModal = () => {
    this.setState({openModal: !this.state.openModal});
  }

  handleOnSubmit = (type, imagePath) => {
    const {exhibitionId} = this.props.params;
    axios.post(`http://161.246.5.227:8080/exhibition/${exhibitionId}/update`, {
      [type]: imagePath
    }).then(response => {
        this.setState({openModal: true})
    }).catch(error => {
        console.log(error);
    })
  }

  handleOnFormSubmit = (data) => {
    const {exhibitionId} = this.props.params;
    axios.post(`http://161.246.5.227:8080/exhibition/${exhibitionId}/update`, data)
      .then(response => {
          this.setState({openModal: true})
      }).catch(error => {
          console.log(error);
      })
  }

  render() {
    if(!this.state.exhFetched || !this.state.catFetched) { return <div /> }
    const {id, name, description, category, startDate, endDate, categoryList} = this.state;
    const {agendaUrl, mapUrl, posterUrl, location, latitude, longtitude} = this.state;
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-md-6">

            <Modal isOpen={this.state.openModal} toggle={this.toggleModal} className='modal-primary'>
              <ModalHeader toggle={this.toggleModal}>Success</ModalHeader>
              <ModalBody>
                Your exhibition detail has been updated!
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggleModal}>OK</Button>{' '}
              </ModalFooter>
            </Modal>

            <ExhibitionForm
              name={name}
              description={description}
              category={category}
              startDate={startDate}
              endDate={endDate}
              onSubmit={data => this.handleOnFormSubmit(data)}
              categoryList={categoryList}
            />
              <PreviewForm
                title="Poster"
                imagePath={posterUrl}
                onSubmit={imagePath => this.handleOnSubmit('posterUrl', imagePath)}
              />
              <PreviewForm
                title="Map"
                imagePath={mapUrl}
                onSubmit={imagePath => this.handleOnSubmit('mapUrl', imagePath)}
              />
              <PreviewForm
                title="Agenda"
                imagePath={agendaUrl}
                onSubmit={imagePath => this.handleOnSubmit('agendaUrl', imagePath)}
              />
          </div>

          <div className="col-md-6">

            <MapForm
              location={location}
              position={{lat: latitude, lng: longtitude}}
              onSubmit={data => this.handleOnFormSubmit(data)}
            />
            <ContactForm onSubmit={data => console.log(data)}/>

          </div>
        </div>
      </div>
    )
  }

}

export default ManageExhibition;
