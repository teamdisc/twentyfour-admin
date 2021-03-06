import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import Auth from '../../../Auth';

class Login extends Component {

  handleOnLogin = () => {
    Auth.authenUser('accessToken12');
    const {location} = this.props;
    if(location.state && location.state.nextPathname) {
      hashHistory.push(location.state.nextPathname);
    } else {
      hashHistory.push('/');
    }
  }

  // signInFunction({params}, (err, res) => {
  //   // Now in the sign in callback
  //   if (err)
  //     alert("Please try again")
  //   else {
  //     const location = this.props.location
  //     if (location.state && location.state.nextPathname) {
  //       browserHistory.push(location.state.nextPathname)
  //     } else {
  //       browserHistory.push('/')
  //     }
  //   }
  // })

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card-group mb-0">
              <div className="card p-2">
                <div className="card-block">
                  <h1>Login</h1>
                  <p className="text-muted">Sign In to your account</p>
                  <div className="input-group mb-1">
                    <span className="input-group-addon"><i className="icon-user"></i></span>
                    <input type="text" className="form-control" placeholder="Username"/>
                  </div>
                  <div className="input-group mb-2">
                    <span className="input-group-addon"><i className="icon-lock"></i></span>
                    <input type="password" className="form-control" placeholder="Password"/>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <button type="button" className="btn btn-primary px-2" onClick={this.handleOnLogin}>Login</button>
                    </div>
                    <div className="col-6 text-right">
                      <button type="button" className="btn btn-link px-0">Forgot password?</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card card-inverse card-primary py-3 hidden-md-down" style={{ width: 44 + '%' }}>
                <div className="card-block text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>This admin panel is limited exclusively to organizer and exhibitor. If you are so and do not have an account, please contact us.</p>
                    <button type="button" className="btn btn-primary active mt-1">Contact us</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
