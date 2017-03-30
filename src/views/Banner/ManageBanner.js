import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter }  from 'reactstrap';
import BannerForm from './BannerForm/BannerForm';
import axios from 'axios';

class ManageBanner extends Component {

  state = {
    fetched: false,
    banners: [],
    exhibitionList: [],
    openModal: false
  }

  componentWillMount() {
    axios.get('http://161.246.5.227:8080/exhibitions/getBanner')
      .then(response => {
        const {data} = response;
        this.setState({
          fetched: true,
          banners: data.banners,
          exhibitionList: data.exhibitions
        })
      })
  }

  handleOnSubmit = data => {
    axios.post('http://161.246.5.227:8080/exhibitions/editBanner', data)
      .then(response => {
        this.setState({openModal: true})
      }).catch(error => {
        console.log(error);
      })
  }

  toggleModal = () => {
    this.setState({openModal: !this.state.openModal})
  }

  render() {
    if(!this.state.fetched) { return <div /> }
    const {banners, exhibitionList} = this.state;
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-md-12">

            <Modal isOpen={this.state.openModal} toggle={this.toggleModal} className='modal-primary'>
              <ModalHeader toggle={this.toggleModal}>Success</ModalHeader>
              <ModalBody>
                The banner has been updated!
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggleModal}>OK</Button>{' '}
              </ModalFooter>
            </Modal>

            {
              banners.map((b) =>
                <BannerForm
                  exhibitions={exhibitionList}
                  key={b.id}
                  id={b.id}
                  imagePath={b.bannerUrl}
                  selectedIndex={b.exhibitionId}
                  onSubmit={data => this.handleOnSubmit(data)}
                />
            )}
          </div>
        </div>
      </div>
    )
  }

}

export default ManageBanner;
