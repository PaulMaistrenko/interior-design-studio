import PropTypes from 'prop-types';

export const MainLogo = ({ className = '' }) => {
  return (
    <a
      href="/"
      className={`main-logo ${className}`}
      aria-label="Перейти на головну"
    ></a>
  );
};

MainLogo.propTypes = {
  className: PropTypes.string,
};
