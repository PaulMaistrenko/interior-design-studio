import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { App } from './App';
import { MainPage } from './pages/MainPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<MainPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="projects" element={<ProjectsPage />} />
      </Route>
    </Routes>
  </Router>
);
