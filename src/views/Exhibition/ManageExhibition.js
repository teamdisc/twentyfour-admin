import React, { Component } from 'react';
import {InputTitle} from './BuildingBlocks/BuildingBlocks';
import MapForm from './MapForm/MapForm';

class ManageExhibition extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-md-6">

            <div className="card">
              <div className="card-header">
                <strong>Exhibition</strong> form
              </div>
              <div className="card-block">
                <form action="" method="post" encType="multipart/form-data" className="form-horizontal ">

                  <InputTitle title="Name" helpText="">
                    <input type="text" id="text-input" name="text-input" className="form-control" placeholder="Enter your exhibition name"/>
                  </InputTitle>

                  <InputTitle title="Description">
                      <textarea id="textarea-input" name="textarea-input" rows="9" className="form-control" placeholder="Detail of your exhibition..." />
                  </InputTitle>

                  <InputTitle title="Category">
                    <select id="select" name="select" className="form-control" size="1">
                      <optgroup label="Please select your category">
                        <option value="1">Home & Furniture</option>
                        <option value="2">Travel & Tourism</option>
                        <option value="3">Technology</option>
                      </optgroup>
                    </select>
                  </InputTitle>


                  <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="file-input">File input</label>
                    <div className="col-md-9">
                      <input type="file" id="file-input" name="file-input"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="file-multiple-input">Multiple File input</label>
                    <div className="col-md-9">
                      <input type="file" id="file-multiple-input" name="file-multiple-input" multiple/>
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
                <strong>Inline</strong> Form
              </div>
              <div className="card-block">
                <form action="" method="post" className="form-inline">
                  <div className="form-group">
                    <label htmlFor="exampleInputName2">Name</label>
                    <input type="text" className="form-control" id="exampleInputName2" placeholder="Jane Doe"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail2">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com"/>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-dot-circle-o"></i> Submit</button>
                <button type="reset" className="btn btn-sm btn-danger"><i className="fa fa-ban"></i> Reset</button>
              </div>
            </div>
          </div>

          <div className="col-md-6">

            <MapForm />

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
