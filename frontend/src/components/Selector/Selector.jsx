import PropTypes from 'prop-types';
import { DropdownButton } from '../UI/DropdownButton/DropdownButton';

export const Selector = ({ title, options, selected, onSelect }) => {
  return (
    <div className="style-selector">
      <DropdownButton
        title={title}
        options={options}
        selected={selected}
        onSelect={onSelect}
      />
    </div>
  );
};

Selector.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selected: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};
