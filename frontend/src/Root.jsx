import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { App } from './App';
import { MainPage } from './pages/MainPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactsPage } from './pages/ContactsPage';
import { ProjectPage } from './pages/ProjectPage/ProjectPage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<MainPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:projectSlug" element={<ProjectPage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  </Router>
);
