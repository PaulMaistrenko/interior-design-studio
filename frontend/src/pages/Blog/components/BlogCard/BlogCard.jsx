import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const BlogCard = ({ article }) => {
  const { id, title, content, image, created_at } = article;
  return (
    <div
      className="blog-card bg-image"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="blog-card__date button--text">{created_at}</div>
      <div className="blog-card__bottom">
        <div className="blog-card__content">
          <h4 className="blog-card__title h4--bold">{title}</h4>
          <p className="blog-card__short-text">
            {content.slice(0, 100) + '...'}
          </p>
          <Link
            to={`/blog/${id}`}
            className="blog-card__full-text-link button--text-underline"
          >
            Читати більше
          </Link>
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    image: PropTypes.string,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
};
