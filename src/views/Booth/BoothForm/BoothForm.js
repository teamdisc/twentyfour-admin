import React, { Component } from 'react';
import { Input, URLInput, FileInput } from '../../Exhibition/BuildingBlocks/BuildingBlocks';

class BoothForm extends Component {

  handleOnSubmit = e => {
    e.preventDefault();
    const {form} = this;
    const data = {
      name: form['booth-name-input'].value,
      description: form['booth-desc-input'].value,
      boothCode: form['booth-code-input'].value,
      email: form['booth-email-input'].value,
      mobileNo: form['booth-tel-input'].value,
      facebook: form['booth-facebook-input'].value,
      facebookUrl: form['booth-facebook-url-input'].value,
    }
    this.props.onSubmit(data)
  }

  handleOnFileSelect = e => {
    e.preventDefault();
    let reader = new FileReader()
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        logoFile: {
          file: reader.result,
          name: file.name
        }
      })
    };
    reader.readAsDataURL(file);
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <strong>Booth</strong> form
        </div>
        <div className="card-block">
          <form ref={form => this.form = form} action="" method="post" encType="multipart/form-data" className="form-horizontal">

            <Input title="Name">
              <input
                type="text"
                id="booth-name-input"
                name="text-input"
                className="form-control"
                placeholder="Enter your booth name..."
                defaultValue={this.props.name}
              />
            </Input>

            <Input title="Description">
              <textarea
                id="booth-desc-input"
                name="textarea-input"
                rows="5"
                className="form-control"
                placeholder="Enter the detail of your booth..."
                defaultValue={this.props.description}
              />
            </Input>

            <Input title="Booth code">
              <input
                type="text"
                id="booth-code-input"
                name="text-input"
                className="form-control"
                placeholder="Enter your booth code..."
                defaultValue={this.props.boothCode}
              />
            </Input>

            <Input title="E-mail">
              <input
                type="email"
                id="booth-email-input"
                name="nf-email"
                className="form-control"
                placeholder="Enter your email..."
                defaultValue={this.props.email}
              />
            </Input>

            <Input title="Telephone number">
              <input
                type="tel"
                id="booth-tel-input"
                name="nf-tel"
                className="form-control"
                placeholder="Enter your telephone number..."
                defaultValue={this.props.mobileNo}
              />
            </Input>

            <Input title="Facebook">
              <input
                type="text"
                id="booth-facebook-input"
                name="text-input"
                className="form-control"
                placeholder="Enter your Facebook name..."
                defaultValue={this.props.facebook}
              />
            </Input>

            <Input title="Facebook URL">
              <input
                type="url"
                id="booth-facebook-url-input"
                name="text-input"
                className="form-control"
                placeholder="Enter your Facebook URL..."
                defaultValue={this.props.facebookUrl}
              />
            </Input>

          </form>
        </div>
        <div className="card-footer">
          <button type="submit" className="btn btn-sm btn-primary" onClick={this.handleOnSubmit}>
            <i className="fa fa-dot-circle-o"></i> Submit
          </button>
          <button type="reset" className="btn btn-sm btn-danger">
            <i className="fa fa-ban"></i> Reset
          </button>
        </div>
      </div>
    )
  }

}

export default BoothForm;
