import { SectionHeader } from '../../components/ui/SectionHeader';
import { BreadCrumb } from '../../components/ui/BreadCrumb';
import { Filters } from './components/Filters';
import { CtaSection } from '../../components/ui/CtaSection';
import { ProjectsList } from './components/ProjectsList';
import { useMainContext } from '../../context';

export const Portfolio = () => {
  const { projects } = useMainContext();
  const currentPage = 'Портфоліо';

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
