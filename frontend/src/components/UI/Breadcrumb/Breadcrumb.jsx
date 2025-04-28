import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Breadcrumb = ({ currentPage }) => {
  return (
    <div className="breadcrumb">
      <Link to="/" className="main-page__link button--text-underline">
        Головна
      </Link>
      <div className="breadcrumb__separator bg-image"></div>
      <p className="current-page button--text">{currentPage}</p>
    </div>
  );
};

Breadcrumb.propTypes = {
  currentPage: PropTypes.string.isRequired,
};
