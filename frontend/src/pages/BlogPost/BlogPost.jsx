import { motion } from 'framer-motion';
import { BreadCrumb } from '../../components/ui/BreadCrumb';
import { getBlogPosttById } from '../../utils/api';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BlogPostItem } from './components/BlogPostItem';
import { BlogPostCtaSection } from './components/BlogPostCtaSection';

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
    <motion.main
      className="page home-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <main className="page blog-post-page">
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
        <BlogPostCtaSection />
      </main>
    </motion.main>
  );
};
