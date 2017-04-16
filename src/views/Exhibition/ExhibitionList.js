import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';

class ExhibitionList extends Component {

  state = {
    fetched: false,
    exhibitions: []
  }

  componentWillMount() {
    axios.get('http://54.255.222.20:8080/exhibitions/all')
      .then(response => {
        const {data} = response;
        const exhibitions = data.map(ex => {
          return {
            id: ex.id,
            name: ex.name,
            category: ex.category,
            startDate: ex.startDate,
            endDate: ex.endDate
          }
        });
        this.setState({exhibitions, fetched: true})
      })
  }

  renderItem = (exhibition) => {
    return (
      <tr key={`${exhibition.id}-${exhibition.name}`}>
        <td>{exhibition.id}</td>
        <td>{exhibition.name}</td>
        <td>{exhibition.startDate}</td>
        <td>{exhibition.endDate}</td>
        <td>{exhibition.category}</td>
        <td style={{width: 240}}>
          <Link to={`/exhibition/${exhibition.id}/`} style={{color: 'white', padding: 2}}>
            <button type="button" className="btn btn-primary pointer">
                <i className="fa fa-edit"></i>&nbsp; Edit
            </button>
          </Link>
          <Link to={`/exhibition/${exhibition.id}/booth`} style={{color: 'white', padding: 2}}>
            <button type="button" className="btn btn-info pointer">
                <i className="fa fa-th-list"></i>&nbsp; Booth
            </button>
          </Link>
        </td>
        <td><Link to={`/exhibition/${exhibition.id}/user`} style={{color: 'white', padding: 2}}>
          <button type="button" className="btn btn-orange pointer">
              <i className="fa fa-user"></i>&nbsp; User
          </button>
        </Link></td>
      </tr>
    )
  }

  render() {
    if(!this.state.fetched) { return <div /> }
    const {exhibitions} = this.state;
    return (
      <div className="col-md-12 animated fadeIn">
        <div className="card">
          <div className="card-header">
            <i className="fa fa-align-justify"></i> <strong>Exhibition</strong> List
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
            <Link to={"/exhibition/add"}>+</Link>
            </button>
          </div>
          <div className="card-block">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Start date</th>
                  <th>End date</th>
                  <th>Category</th>
                  <th>Action</th>
                  <th>Registered</th>
                </tr>
              </thead>
              <tbody>
                {exhibitions.map(exhibition => this.renderItem(exhibition))}
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
    );
  }

}

export default ExhibitionList;
