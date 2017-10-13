import React, {PropTypes} from 'react';

const Select = ({id, name, title, selectedOption, controlFunc, docAccess = []}) => (  
  <div>
    <select
      id={id}
      name={name}
      value={selectedOption}
      onChange={controlFunc}>
      <option defaultValue="" disabled>Select Access type</option>
      {docAccess.map(opt => {
        return <option value={opt.value.toLowerCase()} key={opt.value}> {opt.value} </option>;
      })
    }
    </select>
    <label>{title}</label>
  </div>
);

Select.propTypes = {  
  name: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  docAccess: React.PropTypes.arrayOf(PropTypes.object),
  selectedOption: React.PropTypes.string,
  controlFunc: React.PropTypes.func.isRequired,
};

export default Select;  