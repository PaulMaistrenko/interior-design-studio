import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { MainPage } from './pages/MainPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactsPage } from './pages/ContactsPage';
import { ProjectPage } from './pages/ProjectPage/ProjectPage';
import { BlogPage } from './pages/BlogPage/BlogPage';
import { BlogCardPage } from './pages/BlogCardPage';

export const Root = () => (
  <BrowserRouter basename="/interior-design-studio">
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<MainPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:projectSlug" element={<ProjectPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:blogSlug" element={<BlogCardPage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
