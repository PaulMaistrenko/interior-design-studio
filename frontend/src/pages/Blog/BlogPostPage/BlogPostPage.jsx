import { useParams } from 'react-router-dom';
import { BreadCrumb } from '../../../components/UI/BreadCrumb/BreadCrumb';
import { BlogCardSection } from '../BlogPostSection/BlogPostSection';
import mainPoster from '../../../assets/images/blog/blog-card-page/main-poster.png';
import { BlogPostCta } from '../BlogPostCta/BlogPostCta';

export const BlogPostPage = () => {
  const { blogSlug } = useParams();
  return (
    <div className="page blog-card-page">
      <div className="container">
        <BreadCrumb
          items={[
            { title: 'Головна', href: '/' },
            { title: 'Блог', href: '/blog' },
            {
              title: 'ТОП-10 популярних стилів інтер’єру 2025',
              href: `/blog/${blogSlug}`,
            },
          ]}
        />
        <img
          src={mainPoster}
          alt="blog card"
          className="blog-card-page__main-poster"
        />
        <article className="blog-card-page__text-content grid">
          <h1 className="blog-card-page__title h1--bold grid--onDesktop-2-11">
            ТОП-10 популярних стилів інтер’єру 2025
          </h1>
          <p className="blog-card-page__description grid--onDesktop-2-11">
            У 2025 році інтер’єрні стилі продовжують адаптуватися до сучасного
            способу життя, поєднуючи естетику, функціональність і турботу про
            комфорт. Серед головних трендів — натуральні матеріали, м’які форми,
            спокійні кольори та увага до сталого дизайну. У цій статті зібрані
            найактуальніші стилі цього року, їхні ключові риси, палітра,
            переваги та те, як кожен із них можна адаптувати навіть для
            невеликих просторів.
          </p>
        </article>
        <ul className="blog-card__list">
          <li className="blog-card__item">
            <BlogCardSection />
          </li>
          <li className="blog-card__item">
            <BlogCardSection />
          </li>
          <li className="blog-card__item">
            <BlogCardSection />
          </li>
          <li className="blog-card__item">
            <BlogCardSection />
          </li>
        </ul>
      </div>
      <BlogPostCta />
    </div>
  );
};
