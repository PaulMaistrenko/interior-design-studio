import { Breadcrumb } from '../../components/UI/Breadcrumb';

export const ServicesPage = () => {
  const currentPage = 'Послуги';
  return (
    <div className="page services-page">
      <div className="container">
        <Breadcrumb currentPage={currentPage} />
      </div>
    </div>
  );
};
