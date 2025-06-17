import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const MainLogo = ({ className }) => {
  return <Link to="/" className={`${className} bg-image`} />;
};

MainLogo.propTypes = {
  className: PropTypes.string,
};
