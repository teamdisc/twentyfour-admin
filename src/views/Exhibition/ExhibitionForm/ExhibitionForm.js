import React, { Component } from 'react';
import { InputTitle } from '../BuildingBlocks/BuildingBlocks';
import { DateRangePicker } from 'react-dates';

class ExhibitionForm extends Component {

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <strong>Exhibition</strong> form
        </div>
        <div className="card-block">
          <form action="" method="post" encType="multipart/form-data" className="form-horizontal ">

            <InputTitle title="Name" helpText="">
              <input type="text" id="name-input" name="text-input" className="form-control" placeholder="Enter your exhibition name"/>
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

            <InputTitle title="Timerange">
              <DateRangePicker
                startDate={null}
                endDate={null}
              />
            </InputTitle>

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
