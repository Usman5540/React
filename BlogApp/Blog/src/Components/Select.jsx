import { forwardRef } from 'react';
import { useId } from 'react';
import PropTypes from 'prop-types';

const Select = forwardRef(({ options, label, clsname = '', ...props }, ref) => {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className={clsname}>
          {label}
        </label>
      )}
      <select ref={ref} className={clsname} {...props}>
        {options &&
          options.map((item, index) => (
            // We have to give an id to HTML elements in the loop for elements that are repeating
            <option key={index} value={item}>
              {item}
            </option> // Key takes a unique value, so we use options as unique ids because they are different from each other.
          ))}
      </select>
    </div>
  );
});
Select.displayName = 'Select'; // Set the display name
Select.propTypes = {
  options: PropTypes.array,
  label: PropTypes.string,
  clsname: PropTypes.string,
};

export default Select;
