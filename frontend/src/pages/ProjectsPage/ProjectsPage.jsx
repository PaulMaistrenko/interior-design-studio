import { SpaceSelector } from '../../components/Selectors/SpaceSelector/SpaceSelector';
import { StyleSelector } from '../../components/Selectors/StyleSelector/StyleSelector';
import { Breadcrumb } from '../../components/UI/Breadcrumb';
import { SectionTop } from '../../components/UI/SectionTop';

export const ProjectsPage = () => {
  const currentPage = 'Портфоліо';
  return (
    <div className="page projects-page">
      <div className="container">
        <Breadcrumb currentPage={currentPage} />
        <SectionTop title="Портфоліо" tagline="“Дім - це більше,ніж стіни”" />
        <section className="filters-block" aria-label="Фільтри проєктів">
          <div className="selectors">
            <StyleSelector />
            <SpaceSelector />
          </div>
          <button className="reset-selectors__button button--text-underline">
            Скинути фільтри
          </button>
        </section>
      </div>
    </div>
  );
};
