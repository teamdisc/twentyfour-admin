import React, { Component } from 'react';
import { Input } from '../BuildingBlocks/BuildingBlocks';

class ContactForm extends Component {

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <strong>Contact</strong> form
        </div>
        <div className="card-block">
          <form action="" method="post" encType="multipart/form-data" className="form-horizontal">

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
          <button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-dot-circle-o"></i> Submit</button>
          <button type="reset" className="btn btn-sm btn-danger"><i className="fa fa-ban"></i> Reset</button>
        </div>
      </div>
    )
  }

}

export default ContactForm;
