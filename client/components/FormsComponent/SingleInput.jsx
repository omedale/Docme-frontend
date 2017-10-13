import React from 'react';

const SingleInput = (props) => (  
  <div>
    <input
      id={props.id}
      name={props.name}
      type={props.inputType}
      value={props.content}
      onChange={props.controlFunc}
    />
      <label>{props.title}</label>
  </div>
);

SingleInput.propTypes = {  
  inputType: React.PropTypes.oneOf(['text', 'number']).isRequired,
  title: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  controlFunc: React.PropTypes.func.isRequired,
  // content: React.PropTypes.oneOfType([
  //   React.PropTypes.string,
  //   React.PropTypes.number,
  // ]).isRequired,
  // placeholder: React.PropTypes.string,
};

export default SingleInput;  