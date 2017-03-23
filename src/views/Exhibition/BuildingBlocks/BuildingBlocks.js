import React from 'react';

export const InputTitle = ({title, helpText, children, shouldNewLine}) => {
  return (
    <div className={shouldNewLine ? "form-group" : "form-group row"}>
      <label
        className={shouldNewLine ? "form-control-label" : "col-md-3 form-control-label"}
        htmlFor="text-input">
        {title}
      </label>
      <div className="col-md-9">
        {children}
        <span className="help-block">{helpText}</span>
      </div>
    </div>
  )
}

//MARK:- not ready-use!
export const Card = ({headerChildren, children, footerChildren}) => {
  return (
    <div className="card">
      <div className="card-header">
        {headerChildren}
      </div>
      <div className="card-block">
        {children}
      </div>
      <div className="card-footer">
        {footerChildren}
      </div>
    </div>
  )
}
