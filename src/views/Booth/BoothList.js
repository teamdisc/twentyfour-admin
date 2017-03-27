import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import { PreviewImage } from '../Exhibition/BuildingBlocks/BuildingBlocks';

class BoothList extends Component {

  state = {
    fetched: false,
    booths: []
  }

  componentWillMount() {
    const {exhibitionId} = this.props.params;
    axios.get(`http://161.246.5.227:8080/exhibitions/${exhibitionId}/booths`)
      .then(response => {
        const {data} = response;
        const booths = data.map(b => {
          return {
            id: b.id,
            name: b.name,
            description: b.description,
            code: b.boothCode,
            logoUrl: b.logoUrl,
            exhibitionId: b.exhibitionId
          }
        });
        this.setState({booths, fetched: true})
      })
  }

  renderItem = (booth) => {
    return (
      <tr key={`${booth.id}-${booth.name}`}>
        <td style={{width: 50}}>{booth.id}</td>
        <td style={{verticalAlign: 'middle', width: 80, height: 80}}>
          <PreviewImage
            src={booth.logoUrl}
            onError={e => {e.target.src = "http://placehold.it/200x200"}}
            style={{width: '100%', 'borderRadius': '50%'}}
          />
        </td>
        <td>{booth.name}</td>
        <td>{booth.description}</td>
        <td>{booth.code}</td>
        <td>
          <Link to={`/exhibition/${booth.exhibitionId}/booth/${booth.id}`} style={{color: 'white'}}>
            <button type="button" className="btn btn-primary" style={{cursor: 'pointer'}}>
                <i className="fa fa-edit"></i>&nbsp; Edit
            </button>
          </Link>
        </td>
      </tr>
    )
  }

  render() {
    if(!this.state.fetched) { return <div /> }
    const {booths} = this.state;
    const {exhibitionId} = this.props.params;
    return (
      <div className="col-md-12 animated fadeIn">
        <div className="card">
          <div className="card-header">
            <i className="fa fa-align-justify"></i> <strong>Booth</strong> List
              <button
                className="btn btn-outline-primary"
                style={{
                  float: 'right',
                  padding: 0,
                  marginTop: -2,
                  marginBottom: -2,
                  width: 25,
                  height: 25
                }}
              >
              <Link to={`/exhibition/${exhibitionId}/booth/add`}>+</Link>
              </button>
          </div>
          <div className="card-block">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Logo</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Code</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {booths.map(booth => this.renderItem(booth))}
              </tbody>
            </table>
            <ul className="pagination">
              <li className="page-item"><a className="page-link" href="#">Prev</a></li>
              <li className="page-item active">
                <a className="page-link" href="#">1</a>
              </li>
              <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

}

export default BoothList;
