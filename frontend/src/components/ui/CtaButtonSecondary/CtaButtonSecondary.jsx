import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const CtaButtonSecondary = ({ title, link }) => {
  return (
    <Link to={link} className="cta-button-secondary button--text">
      <span>{title}</span>
    </Link>
  );
};

CtaButtonSecondary.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
