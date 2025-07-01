import { SectionHeader } from '../../components/ui/SectionHeader';
import { BreadCrumb } from '../../components/ui/BreadCrumb';
import { Filters } from './components/Filters';
import { ProjectCard } from '../../components/ui/ProjectCard';
import { getProjectsList } from '../../utils/api';
import { useEffect, useState } from 'react';
import { CtaSection } from '../../components/ui/CtaSection';

export const Portfolio = () => {
  const currentPage = 'Портфоліо';
  const [projects, setProjects] = useState([]);
  const [loading, setLoadig] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await getProjectsList();
        setProjects(data);
      } catch (err) {
        setError(err.message);
        console.error('Помилка завантаження:', err);
      } finally {
        setLoadig(false);
      }
    };
    loadProjects();
  }, []);

  console.log(projects);

  return (
    <div className="page portfolio-page">
      <div className="container">
        <BreadCrumb
          items={[
            { title: 'Головна', href: '/' },
            { title: currentPage, href: '/portfolio' },
          ]}
        />
      </div>
      <SectionHeader title="Портфоліо" slogan={`"Дім - це більше,ніж стіни"`} />
      <div className="container">
        <Filters />

        <div className="portfolio-page__content">
          <ul className="projects-list grid">
            <li className="projects-item grid--onDesktop-1-6">
              <ProjectCard title="Soft minimal" />
            </li>
            <li className="projects-item grid--onDesktop-7-12">
              <ProjectCard title="Natural flow" />
            </li>
            <li className="projects-item grid--onDesktop-1-12">
              <ProjectCard title="Dark balance" />
            </li>
            <li className="projects-item grid--onDesktop-1-6">
              <ProjectCard title="Eco horizon" />
            </li>
            <li className="projects-item grid--onDesktop-7-12">
              <ProjectCard title="Stone and Wood" />
            </li>
          </ul>
        </div>
      </div>
      <CtaSection />
    </div>
  );
};
