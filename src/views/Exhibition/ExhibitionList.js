import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';

class ExhibitionList extends Component {

  state = {
    fetched: false,
    exhibitions: []
  }

  componentWillMount() {
    axios.get('http://161.246.5.227:8080/exhibition/')
      .then(response => {
        const {content} = response.data;
        const exhibitions = content.map(ex => {
          return {
            id: ex.id,
            name: ex.exhibitionName,
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
            <button type="button" className="btn btn-primary" style={{cursor: 'pointer'}}>
                <i className="fa fa-edit"></i>&nbsp; Edit
            </button>
          </Link>
          <Link to={`/exhibition/${exhibition.id}/booth`} style={{color: 'white', padding: 2}}>
            <button type="button" className="btn btn-primary" style={{cursor: 'pointer', backgroundColor: '#50b6ce', borderColor: '#50b6ce'}}>
                <i className="fa fa-th-list"></i>&nbsp; Booth
            </button>
          </Link>
          {/* <span className="badge badge-success">Active</span> */}
        </td>
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
