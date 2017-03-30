import React, { Component } from 'react';
import { PreviewImage, URLInput, FileInput } from '../../Exhibition/BuildingBlocks/BuildingBlocks';

class BannerForm extends Component {

  state = {
    imageUrl: this.props.imagePath || '',
    imageFile: null,
    selectedIndex: this.props.selectedIndex,
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
    const {imageUrl, imageFile, selectedIndex} = this.state;
    var data = { id: this.props.id, exhibitionId: selectedIndex }
    if(imageFile) {
      data.bannerUrl = imageFile.file;
    } else {
      data.bannerUrl = imageUrl;
    }
    this.props.onSubmit(data);
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

  handleOnSelectExhibition = (item) => {
    this.setState({selectedIndex: item.id})
  }

  renderItem = (item, isActive=false) => {
    return (
      <a
        className={`list-group-item ${isActive && "active"} custom-a`}
        onClick={() => this.handleOnSelectExhibition(item)}
        key={item.id}
      >
        {item.name}
      </a>
    )
  }

  render() {
    // const {title} = this.props;
    const title = "Banner";
    const {imageUrl, imageFile, selectedIndex} = this.state;
    const {exhibitions, id} = this.props;
    return (
      <div className="card">
        <div className="card-header">
          <strong>{title}</strong> form
        </div>
        <form action="" method="post">
          <div className="card-block row">
            <div className="col-md-7 row">
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
                  name={`${title}-${id}`}
                  value={imageFile}
                  onFileSelect={this.handleOnSelect}
                />
              </div>
            </div>
            <div className="col-md-5">
              <div
                className="list-group"
                style={{
                  height: 185,
                  display: 'block',
                  overflowY: 'scroll'
                }}
              >
                {exhibitions.map(exh => this.renderItem(exh, exh.id==selectedIndex))}
              </div>
            </div>
          </div>
        </form>
        {!this.props.hideFooter &&
          <div className="card-footer">
            <button type="submit" className="btn btn-sm btn-primary" onClick={this.handleOnSubmit}>
              <i className="fa fa-dot-circle-o" /> Submit
            </button>
            <button type="reset" className="btn btn-sm btn-danger" onClick={() => this.setState({imageUrl: '', imageFile: null, selectedIndex: null})}>
              <i className="fa fa-ban" /> Reset
            </button>
          </div>
        }
      </div>
    )
  }

}

export default BannerForm;
