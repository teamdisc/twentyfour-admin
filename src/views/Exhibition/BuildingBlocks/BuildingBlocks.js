import React from 'react';

export const Input = ({title, helpText, children, shouldNewLine}) => {
  return (
    <div className={shouldNewLine ? "form-group" : "form-group row"}>
      <label
        className={shouldNewLine ? "form-control-label" : "col-md-3 form-control-label"}
        htmlFor="text-input">
        {title}
      </label>
      <div className={!shouldNewLine && "col-md-9"}>
        {children}
        <span className="help-block">{helpText}</span>
      </div>
    </div>
  )
}

export const PreviewImage = (props) => (
  <img
    src={props.src}
    onError={props.onError}
    alt="Preview"
    {...props}
  />
)

export const URLInput = ({title, value, onChange}) => (
  <Input title={title} shouldNewLine>
    <input
      className="form-control"
      type="url"
      id={`${title.toLowerCase()}-url-input`}
      name="url-input"
      placeholder="Enter URL of your photo..."
      value={value}
      onChange={onChange}
    />
  </Input>
)

export const FileInput = ({title, name, key, value, onFileSelect}) => (
  <Input title={title}>
    <input
      className="input-file"
      type="file"
      id={`${name.toLowerCase()}-file-input`}
      name="file-input"
      onChange={onFileSelect}
    />
  <label htmlFor={`${name.toLowerCase()}-file-input`}>
    <i className="fa fa-upload"> </i>
    {(value && value.name) || 'Choose a file'}
  </label>
  </Input>
)

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
