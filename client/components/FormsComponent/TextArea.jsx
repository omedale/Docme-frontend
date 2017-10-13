import React from 'react';

const TextArea = (props) => (  
  <div className="form-group">
    <textarea
      className="materialize-textarea"
      style={props.resize ? null : {resize: 'none'}}
      name={props.name}
      id={props.id}
      rows={props.rows}
      value={props.content}
      onChange={props.controlFunc}
     />
      <label>{props.title}</label>
  </div>
);

TextArea.propTypes = {  
  title: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  rows: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  // content: React.PropTypes.string.isRequired,
  resize: React.PropTypes.bool,
  // placeholder: React.PropTypes.string,
  controlFunc: React.PropTypes.func.isRequired
};

export default TextArea; 