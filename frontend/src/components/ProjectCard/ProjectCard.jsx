import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const ProjectCard = ({ title, className = '' }) => {
  const formattedToClassTitle = title.toLowerCase().split(' ').join('-');

  return (
    <li
      className={`projects__item ${className} ${formattedToClassTitle} bg-image`}
    >
      <Link to={`/${formattedToClassTitle}`} className="project__link">
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
