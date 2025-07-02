import { SectionHeader } from '../../components/ui/SectionHeader';
import { BreadCrumb } from '../../components/ui/BreadCrumb';
import { Filters } from './components/Filters';
import { getProjectsList } from '../../utils/api';
import { useEffect, useState } from 'react';
import { CtaSection } from '../../components/ui/CtaSection';
import { ProjectsList } from './components/ProjectsList';

export const Portfolio = () => {
  const currentPage = 'Портфоліо';
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
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
          {projects && (
            <ProjectsList projects={projects} parentName="Портфоліо" />
          )}
        </div>
      </div>
      <CtaSection />
    </div>
  );
};
