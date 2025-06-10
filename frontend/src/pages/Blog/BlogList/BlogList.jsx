import { useEffect, useState } from 'react';
import { BlogCard } from '../BlogCard/BlogCard';
import { getArticleList } from '../../../utils/api';

export const BlogList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoadig] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await getArticleList();
        setArticles(data);
      } catch (err) {
        setError(err.message);
        console.error('Помилка завантаження:', err);
      } finally {
        setLoadig(false);
      }
    };
    loadArticles();
  }, []);

  return (
    <ul className="blog-list">
      {articles.map((article) => (
        <BlogCard key={article.id} article={article} />
      ))}
    </ul>
  );
};
