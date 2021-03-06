import React, { Component } from 'react';
import { Input } from '../BuildingBlocks/BuildingBlocks';
import 'airbnb-js-shims/target/es2015';
import { DateRangePicker } from 'react-dates';

class ExhibitionForm extends Component {

  state = {
    startDate: this.props.startDate,
    endDate: this.props.endDate,
    focusedInput: null
  }

  handleOnSubmit = e => {
    e.preventDefault();
    const {form} = this;
    const {startDate, endDate} = this.state;
    const sDate = startDate ? startDate.format('YYYY-MM-DD') : null;
    const eDate = endDate ? endDate.format('YYYY-MM-DD') : null;
    const data = {
      name: form['name-input'].value,
      description: form['desc-textarea-input'].value,
      category: form['category-select'].value,
      websiteUrl: form['web-input'].value,
      customWebsiteText: form['web-text-input'].value,
      startDate: sDate,
      endDate: eDate
    }
    this.props.onSubmit(data)
  }

  render() {
    const {startDate, endDate, focusedInput} = this.state;
    return (
      <div className="card">
        <div className="card-header">
          <strong>Exhibition</strong> form
        </div>
        <div className="card-block">
          <form ref={form => this.form = form} action="" method="post" encType="multipart/form-data" className="form-horizontal">

            <Input title="Name" helpText="">
              <input
                type="text"
                id="name-input"
                name="text-input"
                className="form-control"
                placeholder="Enter your exhibition name"
                defaultValue={this.props.name}
              />
            </Input>

            <Input title="Description">
              <textarea
                id="desc-textarea-input"
                name="desc-textarea-input"
                rows="6"
                className="form-control"
                placeholder="Detail of your exhibition..."
                defaultValue={this.props.description}
              />
            </Input>

            <Input title="Category">
              <select
                id="category-select"
                name="category-select"
                className="form-control"
                size="1"
                onChange={e => this.setState({category: e.target.value})}
                defaultValue={this.props.category}
              >
                <optgroup label="Please select your category">
                  {this.props.categoryList.map(cat => <option value={cat} key={cat}>{cat}</option>)}
                </optgroup>
              </select>
            </Input>

            <Input title="Website">
              <input
                id="web-input"
                name="web-input"
                className="form-control"
                placeholder="Website of your exhibition..."
                defaultValue={this.props.websiteUrl}
              />
            </Input>

            <Input title="Custom website text">
              <input
                id="web-text-input"
                name="web-text-input"
                className="form-control"
                placeholder="Enter custom website text..."
                defaultValue={this.props.customWebsiteText}
              />
            </Input>

            <Input title="Dates">
              <DateRangePicker
                startDate={startDate}
                endDate={endDate}
                onDatesChange={({startDate, endDate}) => this.setState({startDate, endDate})}
                focusedInput={this.state.focusedInput}
                onFocusChange={focusedInput => this.setState({focusedInput})}
              />
            </Input>

          </form>
        </div>
        {!this.props.hideFooter &&
          <div className="card-footer">
            <button type="submit" className="btn btn-sm btn-primary" onClick={this.handleOnSubmit}>
              <i className="fa fa-dot-circle-o"></i> Submit
            </button>
            <button type="reset" className="btn btn-sm btn-danger"><i className="fa fa-ban"></i> Reset</button>
          </div>
        }
      </div>
    )
  }

}

export default ExhibitionForm;
