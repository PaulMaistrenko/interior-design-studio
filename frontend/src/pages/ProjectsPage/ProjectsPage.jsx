import { Breadcrumb } from '../../components/UI/Breadcrumb';

export const ProjectsPage = () => {
  const currentPage = 'Портфоліо';
  return (
    <div className="page projects-page">
      <div className="container">
        <Breadcrumb currentPage={currentPage} />
      </div>
    </div>
  );
};
