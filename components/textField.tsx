import React, { useState } from "react";
import PropTypes from 'prop-types';

type Props = {
  label?: string;
  type?:string;
  value?:{};
  placeholder?:string;
  id: string;
}

export const TextField = ({label, type, value, placeholder}:Props) => {
  
  return (
    <div className="form-group">
      {label && <label htmlFor="app-input-field">{label}</label>}

      {type === "textarea" ? (
        <textarea
          className="form-control"
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          type={type}
          className="form-control"
          placeholder={placeholder}
        ></input>
      )}
     
    </div>
  );
};

TextField.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

TextField.defaultProps = {
  value: '',
  label: '',
  placeholder: '',
  type: 'text',
};
export default TextField;
