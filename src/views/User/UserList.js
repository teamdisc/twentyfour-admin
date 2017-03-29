import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import { Progress } from 'reactstrap';

class UserList extends Component {

  state = {
    fetched: true,
    users: []
  }

  componentWillMount() {
    axios.get('http://161.246.5.227:8080/exhibitions/')
      .then(response => {
        const {content} = response.data;
        const users = content.map(ex => {
          return {
            id: ex.id,
            name: ex.name,
            category: ex.category,
            startDate: ex.startDate,
            endDate: ex.endDate
          }
        });
        this.setState({users, fetched: true})
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

  isMale = (gender) => {
    return gender.toLowerCase() === "male"
  }

  renderItem = () => {
    const user = {
      id: "31246834338481",
      name: "Pirush Prechathavanich",
      gender: "male",
      email: "pirush.t@gmail.com",
      mobileNo: "081-823-8530"
    }
    return (
      <tr>
        <td className="text-center">
          <div className="avatar">
            <img src={'img/avatars/5.jpg'} className="img-avatar" alt="user-avatar"/>
          </div>
        </td>
        <td>
          <div>{user.name}</div>
          <div className="small text-muted">
            Registered: Jan 1, 2015
          </div>
        </td>
        <td className="text-center">
          <i
            className={this.isMale(user.gender) ? "fa fa-mars" : "fa fa-venus"}
            style={{
              width: 30,
              backgroundColor: this.isMale(user.gender) ? "#64c2de" : "#dc6f7e",
              padding: 8,
              color: "white",
              borderRadius: "100%"
            }}/>
        </td>
        <td>
          <div className="clearfix">
            {user.email}
          </div>
        </td>
        <td className="text-center">
          <i className="fa fa-phone" style={{paddingRight: 6, fontSize: 13}}/>
          {user.mobileNo}
        </td>
        <td>
          <div className="small text-muted">Last login</div>
          <strong>5 minutes ago</strong>
        </td>
      </tr>
    );
  }

  render() {
    if(!this.state.fetched) { return <div /> }
    const {users} = this.state;
    return (
      <div className="col-md-12 animated fadeIn">
        <div className="card">
          <div className="card-header">
            <i className="fa fa-align-justify"></i> <strong>User</strong> List
          </div>
          <div className="card-block">
            <table className="table table-hover table-outline">
              <thead className="thead-default">
                <tr>
                  <th className="text-center"><i className="icon-people"></i></th>
                  <th>User</th>
                  <th className="text-center">Gender</th>
                  <th>E-mail</th>
                  <th className="text-center">Mobile no.</th>
                  <th>Activity</th>
                </tr>
              </thead>
              <tbody>
                {[1,2,3,4,5].map(() => this.renderItem())}
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

export default UserList;
