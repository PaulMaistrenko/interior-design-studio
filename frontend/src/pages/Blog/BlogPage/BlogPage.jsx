import { BlogList } from '../BlogList/BlogList';
import { SectionTop } from '../../../components/UI/SectionTop';

export const BlogPage = () => {
  return (
    <div className="page blog-page">
      <div className="container">
        <SectionTop title="Блог" tagline="“Натхнення починається зі слова”" />
        <BlogList />
      </div>
    </div>
  );
};
