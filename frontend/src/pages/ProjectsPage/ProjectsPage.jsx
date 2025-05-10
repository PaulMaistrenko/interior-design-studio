import { useState } from 'react';
import { Breadcrumb } from '../../components/UI/Breadcrumb';
import { SectionTop } from '../../components/UI/SectionTop';
import { Selector } from '../../components/Selector/Selector';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { ProjectsCta } from '../../components/ProjectsCta';

export const ProjectsPage = () => {
  const currentPage = 'Портфоліо';
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [selectedSpace, setSelectedSpace] = useState(null);

  const styles = [
    'Еко стиль',
    'Індустріальний',
    'Скандинавський',
    'Мінімалізм',
  ];

  const spaces = ['Кухня', 'Вітальня', 'Санвузол'];

  const resetSelectors = () => {
    setSelectedSpace(null);
    setSelectedStyle(null);
  };

  return (
    <div className="page projects-page">
      <div className="container">
        <Breadcrumb currentPage={currentPage} />
        <SectionTop title="Портфоліо" tagline="“Дім - це більше,ніж стіни”" />
        <section className="filters-block" aria-label="Фільтри проєктів">
          <div className="selectors">
            <Selector
              title="Стиль"
              options={styles}
              selected={selectedStyle}
              onSelect={setSelectedStyle}
            />
            <Selector
              title="Приміщення"
              options={spaces}
              selected={selectedSpace}
              onSelect={setSelectedSpace}
            />
          </div>
          <button
            className="reset-selectors__button button--text-underline"
            onClick={resetSelectors}
          >
            Скинути фільтри
          </button>
        </section>
        <section className="projects">
          <ul className="projects__list grid">
            <ProjectCard title="Natural Flow" className="grid--onDesktop-1-6" />
            <ProjectCard
              title="Soft minimal"
              className="grid--onDesktop-7-12"
            />
            <ProjectCard
              title="Dark balance"
              className="grid--onDesktop-1-12"
            />
            <ProjectCard title="Eco horizon" className="grid--onDesktop-1-6" />
            <ProjectCard
              title="Stone & wood"
              className="grid--onDesktop-7-12"
            />
          </ul>
        </section>
      </div>
      <ProjectsCta />
    </div>
  );
};
