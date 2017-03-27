import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter }  from 'reactstrap';
import axios from 'axios';
import PreviewForm from '../Exhibition/PreviewForm/PreviewForm';
import BoothForm from './BoothForm/BoothForm';

class ManageBooth extends Component {

  state = {
    fetched: false,
    booth: {},
    openModal: false
  }

  componentWillMount() {
    const {boothId, exhibitionId} = this.props.params;
    axios.get(`http://161.246.5.227:8080/exhibitions/${exhibitionId}/booths/${boothId}`)
      .then(response => {
        const {data} = response;
        this.setState({
          fetched: true,
          booth: data
        })
      })
  }

  toggleModal = () => {
    this.setState({openModal: !this.state.openModal});
  }

  handleOnSubmit = (data) => {
    const {boothId, exhibitionId} = this.props.params;
    axios.post(`http://161.246.5.227:8080/exhibitions/${exhibitionId}/booths/${boothId}/update`, data)
      .then(response => {
          this.setState({openModal: true})
      }).catch(error => {
          console.log(error);
      })
  }

  render() {
    if(!this.state.fetched) { return <div /> }
    const {id, name, description, boothCode, logoUrl, email, mobileNo, facebook, facebookUrl, brochureUrl} = this.state.booth;
    return (
      <div className="animated fadeIn">
        <div className="row">

          <Modal isOpen={this.state.openModal} toggle={this.toggleModal} className='modal-primary'>
            <ModalHeader toggle={this.toggleModal}>Success</ModalHeader>
            <ModalBody>
              Your booth detail has been updated!
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggleModal}>OK</Button>{' '}
            </ModalFooter>
          </Modal>

          <div className="col-md-6">
            <PreviewForm
              title="Booth Logo"
              imagePath={logoUrl}
              onSubmit={imagePath => this.handleOnSubmit({logoUrl: imagePath})}
            />
            <PreviewForm
              title="Brochure"
              imagePath={brochureUrl}
              onSubmit={imagePath => this.handleOnSubmit({brochureUrl: imagePath})}
            />
          </div>
          <div className="col-md-6">
            <BoothForm
              {...this.state.booth}
              onSubmit={data => this.handleOnSubmit(data)}
            />
          </div>
        </div>
      </div>
    )
  }

}

export default ManageBooth;
