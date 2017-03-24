import React, { Component } from 'react';
import { Input, URLInput, FileInput, PreviewImage } from '../BuildingBlocks/BuildingBlocks';

class ContactForm extends Component {

  state = {
    logoUrl: '',
    logoFile: null
  }

  handleOnSubmit = e => {
    e.preventDefault();
    const {form} = this;
    const {logoUrl, logoFile} = this.state;
    const data = {
      name: form['contact-name-input'].value,
      description: form['contact-desc-input'].value,
      email: form['contact-email-input'].value,
      mobileNo: form['contact-tel-input'].value,
      facebook: form['contact-facebook-input'].value,
      facebookUrl: form['contact-facebook-url-input'].value,
    }
    this.props.onSubmit(data)
  }

  handleOnImageError = e => {
    if(this.props.imagePath) {
      e.target.src = this.props.imagePath;
    } else {
      e.target.src = "http://placehold.it/200x200";
    }
  }

  handleOnURLChange = e => {
    this.setState({logoUrl: e.target.value})
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
    const {logoUrl, logoFile} = this.state
    return (
      <div className="card">
        <div className="card-header">
          <strong>Contact</strong> form
        </div>
        <div className="card-block">
          <form ref={form => this.form = form} action="" method="post" encType="multipart/form-data" className="form-horizontal">

            <div className="row" style={{paddingBottom: 20}}>
              <div className="col-md-4">
                <PreviewImage
                  src={(logoFile && logoFile.file) || logoUrl}
                  onError={this.handleOnImageError}
                  style={{width: '100%', maxHeight: 180}}
                />
              </div>
              <div className="col-md-8">
                <URLInput
                  title="Logo"
                  value={logoUrl}
                  onChange={this.handleOnURLChange}
                />
                <FileInput
                  title="Upload photo"
                  name="logo"
                  value={logoFile}
                  onFileSelect={this.handleOnFileSelect}
                />
              </div>
            </div>

            <Input title="Name">
              <input type="text" id="contact-name-input" name="text-input" className="form-control" placeholder="Enter your contact name..."/>
            </Input>

            <Input title="Description">
              <textarea id="contact-desc-input" name="textarea-input" rows="5" className="form-control" placeholder="Enter the detail of your contact..." />
            </Input>

            <Input title="E-mail">
              <input type="email" id="contact-email-input" name="nf-email" className="form-control" placeholder="Enter your email..." />
            </Input>

            <Input title="Telephone number">
              <input type="tel" id="contact-tel-input" name="nf-tel" className="form-control" placeholder="Enter your telephone number..." />
            </Input>

            <Input title="Facebook">
              <input type="text" id="contact-facebook-input" name="text-input" className="form-control" placeholder="Enter your Facebook name..."/>
            </Input>

            <Input title="Facebook URL">
              <input type="url" id="contact-facebook-url-input" name="text-input" className="form-control" placeholder="Enter your Facebook URL..."/>
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

export default ContactForm;
