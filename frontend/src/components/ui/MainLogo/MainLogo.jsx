import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './MainLogo.module.scss';

export const MainLogo = ({ className }) => {
  return className === 'header' ? (
    <Link to="/" className={`${styles.headerLogo} bg-image`} />
  ) : (
    <Link to="/" className={`${styles.footerLogo} bg-image`} />
  );
};

MainLogo.propTypes = {
  className: PropTypes.string,
};
