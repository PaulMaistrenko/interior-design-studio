import PropTypes from 'prop-types';
import { useState } from 'react';

export const DropdownButton = ({ title, options, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div className="dropdown-button-wrapper">
      <button
        className="dropdown-button button button--text"
        onClick={toggleDropdown}
      >
        {selected || title}
      </button>
      {isOpen && (
        <ul className="dropdown-options" role="listbox">
          {options.map((option) => (
            <li
              key={option}
              className="dropdown-option text-secondary--regular"
            >
              <label>
                <input type="checkbox" />
                {option}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

DropdownButton.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selected: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};
