import { Breadcrumb } from '../../components/UI/Breadcrumb';
import { SectionTop } from '../../components/UI/SectionTop';

export const ProjectsPage = () => {
  const currentPage = 'Портфоліо';
  return (
    <div className="page projects-page">
      <div className="container">
        <Breadcrumb currentPage={currentPage} />
        <SectionTop title="Портфоліо" tagline="“Дім - це більше,ніж стіни”" />
      </div>
    </div>
  );
};
