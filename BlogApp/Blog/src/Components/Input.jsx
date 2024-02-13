import React, { useId } from 'react';
import PropTypes from 'prop-types';
// it will recieves props from where this component will be  used
// forward ref is noting but recieving a ref from parent component
// as i saw in the tutorial of the techsith way to use forwardref in react component
const Input = React.forwardRef(
  ({ label, type, className = '', ...props }, pass) => {
    const id = useId();
    return (
      <div>
        {label && <label id={id}>{label}</label>}
        <input
          type={type}
          className={`${className}`}
          {...props}
          ref={pass}
          id={id}
        />
      </div>
    );
  },
);
Input.displayName = 'Input';
Input.propTypes = {
  label: PropTypes.string, // Validate label prop as a string
  type: PropTypes.string, // Validate type prop as a string
  className: PropTypes.string, // Validate className prop as a string
  // Add validation for other props as needed
};
export default Input;
