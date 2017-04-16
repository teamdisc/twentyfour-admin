import React, { Component } from 'react';
import { RemovableInput } from '../BuildingBlocks/BuildingBlocks';

class CategoryForm extends Component {

  state = {
    categoryList: this.props.categoryList ? this.props.categoryList : []
  }

  handleOnAdd = () => {
    const categoryList = Object.assign([], this.state.categoryList);
    console.log(categoryList);
    categoryList.push("");
    this.setState({categoryList});
  }

  handleOnDelete = (index) => {
    const {categoryList} = this.state;
    this.setState({categoryList: categoryList.filter((cat,i) => i != index)})
  }

  handleOnSubmit = () => {
    const data = this.categoryList.filter(cat => cat != "");
    this.props.onSubmit({categoryList: data});
  }

  render() {
    const {categoryList} = this.state;
    return (
      <div className="card">
        <div className="card-header">
          <strong>Category</strong> form
        </div>
        <div className="card-block">
          {categoryList.map((cat,index) => {
            return (
              <RemovableInput
                key={index+cat}
                defaultValue={cat}
                onRemove={() => this.handleOnDelete(index)}
              />
            )
          })}
          <div style={{textAlign: 'center', paddingTop: 8}}>
            <button
              type="button"
              className="btn btn-success"
              style={{padding: '5px 20%'}}
              onClick={this.handleOnAdd}
            >
              <i className="fa fa-plus-square"></i>&nbsp; Add category
            </button>
          </div>
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

export default CategoryForm
