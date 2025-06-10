import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/Home/HomePage';
import { BlogPage } from './pages/Blog/BlogPage/BlogPage';
import { ServicesPage } from './pages/Services/ServicesPage';
import { PortfolioPage } from './pages/Portfolio/PortfolioPage/PortfolioPage';
import { ProjectPage } from './pages/Portfolio/ProjectPage/ProjectPage';
import { BlogPostPage } from './pages/Blog/BlogPostPage/BlogPostPage';
import { ContactsPage } from './pages/Contacts/ContactsPage/ContactsPage';

export const Root = () => (
  <BrowserRouter
    basename={
      process.env.NODE_ENV === 'production' ? '/interior-design-studio' : ''
    }
  >
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="projects" element={<PortfolioPage />} />
        <Route path="projects/:projectSlug" element={<ProjectPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:blogSlug" element={<BlogPostPage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
