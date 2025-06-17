import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const ProjectCard = ({ title }) => {
  return (
    <div
      className={`${title.split(' ').join('-').toLowerCase()} project-card bg-image`}
    >
      <Link to="/" className="project-card__link">
        <h3 className="project-card__title h3--semibold">{title}</h3>
      </Link>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
};
