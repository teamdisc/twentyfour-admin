import React, { Component } from 'react';
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
    categoryList: []
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

  handleOnSubmit = (type, imagePath) => {
    axios.post('http://161.246.5.227:8080/exhibition/2/update')
      .then(response => {
        console.log(response);
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

            <ExhibitionForm
              name={name}
              description={description}
              category={category}
              startDate={startDate}
              endDate={endDate}
              onSubmit={data => console.log(data)}
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

            <MapForm onSubmit={data => console.log(data)}/>
            <ContactForm onSubmit={data => console.log(data)}/>

          </div>
        </div>
      </div>
    )
  }

}

export default ManageExhibition;
