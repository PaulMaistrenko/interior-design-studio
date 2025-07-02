import { SectionHeader } from '../../components/ui/SectionHeader';
import { BreadCrumb } from '../../components/ui/BreadCrumb';
import { Link } from 'react-router-dom';

export const Blog = () => {
  const currentPage = 'Блог';

  return (
    <div className="page blog-page">
      <div className="container">
        <BreadCrumb
          items={[
            { title: 'Головна', href: '/' },
            { title: currentPage, href: '/blog' },
          ]}
        />
      </div>
      <SectionHeader title="Блог" slogan={`“Натхнення починається зі слова”`} />
      <div className="container">
        <ul className="blogs-list">
          <li className="blogs-list__item">
            <div className="blog-card bg-image">
              <div className="blog-card__date button--text">{`7 квіт. 2025р.`}</div>
              <div className="blog-card__bottom">
                <div className="blog-card__content">
                  <h4 className="blog-card__title h4--bold">
                    ТОП-10 популярних стилів інтер’єру 2025
                  </h4>
                  <p className="blog-card__short-text">
                    У 2025 році інтер’єрні стилі продовжують адаптуватися до
                    сучасного способу життя, поєднуючи естетику...
                  </p>
                  <Link
                    to={`/blog`}
                    className="blog-card__full-text-link button--text-underline"
                  >
                    Читати більше
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li className="blogs-list__item">
            <div className="blog-card bg-image">
              <div className="blog-card__date button--text">{`7 квіт. 2025р.`}</div>
              <div className="blog-card__bottom">
                <div className="blog-card__content">
                  <h4 className="blog-card__title h4--bold">
                    ТОП-10 популярних стилів інтер’єру 2025
                  </h4>
                  <p className="blog-card__short-text">
                    У 2025 році інтер’єрні стилі продовжують адаптуватися до
                    сучасного способу життя, поєднуючи естетику...
                  </p>
                  <Link
                    to={`/blog`}
                    className="blog-card__full-text-link button--text-underline"
                  >
                    Читати більше
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li className="blogs-list__item">
            <div className="blog-card bg-image">
              <div className="blog-card__date button--text">{`7 квіт. 2025р.`}</div>
              <div className="blog-card__bottom">
                <div className="blog-card__content">
                  <h4 className="blog-card__title h4--bold">
                    ТОП-10 популярних стилів інтер’єру 2025
                  </h4>
                  <p className="blog-card__short-text">
                    У 2025 році інтер’єрні стилі продовжують адаптуватися до
                    сучасного способу життя, поєднуючи естетику...
                  </p>
                  <Link
                    to={`/blog`}
                    className="blog-card__full-text-link button--text-underline"
                  >
                    Читати більше
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li className="blogs-list__item">
            <div className="blog-card bg-image">
              <div className="blog-card__date button--text">{`7 квіт. 2025р.`}</div>
              <div className="blog-card__bottom">
                <div className="blog-card__content">
                  <h4 className="blog-card__title h4--bold">
                    ТОП-10 популярних стилів інтер’єру 2025
                  </h4>
                  <p className="blog-card__short-text">
                    У 2025 році інтер’єрні стилі продовжують адаптуватися до
                    сучасного способу життя, поєднуючи естетику...
                  </p>
                  <Link
                    to={`/blog`}
                    className="blog-card__full-text-link button--text-underline"
                  >
                    Читати більше
                  </Link>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
