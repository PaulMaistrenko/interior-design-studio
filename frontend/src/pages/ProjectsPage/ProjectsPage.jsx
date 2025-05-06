import { useState } from 'react';
import { Breadcrumb } from '../../components/UI/Breadcrumb';
import { SectionTop } from '../../components/UI/SectionTop';
import { Selector } from '../../components/Selector/Selector';

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
      </div>
    </div>
  );
};
