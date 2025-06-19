import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const BreadCrumb = ({ items }) => {
  return (
    <div className="breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span key={index} className="breadcrumb__item">
            {isLast ? (
              <p className="current-page button--text">{item.title}</p>
            ) : (
              <Link
                to={item.href}
                className="main-page__link button--text-underline"
              >
                {item.title}
              </Link>
            )}
            {!isLast && <div className="breadcrumb__separator bg-image"></div>}
          </span>
        );
      })}
    </div>
  );
};

BreadCrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};
