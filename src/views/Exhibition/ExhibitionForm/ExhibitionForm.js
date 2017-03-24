import React, { Component } from 'react';
import { Input } from '../BuildingBlocks/BuildingBlocks';
import { DateRangePicker } from 'react-dates';

class ExhibitionForm extends Component {

  state = {
    startDate: null,
    endDate: null,
    focusedInput: null
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <strong>Exhibition</strong> form
        </div>
        <div className="card-block">
          <form action="" method="post" encType="multipart/form-data" className="form-horizontal ">

            <Input title="Name" helpText="">
              <input type="text" id="name-input" name="text-input" className="form-control" placeholder="Enter your exhibition name"/>
            </Input>

            <Input title="Description">
              <textarea id="textarea-input" name="textarea-input" rows="6" className="form-control" placeholder="Detail of your exhibition..." />
            </Input>

            <Input title="Category">
              <select id="select" name="select" className="form-control" size="1">
                <optgroup label="Please select your category">
                  <option value="1">Home & Furniture</option>
                  <option value="2">Travel & Tourism</option>
                  <option value="3">Technology</option>
                </optgroup>
              </select>
            </Input>

            <Input title="Dates">
              <DateRangePicker
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                onDatesChange={({startDate, endDate}) => {
                  console.log(startDate);
                  console.log(endDate);
                  this.setState({startDate, endDate})
                }}
                focusedInput={this.state.focusedInput}
                onFocusChange={focusedInput => this.setState({focusedInput})}
              />
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

export default ExhibitionForm;
