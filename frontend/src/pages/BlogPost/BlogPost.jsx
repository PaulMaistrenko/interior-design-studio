import { BreadCrumb } from '../../components/ui/BreadCrumb';
import { getBlogPosttById } from '../../utils/api';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BlogPostItem } from './components/BlogPostItem';

export const BlogPost = () => {
  const { blogPostId } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBlogPost = async () => {
      try {
        const data = await getBlogPosttById(blogPostId);
        setBlogPost(data);
      } catch (err) {
        setError(err.message);
        console.error('Помилка завантаження статті:', err);
      } finally {
        setLoading(false);
      }
    };

    if (blogPostId) {
      loadBlogPost();
    }
  }, [blogPostId]);

  return (
    <div className="page blog-post-page">
      <div className="container">
        {blogPost && (
          <article className="blog-post-content">
            <BreadCrumb
              items={[
                { title: 'Головна', href: '/' },
                { title: 'Блог', href: '/blog' },
                { title: blogPost.title },
              ]}
            />
            <section className="blog-post-page__top grid">
              <div
                className="blog-post__main-poster bg-image grid--onDesktop-1-12"
                style={{
                  backgroundImage: `url(${blogPost.image})`,
                }}
              ></div>
              <h1 className="blog-post__title h1--bold grid--onDesktop-2-11">
                {blogPost.title}
              </h1>
              <div className="blog-post__description grid--onDesktop-2-11">
                {blogPost.content}
              </div>
            </section>
            <section className="blog-post__main-content grid">
              <ul className="blog-post__components-list grid--onDesktop-2-11">
                {blogPost.components.map((item) => (
                  <li className="blog-post__components-item" key={item.id}>
                    <BlogPostItem details={item} />
                  </li>
                ))}
              </ul>
            </section>
          </article>
        )}
      </div>
      <section className="blog-post-page__cta-section grid">
        <div className="blog-post-cta__text-content grid--onDesktop-1-5">
          <h3 className="blog-post-cta__title h3--semibold">
            Не знаєш, який стиль підійде саме тобі?
          </h3>
          <p className="blog-post-cta__text">
            Залиши заявку - ми підберемо інтер’єр, який буде дійсно твоїм
          </p>
          <Link
            to="/contact"
            className="blog-post-cta__button button--text button"
          >
            Залишити заявку
          </Link>
        </div>
        <div className="blog-post-cta__image bg-image grid--onDesktop-8-12"></div>
      </section>
    </div>
  );
};
