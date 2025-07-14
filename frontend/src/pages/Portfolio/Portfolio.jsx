import { useState, useMemo } from 'react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { BreadCrumb } from '../../components/ui/BreadCrumb';
import { Filters } from './components/Filters';
import { CtaSection } from '../../components/ui/CtaSection';
import { ProjectsList } from './components/ProjectsList';
import { useMainContext } from '../../context';

export const Portfolio = () => {
  const { projects } = useMainContext();
  const [selectedFilters, setSelectedFilters] = useState([]);
  const currentPage = 'Портфоліо';

  const getFilteredProjects = (projects, filters) => {
    if (!filters.length) return projects;

    const styles = [
      'Еко-стиль',
      'Індустріальний',
      'Скандинавський',
      'Мінімалізм',
    ];
    const areas = [
      'Вітальня',
      'Спальня',
      'Санвузол',
      'Кухня',
      'Гардеробна',
      'Дитяча',
    ];

    const selectedStyles = filters.filter((f) => styles.includes(f));
    const selectedAreas = filters.filter((f) => areas.includes(f));

    return projects.filter((project) => {
      const matchesStyle = selectedStyles.length
        ? selectedStyles.includes(project.style)
        : true;

      const matchesAreas = selectedAreas.length
        ? selectedAreas.every((tag) => project.tags.includes(tag))
        : true;

      return matchesStyle && matchesAreas;
    });
  };

  const filteredProjectsList = useMemo(() => {
    return getFilteredProjects(projects, selectedFilters);
  }, [projects, selectedFilters]);

  return (
    <div className="page portfolio-page">
      <div className="container">
        <BreadCrumb
          items={[
            { title: 'Головна', href: '/' },
            { title: currentPage, href: '/projects' },
          ]}
        />
      </div>
      <SectionHeader title="Портфоліо" slogan={`"Дім - це більше,ніж стіни"`} />
      <div className="container">
        <Filters
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />

        <div className="portfolio-page__content">
          <ProjectsList
            projects={filteredProjectsList}
            parentName="Портфоліо"
          />
        </div>
      </div>
      <CtaSection />
    </div>
  );
};
