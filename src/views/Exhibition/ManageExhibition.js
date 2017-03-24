import React, { Component } from 'react';
import axios from 'axios';
import { Input } from './BuildingBlocks/BuildingBlocks';
import MapForm from './MapForm/MapForm';
import PreviewForm from './PreviewForm/PreviewForm';
import ExhibitionForm from './ExhibitionForm/ExhibitionForm';
import ContactForm from './ContactForm/ContactForm';

class ManageExhibition extends Component {

  handleOnSubmit = (type, imagePath) => {
    axios.post('http://161.246.5.227:8080/exhibition/2/update')
    .then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-md-6">
            <ExhibitionForm />
            <ContactForm />
            <MapForm />
          </div>

          <div className="col-md-6">

            <PreviewForm
              title="Poster"
              imagePath=""
              onSubmit={imagePath => this.handleOnSubmit('posterUrl', imagePath)}
            />
            <PreviewForm
              title="Map"
              imagePath=""
              onSubmit={imagePath => this.handleOnSubmit('mapUrl', imagePath)}
            />
            <PreviewForm
              title="Agenda"
              imagePath=""
              onSubmit={imagePath => this.handleOnSubmit('agendaUrl', imagePath)}
            />

            <div className="card">
              <div className="card-header">
                <strong>Horizontal</strong> Form
              </div>
              <div className="card-block">
                <form action="" method="post" className="form-horizontal ">
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="hf-email">Email</label>
                    <div className="col-md-9">
                      <input type="email" id="hf-email" name="hf-email" className="form-control" placeholder="Enter Email.."/>
                      <span className="help-block">Please enter your email</span>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="hf-password">Password</label>
                    <div className="col-md-9">
                      <input type="password" id="hf-password" name="hf-password" className="form-control" placeholder="Enter Password.."/>
                      <span className="help-block">Please enter your password</span>
                    </div>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-dot-circle-o"></i> Submit</button>
                <button type="reset" className="btn btn-sm btn-danger"><i className="fa fa-ban"></i> Reset</button>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <strong>Normal</strong> Form
              </div>
              <div className="card-block">
                <form action="" method="post">
                  <div className="form-group">
                    <label htmlFor="nf-email">Email</label>
                    <input type="email" id="nf-email" name="nf-email" className="form-control" placeholder="Enter Email.."/>
                    <span className="help-block">Please enter your email</span>
                  </div>
                  <div className="form-group">
                    <label htmlFor="nf-password">Password</label>
                    <input type="password" id="nf-password" name="nf-password" className="form-control" placeholder="Enter Password.."/>
                    <span className="help-block">Please enter your password</span>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-dot-circle-o"></i> Submit</button>
                <button type="reset" className="btn btn-sm btn-danger"><i className="fa fa-ban"></i> Reset</button>
              </div>
            </div>


            <div className="card">
              <div className="card-header">
                Input <strong>Grid</strong>
              </div>
              <div className="card-block">
                <form action="" method="post" className="form-horizontal ">

                  <div className="form-group row">
                    <div className="col-sm-3">
                      <input type="text" className="form-control" placeholder=".col-sm-3"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-4">
                      <input type="text" className="form-control" placeholder=".col-sm-4"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-5">
                      <input type="text" className="form-control" placeholder=".col-sm-5"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6">
                      <input type="text" className="form-control" placeholder=".col-sm-6"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-7">
                      <input type="text" className="form-control" placeholder=".col-sm-7"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-8">
                      <input type="text" className="form-control" placeholder=".col-sm-8"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-9">
                      <input type="text" className="form-control" placeholder=".col-sm-9"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-10">
                      <input type="text" className="form-control" placeholder=".col-sm-10"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-11">
                      <input type="text" className="form-control" placeholder=".col-sm-11"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-12">
                      <input type="text" className="form-control" placeholder=".col-sm-12"/>
                    </div>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-user"></i> Login</button>
                <button type="reset" className="btn btn-sm btn-danger"><i className="fa fa-ban"></i> Reset</button>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                Input <strong>Sizes</strong>
              </div>
              <div className="card-block">
                <form action="" method="post" className="form-horizontal ">
                  <div className="form-group row">
                    <label className="col-sm-3 form-control-label" htmlFor="input-small">Small Input</label>
                    <div className="col-sm-6">
                      <input type="text" id="input-small" name="input-small" className="form-control input-sm" placeholder=".input-sm"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-3 form-control-label" htmlFor="input-normal">Normal Input</label>
                    <div className="col-sm-6">
                      <input type="text" id="input-normal" name="input-normal" className="form-control" placeholder="Normal"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-3 form-control-label" htmlFor="input-large">Large Input</label>
                    <div className="col-sm-6">
                      <input type="text" id="input-large" name="input-large" className="form-control input-lg" placeholder=".input-lg"/>
                    </div>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-dot-circle-o"></i> Submit</button>
                <button type="reset" className="btn btn-sm btn-danger"><i className="fa fa-ban"></i> Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default ManageExhibition;
