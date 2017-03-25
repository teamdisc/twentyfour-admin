import React, { Component } from 'react';
import { URLInput, FileInput, PreviewImage } from '../BuildingBlocks/BuildingBlocks';
import _ from 'lodash';

class PreviewForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageUrl: props.imagePath,
      imageFile: null
    }
  }

  handleImageError = (event) => {
    if(this.props.imagePath) {
      event.target.src = this.props.imagePath;
    } else {
      event.target.src = "http://placehold.it/200x200";
    }
  }

  handleInputUrlChange = (event) => {
    this.setState({imageUrl: event.target.value})
  }

  handleOnSubmit = (event) => {
    const {imageUrl, imageFile} = this.state
    if(imageFile) {
      this.props.onSubmit(imageFile.file)
    } else {
      this.props.onSubmit(imageUrl)
    }
  }

  handleOnSelect = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        imageFile: {
          file: reader.result,
          name: file.name
        }
      })
    };
    reader.readAsDataURL(file)
  }

  render() {
    const {title} = this.props;
    const {imageUrl, imageFile} = this.state;
    return (
      <div className="card">
        <div className="card-header">
          <strong>{title}</strong> form
        </div>
        <form action="" method="post">
          <div className="card-block row">
            <div className="col-md-4">
              <PreviewImage
                src={(imageFile && imageFile.file) || imageUrl}
                onError={this.handleImageError}
                alt="Preview"
                style={{width: '100%', maxHeight: 180}}
              />
            </div>
            <div className="col-md-8">
              <URLInput
                title={`${title} URL`}
                value={imageUrl}
                onChange={this.handleInputUrlChange}
              />
              <FileInput
                title="Upload photo"
                name={title}
                value={imageFile}
                onFileSelect={this.handleOnSelect}
              />
            </div>
          </div>
        </form>
        <div className="card-footer">
          <button type="submit" className="btn btn-sm btn-primary" onClick={this.handleOnSubmit}>
            <i className="fa fa-dot-circle-o" /> Submit
          </button>
          <button type="reset" className="btn btn-sm btn-danger" onClick={() => this.setState({imageUrl: '', imageFile: null})}>
            <i className="fa fa-ban" /> Reset
          </button>
        </div>
      </div>
    )
  }

}

export default PreviewForm;
