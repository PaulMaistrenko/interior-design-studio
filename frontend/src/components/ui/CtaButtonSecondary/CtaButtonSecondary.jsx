import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const CtaButtonSecondary = ({
  title,
  link,
  type = '',
  size = 'large',
}) => {
  return (
    <Link
      to={link}
      className={
        type === 'with-arrow'
          ? `cta-button-secondary__arrow-type cta-button-secondary button--text ${size}-button`
          : `cta-button-secondary button--text ${size}-button`
      }
    >
      <span>{title}</span>
    </Link>
  );
};

CtaButtonSecondary.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
