import PropTypes from 'prop-types';

export const DropdownButton = ({ title }) => {
  return (
    <button className="dropdown-button button button--text">{title}</button>
  );
};

DropdownButton.propTypes = {
  title: PropTypes.string.isRequired,
};
