import { Link } from 'react-router-dom';

export const BlogCard = () => {
  return (
    <div className="blog-card bg-image">
      <div className="blog-card__date button--text">7 квіт. 2025 р.</div>
      <div className="blog-card__bottom">
        <div className="blog-card__content">
          <h4 className="blog-card__title h4--bold">
            ТОП-10 популярних стилів інтер’єру 2025
          </h4>
          <p className="blog-card__short-text">
            У 2025 році інтер’єрні стилі продовжують адаптуватися до сучасного
            способу життя, поєднуючи естетику...
          </p>
          <Link
            to="#"
            className="blog-card__full-text-link button--text-underline"
          >
            Читати більше
          </Link>
        </div>
      </div>
    </div>
  );
};
