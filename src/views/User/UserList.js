import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router';
import { Progress } from 'reactstrap';

class UserList extends Component {

  state = {
    fetched: true,
    users: []
  }

  componentWillMount() {
    const {exhibitionId} = this.props.params;
    axios.get(`http://54.255.222.20:8080/exhibitions/${exhibitionId}/user`)
      .then(response => {
        const {data} = response;
        const users = data.map(u => {
          return {
            id: u.id,
            name: u.name,
            email: u.email,
            mobileNo: u.mobileNo,
            companyName: u.companyName,
            registeredDate: moment(u.registeredDate)
          }
        });
        this.setState({users, fetched: true})
      })
  }

  isMale = (gender) => {
    return gender.toLowerCase() === "male"
  }

  renderItem = (user) => {
    // const user = {
    //   id: "31246834338481",
    //   name: "Pirush Prechathavanich",
    //   gender: "male",
    //   email: "pirush.t@gmail.com",
    //   mobileNo: "081-823-8530"
    // }
    return (
      <tr key={user.id}>
        <td className="text-center">
          <div className="avatar">
            <img src={'img/avatars/avatar.png'} className="img-avatar" alt="user-avatar"/>
          </div>
        </td>
        <td>
          <div>{user.name}</div>
          <div className="small text-muted">
            Registered: {user.registeredDate.format('MMM D, YYYY')}
          </div>
        </td>
        <td className="text-center">
          {user.gender ?
            <i
              className={this.isMale(user.gender) ? "fa fa-mars" : "fa fa-venus"}
              style={{
                width: 30,
                backgroundColor: this.isMale(user.gender) ? "#64c2de" : "#dc6f7e",
                padding: 8,
                color: "white",
                borderRadius: "100%"
              }}/>
            :
            <i
              className="fa fa-neuter"
              style={{
                width: 30,
                backgroundColor: "#cfd8dc",
                padding: 8,
                color: "white",
                borderRadius: "100%"
              }}/>
          }
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
          <i className="fa fa-building-o" style={{paddingRight: 6, fontSize: 13}}/>
          {user.companyName}
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
                  <th>Company</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => this.renderItem(u))}
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
