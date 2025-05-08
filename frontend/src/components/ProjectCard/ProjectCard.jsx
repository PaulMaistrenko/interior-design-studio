import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const ProjectCard = ({ title, className = '' }) => {
  return (
    <li
      className={`projects__item ${className} ${title.toLowerCase().split(' ').join('-')} bg-image`}
    >
      <Link to="/" className="project__link">
        <h3 className="project__title h3--semibold">{title}</h3>
        <div className="right__arrow-icon bg-image"></div>
      </Link>
    </li>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
