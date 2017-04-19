import React, { Component } from 'react';
import { Input, URLInput, FileInput } from '../../Exhibition/BuildingBlocks/BuildingBlocks';

class BoothForm extends Component {

  state = {
    // keywords: this.props.keywords ? this.props.keywords : []
    keywords: this.props.keywords ? this.props.keywords.split(' ') : []
    // keywords: ["team", "bank", "zhome", "power", "netnaja", "jinjin"]
    // keywords: "team zhome bank hello netnaja jinjin power"
  }

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
      keywords: this.state.keywords.reduce((acc,key) => acc + ' ' + key)
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

  handleOnRemoveKeyword = index => {
    const keywords = this.state.keywords.filter((k,i) => i != index);
    this.setState({keywords});
  }

  handleOnKeyPress = e => {
    if(e.charCode == 13 || e.charCode == 32) {
      e.preventDefault();
      if(e.target.value.length <= 0) { return }
      const {keywords} = this.state;
      this.setState({keywords: [...keywords, e.target.value]});
      e.target.value = '';
    }
  }

  render() {
    const {name, description, boothCode, contact} = this.props;
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
                defaultValue={name}
              />
            </Input>

            <Input title="Description">
              <textarea
                id="booth-desc-input"
                name="textarea-input"
                rows="5"
                className="form-control"
                placeholder="Enter the detail of your booth..."
                defaultValue={description}
              />
            </Input>

            <Input title="Booth code">
              <input
                type="text"
                id="booth-code-input"
                name="text-input"
                className="form-control"
                placeholder="Enter your booth code..."
                defaultValue={boothCode}
              />
            </Input>

            <Input title="E-mail">
              <input
                type="email"
                id="booth-email-input"
                name="nf-email"
                className="form-control"
                placeholder="Enter your email..."
                defaultValue={contact ? contact.email : null}
              />
            </Input>

            <Input title="Telephone number">
              <input
                type="tel"
                id="booth-tel-input"
                name="nf-tel"
                className="form-control"
                placeholder="Enter your telephone number..."
                defaultValue={contact ? contact.mobileNo : null}
              />
            </Input>

            <Input title="Facebook">
              <input
                type="text"
                id="booth-facebook-input"
                name="text-input"
                className="form-control"
                placeholder="Enter your Facebook name..."
                defaultValue={contact ? contact.facebook : null}
              />
            </Input>

            <Input title="Facebook URL">
              <input
                type="url"
                id="booth-facebook-url-input"
                name="text-input"
                className="form-control"
                placeholder="Enter your Facebook URL..."
                defaultValue={contact ? contact.facebookUrl : null}
              />
            </Input>

            <Input title="Keyword">
              <KeywordInput
                keywords={this.state.keywords}
                onRemoveKeyword={this.handleOnRemoveKeyword}
                onKeyPress={this.handleOnKeyPress}
              />
            </Input>

          </form>
        </div>
        {!this.props.hideFooter &&
          <div className="card-footer">
            <button type="submit" className="btn btn-sm btn-primary" onClick={this.handleOnSubmit}>
              <i className="fa fa-dot-circle-o"></i> Submit
            </button>
            <button type="reset" className="btn btn-sm btn-danger">
              <i className="fa fa-ban"></i> Reset
            </button>
          </div>
        }
      </div>
    )
  }

}

const Keyword = ({text, onRemove}) => {
  return (
    <div className="keyword">
      {text} <i className="fa fa-close" onClick={onRemove}/>
    </div>
  );
}

const KeywordInput = ({keywords, onRemoveKeyword, onKeyPress}) => {
  return (
    <div className="keyword-input form-control" onClick={e => e.target.lastChild.focus()}>
      {keywords.map((kw,i) =>
        <Keyword
          text={kw}
          onRemove={() => onRemoveKeyword(i)}
        />
      )}
      <input onKeyPress={onKeyPress}/>
    </div>
  );
}

export default BoothForm;
